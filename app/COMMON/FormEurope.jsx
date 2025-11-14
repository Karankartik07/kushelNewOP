"use client";

import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const RECAPTCHA_SITE_KEY =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ||
  "6Lc8UQosAAAAAL3zldS2VgjKnfRaMQqa2gzrXE82";

export default function FormEurope({ num, countryCode }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    // phone: "",
  });
  const router = useRouter();
  const [hasShownToast, setHasShownToast] = useState(false);
  const [hasShownToast2, setHasShownToast2] = useState(false);
  const [hasShownToast3, setHasShownToast3] = useState(false);
  const [isRecaptchaReady, setIsRecaptchaReady] = useState(false);
  const [recaptchaWidgetId, setRecaptchaWidgetId] = useState(null);
  const [recaptchaToken, setRecaptchaToken] = useState("");

  const recaptchaContainerRef = useRef(null);

  const phoneInputRef = useRef(null);
  useEffect(() => {
    if (phoneInputRef.current) {
      const iti = intlTelInput(phoneInputRef.current, {
        initialCountry: countryCode || "bg",
        geoIpLookup: (callback) => {
          fetch("https://ipapi.co/json")
            .then((res) => res.json())
            .then((data) => callback(data.country_code))
            .catch(() => callback(`${countryCode || "bg"}`));
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
      setHasShownToast(true);
      return;
    }
    const emailRegex =
      /^(?!.*\.\.)[A-Za-z0-9._]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
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
        phone: phoneDigitsOnly,
        page: PageName,
      };

      const response2 = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
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
      router.push("/thankyou");
      if (response.ok || response.success === true || response.status === 200) {
      } else {
        alert(`❌ Failed to send email: ${result.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("❌ Error while sending email:", error);
    } finally {
      setLoading(false);
      setFormData({ name: "", email: "" });
      phoneInputRef.current.value = ""; // reset manually
      generateCaptcha();
    }
  };
  const navigate = useRouter();
  //   const scrollToFormHome = () => {
  //     const formSection = document.getElementById("form-section");
  //     if (formSection) {
  //       const yOffset = -120;
  //       const y =
  //         formSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
  //       window.scrollTo({ top: y, behavior: "smooth" });
  //     }
  //   };
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
    <div className="bulgaria-banner-form" ref={formRef}>
      <form className="form-box" onSubmit={handleSubmit}>
        <h3 className="form-heading">
          Are you ready to start <strong>your project?</strong>
        </h3>
        <p className="form-subheading">Drop your details below!</p>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="form-input"
          value={formData?.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email*"
          className={`${
            hasShownToast2
              ? "outline outline-2 outline-[#ef4444]"
              : "outline-none"
          } form-input `}
          value={formData?.email}
          onChange={handleChange}
          required
        />
        {hasShownToast2 ? (
          <p className=" text-[#ef4444]">Please Enter valid email address!</p>
        ) : (
          ""
        )}
        <div className="form-phone-wrapper">
          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number*"
            className={`${
              hasShownToast
                ? "outline outline-2 outline-[#ef4444]"
                : "outline-none"
            } form-input phone-input`}
            ref={phoneInputRef}
            onInput={(e) => {
              const digits = e.target.value.replace(/\D/g, ""); // remove non-digits
              if (digits.length <= num) {
                e.target.value = digits;
                setHasShownToast(false);
              } else {
                e.target.value = digits.slice(0, num);
              }
            }}
            required
          />
        </div>
        {hasShownToast ? (
          <p className=" text-[#ef4444]">
            Please Enter {num} digit Phone Number
          </p>
        ) : (
          ""
        )}

        <div ref={recaptchaContainerRef} className="recaptcha-inline-badge" />
        {hasShownToast3 && (
          <p className="text-[#ef4444]">
            Please verify that you are not a robot.
          </p>
        )}
        <div className="mt-btn">
          <button className="form-submit-btn" type="submit" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </button>
          {loading && <span className="loader3"></span>}
        </div>

        <p className="form-terms">
          By clicking on submit, you agree to our
          <a href="/terms-conditions"> Terms & Condition</a> and
          <a href="/privacy-policy"> Privacy policy</a>
        </p>
      </form>
    </div>
  );
}
