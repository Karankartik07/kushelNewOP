"use client";

import React, { useEffect, useRef, useState } from "react";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { RxCross1 } from "react-icons/rx";
import "./PopUp.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { toast } from "react-toastify";

const RECAPTCHA_SITE_KEY =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ||
  "6Lc8UQosAAAAAL3zldS2VgjKnfRaMQqa2gzrXE82";

const Popup = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [hasShownToast, setHasShownToast] = useState(false);
  const [hasShownToast2, setHasShownToast2] = useState(false);
  const [hasShownToast3, setHasShownToast3] = useState(false);

  const [isRecaptchaReady, setIsRecaptchaReady] = useState(false);
  const [recaptchaWidgetId, setRecaptchaWidgetId] = useState(null);
  const [recaptchaToken, setRecaptchaToken] = useState("");

  const navigate = useRouter();
  const recaptchaContainerRef = useRef(null);
  const formRef = useRef(null);

  const router = useRouter();

  const phoneInputRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

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
    // Only try to render if popup is shown
    if (
      showPopUp &&
      isRecaptchaReady &&
      recaptchaContainerRef.current &&
      window.grecaptcha
    ) {
      // If already rendered, reset and re-render
      if (recaptchaWidgetId !== null) {
        try {
          window.grecaptcha.reset(recaptchaWidgetId);
        } catch (e) {}
      }
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
        // console.error("Error rendering reCAPTCHA:", error);
        // toast.error(
        //   "Failed to initialize security verification. Please refresh the page."
        // );
      }
    }
    // When popup closes, reset widgetId and token
    if (!showPopUp && recaptchaWidgetId !== null) {
      setRecaptchaWidgetId(null);
      setRecaptchaToken("");
    }
  }, [showPopUp, isRecaptchaReady, recaptchaContainerRef.current]);

  useEffect(() => {
    if (phoneInputRef.current) {
      intlTelInput(phoneInputRef.current, {
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
    }
  }, []);

  const handleChange = (e) => {
    setHasShownToast(false);
    setHasShownToast2(false);
    const { name, value } = e.target;

    let updatedValue = value;

    if (name === "phone") {
      updatedValue = value.replace(/[^0-9]/g, "").slice(0, 10);
    }

    if (name === "name") {
      updatedValue = value.replace(/[^a-zA-Z\s]/g, "");
    }

    setFormData((prevState) => ({
      ...prevState,
      [name]: updatedValue,
      page: "POP UP Form",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(formData.email)) {
      setHasShownToast2(true);
      return;
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      setHasShownToast(true);
      return;
    }

    if (
      formData.name.trim() === "" ||
      formData.phone.trim() === "" ||
      formData.email.trim() === ""
    ) {
      toast.error("Please fill all the fields!!");
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
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log("Result--->>", result);
      const data = await response2.json();
      if (data.success) {
        //  toast.success("Form submitted successfully!");
        navigate.push("/thankyou");
      }
      if (response.ok) {
        // persist a flag so the popup won't show again across browser sessions
        try {
          localStorage.setItem("popupShown", "true");
        } catch (e) {
          // localStorage may be unavailable in some environments; fallback to sessionStorage
          sessionStorage.setItem("popupShown", "true");
        }
        router.push("/thankyou");
      } else {
        alert(`❌ Failed to send email: ${result.message || "Unknown error"} `);
      }
    } catch (error) {
      console.error("❌ Error while sending email:", error);
    } finally {
      setLoading(false);
      setFormData({ name: "", email: "", phone: "" });
    }
  };

  useEffect(() => {
    const isShown = sessionStorage.getItem("popupShown");

    if (!isShown) {
      const timer = setTimeout(() => {
        // Show popup and mark it as shown in sessionStorage
        try {
          sessionStorage.setItem("popupShown", "true");
        } catch (e) {
          console.error("SessionStorage unavailable:", e);
        }
        setShowPopUp(true);
      }, 10000); // 10 seconds delay

      // Cleanup timer when component unmounts
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {showPopUp && (
        <section className="popup-modal" id="popupModal">
          <div className="modal-box">
            <div
              className="cross-icon"
              onClick={() => {
                try {
                  localStorage.setItem("popupShown", "true");
                } catch (e) {
                  sessionStorage.setItem("popupShown", "true");
                }
                setShowPopUp(false);
              }}
            >
              <RxCross1 />
            </div>
            <div className="upper-modal-box">
              <div className="upper-left-content">
                <h3 className="popup-form-heading">
                  Hey Hey! Before You Leave...👋
                </h3>
                <hr className="popup-hr" />
                <p className="popupup-sm-heading">
                  Our Experts are Ready to Provide Free
                </p>
                <p className="popup-para">
                  <img
                    width={20}
                    src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743446922/right-icon_dqytxe.png"
                    alt=""
                  />{" "}
                  Development Blueprint.
                </p>
                <p className="popup-para">
                  <img
                    width={20}
                    src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743446922/right-icon_dqytxe.png"
                    alt=""
                  />{" "}
                  Tentative Budget.
                </p>
                <p className="popup-para">
                  <img
                    width={20}
                    src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743446922/right-icon_dqytxe.png"
                    alt=""
                  />{" "}
                  Estimated Time-To-Market.
                </p>
              </div>
            </div>
            <div className="bottom-modal-box">
              <div>
                <div className="bottom-left-box">
                  <h3 className="bottom-left-box-heading">95%</h3>
                  <p className="popup-extra-small-heading ninty_five">
                    Customer Retention Ratio
                  </p>
                </div>
                <div className="bottom-left-box">
                  <h3 className="bottom-left-box-heading">2000+</h3>
                  <p className="popup-extra-small-heading">Projects</p>
                </div>
              </div>
              <hr className="bottom-popup-hr" />

              <div>
                <div className="bottom-right-box">
                  <h3 className="bottom-right-box-heading">1800+</h3>
                  <p className="popup-extra-small-heading ninty_five">
                    Certified Professionals
                  </p>
                </div>
                <div className="bottom-right-box">
                  <h3 className="bottom-right-box-heading">20+</h3>
                  <p className="popup-extra-small-heading">Global Offices</p>
                </div>
              </div>
            </div>

            <div className="pop-right-parent-div">
              <div className="pop-rightForm">
                <h3 className="popup-contact-heading">
                  Let’s Build your Success Together!
                </h3>
                <form
                  className="pop-contact-form"
                  id="contactForm"
                  onSubmit={handleSubmit}
                >
                  <div className="input-parent-div">
                    <input
                      className="pop-contact-input"
                      type="text"
                      placeholder="Your Name"
                      name="name"
                      value={formData?.name}
                      onChange={handleChange}
                      required
                    />
                    <input
                      className="pop-contact-input"
                      type="email"
                      name="email"
                      placeholder="Business Email"
                      value={formData?.email}
                      onChange={handleChange}
                      required
                    />
                    {hasShownToast2 ? (
                      <p className=" text-[#ef4444]">
                        Please Enter valid email address!
                      </p>
                    ) : (
                      ""
                    )}
                    <input
                      className="pop-contact-input"
                      type="tel"
                      placeholder="Phone Number"
                      name="phone"
                      maxLength={10}
                      value={formData?.phone}
                      onChange={handleChange}
                      ref={phoneInputRef}
                      required
                    />
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
                  </div>

                  {/* <div className="captcha-box">
                    <div className="inputcapt">
                      <label htmlFor="ans-captch" className="visually-hidden">
                        {`${firstNo} + ${secondNo} = `}
                      </label>
                      <input
                        type="number"
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                        required
                        id="ans-captch"
                      />
                    </div>
                    <span className="captcha-btn" onClick={verifyCaptcha}>
                      Verify Captcha
                    </span>
                  </div> */}

                  <button
                    className="pop-contact-form-btn"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Submit"}
                  </button>
                  {loading && <span className="loader3"></span>}

                  <Image
                    style={{ width: "70%", margin: "10px auto" }}
                    className="popup-companies"
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1743073874/popup-upper-companies_qxbjt0.png"
                    loading="lazy"
                    width="315"
                    height="57"
                    alt="companies"
                  />
                  <Image
                    style={{ width: "80%", margin: "15px auto" }}
                    className="popup-companies"
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1743073843/popup-below-companies_yboe3z.png"
                    loading="lazy"
                    width="360"
                    height="29"
                    alt="companies"
                  />
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Popup;
