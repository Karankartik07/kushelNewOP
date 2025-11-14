"use client";
import React, { useEffect, useRef, useState } from "react";

import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { toast } from "react-toastify";
import { RxCross2 } from "react-icons/rx";
import "./hero.css";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RECAPTCHA_SITE_KEY =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ||
  "6Lc8UQosAAAAAL3zldS2VgjKnfRaMQqa2gzrXE82";

export default function HeroWebMum() {
  const [showModal, setShowModal] = useState(false);
  const [hasShownToast, setHasShownToast] = useState(false);
  const [hasShownToast2, setHasShownToast2] = useState(false);
  const [hasShownToast3, setHasShownToast3] = useState(false);
  const [hasShownToastM, setHasShownToastM] = useState(false);
  // const router = useRouter();
  const [isRecaptchaReady, setIsRecaptchaReady] = useState(false);
  const [recaptchaWidgetId, setRecaptchaWidgetId] = useState(null);
  const [recaptchaToken, setRecaptchaToken] = useState("");

  const navigate = useRouter();
  const recaptchaContainerRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    // phone: "",
  });
  const router = useRouter();
  const phoneInputRef = useRef(null);
  useEffect(() => {
    if (phoneInputRef.current) {
      const iti = intlTelInput(phoneInputRef.current, {
        initialCountry: "in",
        geoIpLookup: (callback) => {
          fetch("https://ipapi.co/json")
            .then((res) => res.json())
            .then((data) => callback(data.country_code))
            .catch(() => callback("in"));
        },
        utilsScript:
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
      });

      // Optional: Store the instance if you ever need to validate
      phoneInputRef.current._iti = iti;
    }
  }, []);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!RECAPTCHA_SITE_KEY) {
      console.warn("reCAPTCHA site key is missing.");
      return;
    }

    const SCRIPT_SRC =
      "https://www.google.com/recaptcha/api.js?render=explicit";

    const existingScript = Array.from(
      document.querySelectorAll(
        `script[src^="https://www.google.com/recaptcha/api.js"]`
      )
    ).find((scriptEl) => scriptEl.src === SCRIPT_SRC);

    const ensureReady = () => {
      if (window.grecaptcha) {
        window.grecaptcha.ready(() => setIsRecaptchaReady(true));
      } else {
        console.error("grecaptcha object not found after script load");
      }
    };

    if (existingScript) {
      if (existingScript.getAttribute("data-loaded") === "true") {
        ensureReady();
      } else {
        existingScript.addEventListener("load", () => {
          existingScript.setAttribute("data-loaded", "true");
          ensureReady();
        });
      }
      return;
    }

    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    script.id = "recaptcha-script";
    script.onload = () => {
      script.setAttribute("data-loaded", "true");
      ensureReady();
    };
    script.onerror = () => {
      console.error("Failed to load reCAPTCHA script from Google");
    };
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    if (
      isRecaptchaReady &&
      recaptchaContainerRef.current &&
      recaptchaWidgetId === null &&
      window.grecaptcha
    ) {
      window.grecaptcha.ready(() => {
        try {
          const widgetId = window.grecaptcha.render(
            recaptchaContainerRef.current,
            {
              sitekey: RECAPTCHA_SITE_KEY,
              size: "normal",
              callback: (token) => {
                setRecaptchaToken(token);
                setHasShownToast(false);
              },
              "expired-callback": () => {
                setRecaptchaToken("");
                console.warn("reCAPTCHA token expired");
              },
              "error-callback": () => {
                setRecaptchaToken("");
                console.error("reCAPTCHA encountered an error");
                toast.error("reCAPTCHA could not be loaded. Please retry.");
              },
            }
          );
          setRecaptchaWidgetId(widgetId);
        } catch (error) {
          console.error("Error rendering reCAPTCHA:", error);
          toast.error(
            "Failed to initialize security verification. Please refresh the page."
          );
        }
      });
    }
  }, [isRecaptchaReady, recaptchaWidgetId]);

  const handleChange = (e) => {
    setHasShownToast2(false);
    e.preventDefault();
    const { name, value } = e.target;

    let updatedValue = value;

    if (name === "name") {
      // ✅ Name only alphabets and spaces
      updatedValue = value.replace(/[^a-zA-Z\s]/g, "");
    }

    setFormData((prevState) => ({
      ...prevState,
      [name]: updatedValue,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const phone = phoneInputRef.current?.value || "";
    const phoneDigitsOnly = phone.replace(/\D/g, ""); // Only digits
    if (!formData.name || !formData.email || !phone) {
      toast.error("Please fill all the fields!");
      return;
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      setHasShownToast2(true);
      // toast.error("Invalid email address!");
      return;
    }
    if (phoneDigitsOnly.length < 10 || phoneDigitsOnly.length > 15) {
      setHasShownToast(true);
      setHasShownToastM(true);
      return;
    }

    if (!RECAPTCHA_SITE_KEY) {
      toast.error("Security verification is not configured.");
      return;
    }

    if (!isRecaptchaReady) {
      toast.error("Security check is loading. Please try again.");
      return;
    }

    if (!recaptchaToken) {
      setHasShownToast3(true);
      return;
    }

    router.push("/thankyou");
    setLoading(true);
    try {
      const dataToSend = {
        ...formData,
        phone: phoneDigitsOnly,
        page: PageName,
      };

      const response2 = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...dataToSend,
          recaptchaToken,
        }),
      });

      const response = await fetch("https://kds-kappa.vercel.app/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          mode: "no-cors",
        },
        body: JSON.stringify(dataToSend),
      });
      const result = await response.json();
      console.log("Result--->>", result);

      if (response.ok || response.success === true || response.status === 200) {
        router.push("/thankyou");
      } else {
        alert(`❌ Failed to send email: ${result.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("❌ Error while sending email:", error);
    } finally {
      setLoading(false);
      setFormData({ name: "", email: "" });
      phoneInputRef.current.value = ""; // reset manually
    }
  };
  const isSmallScreen =
    typeof window !== "undefined" && window.innerWidth <= 760;

  const formContent = (
    <div
      style={{
        position: "relative",
        background: "#fff",
        borderRadius: "10px",
        padding: "30px",
        maxWidth: 700,
        width: "98vw",
        boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
      }}
    >
      <button
        onClick={() => setShowModal(false)}
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          background: "transparent",
          border: "none",
          fontSize: "1.5rem",
          cursor: "pointer",
          zIndex: 10,
        }}
        aria-label="Close Contact Form"
      >
        <RxCross2 />
      </button>
      <h2 style={{ fontSize: 22, fontWeight: 600, textAlign: "center" }}>
        Take the First Step Toward{" "}
        <span style={{ fontWeight: 700 }}>your project</span>
      </h2>
      <p
        className="drop"
        style={{ color: "#0066ff", marginBottom: 20, textAlign: "center" }}
      >
        Drop your details below!
      </p>
      <form onSubmit={handleSubmit}>
        <input
          value={formData?.name}
          onChange={handleChange}
          required
          type="text"
          name="name"
          placeholder="Full Name"
          style={{
            width: "100%",
            padding: 12,
            margin: "10px 0",
            border: "none",
            borderBottom: "1px solid #ccc",
            fontSize: 15,
            outline: "none",
          }}
        />
        <input
          value={formData?.email}
          onChange={handleChange}
          required
          name="email"
          type="email"
          placeholder="Email*"
          style={{
            width: "100%",
            padding: 12,
            margin: "10px 0",
            border: "none",
            borderBottom: "1px solid #ccc",
            fontSize: 15,
            outline: "none",
          }}
        />
        {hasShownToast2 ? (
          <p className=" text-[#ef4444]">Please Enter valid email address!</p>
        ) : (
          ""
        )}
        <div
          className="phoneN"
          style={{ display: "flex", gap: 10, alignItems: "center" }}
        >
          <span style={{ fontWeight: "bold" }}>(+91)</span>
          <input
            name="phone"
            ref={phoneInputRef}
            onInput={(e) => {
              const digits = e.target.value.replace(/\D/g, "");
              if (digits.length <= 10) {
                e.target.value = digits;
                setHasShownToastM(false);
              } else {
                e.target.value = digits.slice(0, 10);
              }
            }}
            type="number"
            placeholder="Mobile Number"
            style={{
              flex: 1,
              padding: 12,
              border: "none",
              borderBottom: "1px solid #ccc",
              fontSize: 15,
              outline: "none",
            }}
          />
        </div>
        {hasShownToastM ? (
          <p className=" text-[#ef4444]">Please enter a valid phone number</p>
        ) : (
          ""
        )}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: 15,
            fontSize: 16,
            fontWeight: 600,
            background: "#0066ff",
            color: "#fff",
            border: "none",
            borderRadius: 30,
            marginTop: 10,
            cursor: "pointer",
          }}
          disabled={loading}
          className="submit"
        >
          {loading ? "Sending..." : "Submit"}
        </button>

        <p
          className="terms"
          style={{
            margin: "8px auto",
            textAlign: "center",
            width: "90%",
            fontSize: 13,
            color: "#333",
          }}
        >
          By clicking on submit, you agree to our{" "}
          <a
            href="/terms-conditions"
            style={{ color: "#0066ff", textDecoration: "none" }}
          >
            Terms & Condition
          </a>{" "}
          and{" "}
          <a
            href="/privacy-policy"
            style={{ color: "#0066ff", textDecoration: "none" }}
          >
            Privacy policy
          </a>
        </p>
      </form>
    </div>
  );
  const formRef = useRef(null);
  useEffect(() => {
    if ((hasShownToast || hasShownToast2) && formRef.current) {
      const elementTop =
        formRef.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementTop - 120,
        behavior: "smooth",
      });
    }
  }, [hasShownToast, hasShownToast2, hasShownToast3]);

  const [PageName, setPageName] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      const slug = path.split("/").pop();

      const PgName = slug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      setPageName(PgName);
    }
  }, []);

  return (
    <section className="hero-bigCom" ref={formRef}>
      <div className="overlay-black">
        <div className="containerN">
          {/* Left Section */}
          <div className="leftN">
            <h1>Crafting Websites That Inspire Trust and Action</h1>
            <p>
              Your website should do more than just look appealing — it should
              inspire confidence, guide visitors smoothly, and help your
              business grow. We design websites that combine creativity with
              strategy to deliver real results.
            </p>

            <ul className="features">
              <li className="feat-icon">
                {" "}
                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1758881377/next_1_fmsl3r_xd3qly.png" />{" "}
                Tailored designs that truly represent your brand
              </li>
              <li className="feat-icon">
                {" "}
                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1758881377/next_1_fmsl3r_xd3qly.png" />{" "}
                Seamless, responsive experience on every device
              </li>
              <li className="feat-icon">
                {" "}
                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1758881377/next_1_fmsl3r_xd3qly.png" />{" "}
                Intuitive layouts that turn visitors into loyal customers
              </li>
            </ul>

            <div className="partners">
              <img
                src="https://res.cloudinary.com/dxlykgx6w/image/upload/v1756447594/Group_1171281720_rpteuq.png"
                alt="BigCommerce"
              />
              <img
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1758881413/Group_1171281718_diwlmv_lcasly.png"
                alt="Shopify"
              />
              <img
                src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1758881413/Group_1171281719_ha4duf_x4g3rg.png"
                alt="Certified Partner"
              />
            </div>

            <div className="partnersN">
              <img
                src="https://res.cloudinary.com/dxlykgx6w/image/upload/v1756796115/Group_1171281850_f3pngy.png"
                alt="BigCommerce"
              />
              <img
                src="https://res.cloudinary.com/dxlykgx6w/image/upload/v1756796115/Group_1171281849_jgkg2j.png"
                alt="Shopify"
              />
              <img
                src="https://res.cloudinary.com/dxlykgx6w/image/upload/v1756796120/078b23cd8619148c3314eda77b86dd3cb5717e6d_qbj6ap.png"
                alt="Certified Partner"
              />
            </div>

            <div className="buttons">
              <Link href={"/contact-us"}>
                <button className="btnNew blue"> Get Free Consultation</button>
              </Link>

              <button
                className="btnNewhide blue"
                onClick={() => setShowModal(true)}
                // style={{ display: "block" }}
              >
                Get Free Consultation
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="rightN">
            <h2>
              Take the First Step Toward <span>your project</span>
            </h2>
            <p className="drop">Drop your details below!</p>

            <form onSubmit={handleSubmit}>
              <input
                value={formData?.name}
                onChange={handleChange}
                required
                type="text"
                name="name"
                placeholder="Full Name"
              />
              <input
                value={formData?.email}
                onChange={handleChange}
                required
                name="email"
                type="email"
                placeholder="Email*"
                className={`${
                  hasShownToast2
                    ? "outline outline-2 outline-[#ef4444]"
                    : "outline-none"
                } `}
              />
              {hasShownToast2 ? (
                <p className=" text-[#ef4444]">
                  Please Enter valid email address!
                </p>
              ) : (
                ""
              )}
              <div className="phoneN">
                <input
                  type="number"
                  placeholder="Mobile Number"
                  className={`${
                    hasShownToast
                      ? "outline outline-2 outline-[#ef4444]"
                      : "outline-none"
                  }  mblinp`}
                  name="phone"
                  ref={phoneInputRef}
                  onInput={(e) => {
                    const digits = e.target.value.replace(/\D/g, "");
                    if (digits.length <= 10) {
                      e.target.value = digits;
                      setHasShownToast(false);
                    } else {
                      e.target.value = digits.slice(0, 10);
                    }
                  }}
                  required
                />
              </div>
              {hasShownToast ? (
                <p className=" text-[#ef4444]">
                  Please enter a valid phone number
                </p>
              ) : (
                ""
              )}

              <div
                ref={recaptchaContainerRef}
                className="recaptcha-inline-badge"
              />
              {hasShownToast3 && (
                <p className="text-[#ef4444]">
                  Please verify that you are not a robot.
                </p>
              )}
              <button type="submit" disabled={loading} className="submit">
                {loading ? "Sending..." : "Submit"}
              </button>

              <p className="terms">
                By clicking on submit, you agree to our{" "}
                <a href="/terms-conditions">Terms & Condition</a> and{" "}
                <a href="/privacy-policy">Privacy policy</a>
              </p>
            </form>
          </div>
        </div>
        {/* Modal for small screens */}
        {showModal && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0,0,0,0.7)",
              zIndex: 999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {formContent}
          </div>
        )}
      </div>
    </section>
  );
}
