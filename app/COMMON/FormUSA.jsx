"use client";
import React, { useEffect, useRef, useState } from "react";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "./details.css";

import { useRouter } from "next/navigation";

const RECAPTCHA_SITE_KEY =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ||
  "6Lc8UQosAAAAAL3zldS2VgjKnfRaMQqa2gzrXE82";

export default function FormUSA({ num, countryCode }) {
  const [formData, setFormData] = useState({
    name2: "",
    email2: "",
    phone2: "",
    message2: "",
  });
  const [hasShownToast, setHasShownToast] = useState(false);
  const [hasShownToast2, setHasShownToast2] = useState(false);
   const [hasShownToast3, setHasShownToast3] = useState(false);
  const router = useRouter();
  const [isRecaptchaReady, setIsRecaptchaReady] = useState(false);
  const [recaptchaWidgetId, setRecaptchaWidgetId] = useState(null);
  const [recaptchaToken, setRecaptchaToken] = useState("");

  const navigate = useRouter();
  const recaptchaContainerRef = useRef(null);
  // const formRef = useRef(null);
  const phoneInputRef = useRef(null);
  useEffect(() => {
    if (phoneInputRef.current) {
      const iti = intlTelInput(phoneInputRef.current, {
        initialCountry: countryCode || "us",
        geoIpLookup: (callback) => {
          fetch("https://ipapi.co/json")
            .then((res) => res.json())
            .then((data) => callback(data.country_code))
            .catch(() => callback(`${countryCode || "us"}`));
        },
        utilsScript:
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
      });

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

    if (name === "name2") {
      // Name only alphabets and spaces
      updatedValue = value.replace(/[^a-zA-Z\s]/g, "");
    }

    setFormData((prevState) => ({
      ...prevState,
      [name]: updatedValue,
    }));
  };
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
  }, [hasShownToast, hasShownToast2,hasShownToast3]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const phone2 = phoneInputRef.current?.value || "";
    const phoneDigitsOnly = phone2.replace(/\D/g, "");

    if (!formData.name2 || !formData.email2 || !phoneDigitsOnly) {
      toast.error("Please fill all the fields!");
      return;
    }

    const emailRegex =
      /^(?!.*\.\.)[A-Za-z0-9._]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!emailRegex.test(formData.email2)) {
      setHasShownToast2(true);
      // toast.error("Invalid email address!");
      return;
    }

    if (phoneDigitsOnly.length !== num) {
      setHasShownToast(true);
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

    setLoading(true);

    try {
      const dataToSend = {
        ...formData,
        phone2: phoneDigitsOnly,
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
      const response = await fetch("https://kds-kappa.vercel.app/contact2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      router.push("/thankyou");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Result--->>", result);
    } catch (error) {
      console.error("❌ Error while sending email:", error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
      setFormData({ name2: "", email2: "", message2: "", phone2: "" });
      if (phoneInputRef.current) phoneInputRef.current.value = "";
    }
  };
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
    <form className="getquote-wrapper" ref={formRef} onSubmit={handleSubmit}>
      <div className="getquote-form">
        <div className="getquote-header"></div>
        <h2 ref={formRef}>GET A FREE QUOTE</h2>

        <label className="getquote-form-label">Enter your name</label>
        <input
          type="text"
          name="name2"
          placeholder="Full Name*"
          className="form-input"
          value={formData?.name2}
          onChange={handleChange}
          required
        />

        <label className="getquote-form-label">Enter your Email</label>
        <input
          type="email"
          name="email2"
          placeholder="Email*"
          className={`${
            hasShownToast2
              ? "outline outline-2 outline-[#ef4444]"
              : "outline-none"
          } form-input `}
          value={formData?.email2}
          onChange={handleChange}
          required
        />
        {hasShownToast2 ? (
          <p className=" text-[#ef4444]">Please Enter valid email address!</p>
        ) : (
          ""
        )}
        <label className="getquote-form-label">Contact No.</label>
        <div className="form-phone-wrapper">
          <input
            type="tel"
            name="phone2"
            placeholder="Mobile Number*"
            className={`${
              hasShownToast
                ? "outline outline-2 outline-[#ef4444]"
                : "outline-none"
            } form-input phone-input`}
            ref={phoneInputRef}
            onInput={(e) => {
              const digits = e.target.value.replace(/\D/g, "");

              if (digits.length <= num) {
                e.target.value = digits;
                setHasShownToast(false);
              } else {
                e.target.value = digits.slice(0, num);
              }
            }}
            required
          />
          {hasShownToast ? (
            <p className=" text-[#ef4444]">
              Please Enter {num} digit Phone Number
            </p>
          ) : (
            ""
          )}
        </div>

        <label htmlFor="message" className="getquote-form-label">
          Message
        </label>
        <textarea
          className="form-input textFormArea resize-none"
          name="message2"
          id="message"
          placeholder="How Can We Help You?*"
          required
          value={formData?.message2}
          onChange={handleChange}
        ></textarea>
        <div ref={recaptchaContainerRef} className="recaptcha-inline-badge" />
         {hasShownToast3 && (
                  <p className="text-[#ef4444]">
                   Please verify that you are not a robot.
                  </p>
                )}
        <button className="form-submit-btn" type="submit" disabled={loading}>
          {loading ? "Sending..." : "Submit"}
        </button>
        {loading && <span className="loader3"></span>}

        <p className="getquote-terms">
          By clicking on submit, you agree to
          <br />
          our <a href="/terms-conditions">Terms & Condition</a> and{" "}
          <a href="/privacy-policy">Privacy policy</a>
        </p>
      </div>
    </form>
  );
}
