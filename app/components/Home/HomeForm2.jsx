"use client";
import { useEffect, useRef, useState } from "react";
// import "intl-tel-input/build/css/intlTelInput.css";
// import intlTelInput from "intl-tel-input";
import Image from "next/image";
import { useRouter } from "next/navigation";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./homeBan.css";

const RECAPTCHA_SITE_KEY =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ||
  "6Lc8UQosAAAAAL3zldS2VgjKnfRaMQqa2gzrXE82";

const Website2 = () => {
  const [hasShownToast, setHasShownToast] = useState(false);
  const [hasShownToast2, setHasShownToast2] = useState(false);
   const [hasShownToast3, setHasShownToast3] = useState(false);

  const [formData, setFormData] = useState({
    name2: "",
    phone2: "",
    email2: "",
    message2: "",
  });
  const [countryData, setCountryData] = useState({
    dialCode: "1",
    countryCode: "us",
  });
  const [loading, setLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isRecaptchaReady, setIsRecaptchaReady] = useState(false);
  const [recaptchaWidgetId, setRecaptchaWidgetId] = useState(null);
  const [recaptchaToken, setRecaptchaToken] = useState("");

  const navigate = useRouter();
  const recaptchaContainerRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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

  const handleFormChange = (e) => {
    setHasShownToast2(false);
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log({ [name]: value });
  };

  const handleForm = async (e) => {
    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(formData.email2)) {
      setHasShownToast2(true);
      return;
    }

    // Get only digits from phone number
    const digitsOnly = formData.phone2.replace(/\D/g, "");

    // Remove country code dynamically using the library's country data
    const dialCode = (countryData && countryData.dialCode) || "1";
    const countryCode = (countryData && countryData.countryCode) || "us";
    let phoneNumberOnly = digitsOnly;

    if (dialCode && digitsOnly.startsWith(dialCode)) {
      phoneNumberOnly = digitsOnly.substring(dialCode.length);
    }

    // Define expected phone number lengths for different countries (excluding country code)
    const countryPhoneLengths = {
      // 🌎 North America
      us: 10,
      ca: 10,
      mx: 10,
      ag: 10,
      bs: 10,
      bb: 10,
      bz: 7,
      cr: 8,
      cu: 8,
      dm: 10,
      do: 10,
      sv: 8,
      gd: 10,
      gt: 8,
      ht: 8,
      hn: 8,
      jm: 10,
      ni: 8,
      pa: 8,
      tt: 10,
      // 🌎 South America
      ar: 10,
      bo: 8,
      br: 11,
      cl: 9,
      co: 10,
      ec: 9,
      gy: 7,
      py: 9,
      pe: 9,
      sr: 7,
      uy: 9,
      ve: 10,
      // 🌍 Europe
      al: 9,
      ad: 6,
      am: 8,
      at: 10,
      by: 9,
      be: 9,
      ba: 8,
      bg: 9,
      hr: 9,
      cy: 8,
      cz: 9,
      dk: 8,
      ee: 8,
      fi: 10,
      fr: 9,
      de: 11,
      gr: 10,
      hu: 9,
      is: 7,
      ie: 9,
      it: 10,
      lv: 8,
      lt: 8,
      lu: 9,
      mt: 8,
      md: 8,
      mc: 8,
      me: 8,
      nl: 9,
      no: 8,
      pl: 9,
      pt: 9,
      ro: 10,
      ru: 10,
      rs: 9,
      sk: 9,
      si: 8,
      es: 9,
      se: 9,
      ch: 9,
      ua: 9,
      gb: 10,
      va: 6,
      // 🌍 Middle East & Central Asia
      ae: 9,
      bh: 8,
      ir: 10,
      iq: 10,
      il: 9,
      jo: 9,
      kw: 8,
      lb: 8,
      om: 8,
      qa: 8,
      sa: 9,
      sy: 9,
      ye: 9,
      tr: 10,
      az: 9,
      kz: 10,
      uz: 9,
      tj: 9,
      tm: 8,
      af: 9,
      // 🌏 Asia
      in: 10,
      pk: 10,
      bd: 10,
      np: 10,
      bt: 8,
      lk: 9,
      mm: 9,
      th: 9,
      vn: 9,
      kh: 9,
      la: 9,
      id: 10,
      ph: 10,
      my: 9,
      sg: 8,
      cn: 11,
      hk: 8,
      tw: 9,
      jp: 10,
      kr: 10,
      mn: 8,
      bn: 7,
      // 🌍 Africa
      dz: 9,
      ao: 9,
      bj: 8,
      bw: 8,
      bf: 8,
      bi: 8,
      cm: 9,
      cv: 7,
      cf: 8,
      td: 8,
      km: 7,
      cg: 9,
      cd: 9,
      ci: 8,
      dj: 8,
      eg: 10,
      gq: 9,
      er: 7,
      sz: 8,
      et: 9,
      ga: 8,
      gm: 7,
      gh: 9,
      gn: 9,
      gw: 7,
      ke: 9,
      ls: 8,
      lr: 7,
      ly: 9,
      mg: 9,
      mw: 9,
      ml: 8,
      mr: 8,
      mu: 8,
      ma: 9,
      mz: 9,
      na: 9,
      ne: 8,
      ng: 10,
      rw: 9,
      st: 7,
      sn: 9,
      sc: 7,
      sl: 8,
      so: 9,
      za: 9,
      ss: 9,
      sd: 9,
      tz: 9,
      tg: 8,
      tn: 8,
      ug: 9,
      zm: 9,
      zw: 9,
      // 🌊 Oceania
      au: 9,
      nz: 9,
      fj: 7,
      pg: 8,
      sb: 7,
      vu: 7,
      ws: 7,
      to: 7,
      tv: 5,
      ki: 8,
      nr: 7,
      pw: 7,
      mh: 7,
      // 🏝️ Territories & Others
      pr: 10,
      gu: 10,
      vi: 10,
      pf: 8,
      nc: 6,
      re: 9,
      yt: 9,
      gp: 9,
      mq: 9,
      gi: 8,
      fo: 6,
      gl: 6,
      im: 10,
      je: 10,
      gg: 10,
    };

    // Get expected length for current country, default to 10
    const expectedLength = countryPhoneLengths[countryCode.toLowerCase()] || 10;

    // Validate phone number length based on country
    if (
      phoneNumberOnly.length !== expectedLength ||
      !/^\d+$/.test(phoneNumberOnly)
    ) {
      setHasShownToast(true);
      return;
    }

    if (
      formData.name2.trim() === "" ||
      formData.phone2.trim() === "" ||
      formData.email2.trim() === "" ||
      formData.message2.trim() === ""
    ) {
      toast.error("Please fill all fields");
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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken,
        }),
      });
      const responsenew = await fetch("https://kds-kappa.vercel.app/contact2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
        }),
      });

      const data2 = await responsenew.json();
      if (data2.success) {
        toast.success("Form submitted successfully!");
        navigate.push("/thankyou");
        setFormData({
          name2: "",
          phone2: "",
          email2: "",
          message2: "",
        });
      } else {
        // toast.error(data.message || "Unable to submit form. Please try again later.");
      }
      const data = await response.json();

      if (data.success) {
        // toast.success("Form submitted successfully!");
        navigate.push("/thankyou");
        setFormData({
          name2: "",
          phone2: "",
          email2: "",
          message2: "",
        });
      } else {
        toast.error(
          data.message || "Unable to submit form. Please try again later."
        );
      }
    } catch (error) {
      console.error("Error while sending email:", error);
      toast.error("Unable to submit form. Please try again.");
    } finally {
      setLoading(false);
      if (recaptchaWidgetId !== null && window.grecaptcha) {
        window.grecaptcha.reset(recaptchaWidgetId);
      }
      setRecaptchaToken("");
    }
  };

  useEffect(() => {
    if ((hasShownToast || hasShownToast2) && formRef.current) {
      const elementTop =
        formRef.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementTop - 240,
        behavior: "smooth",
      });
    }
  }, [hasShownToast, hasShownToast2,hasShownToast3]);

  return (
    <>
      <div className="contact-container" id="form-section">
        <div className="inner-contact-container" id="innerIdcont">
          <div className="left">
            <h3 className="left-contact-heading">
              Want to Lead Market with AI-led Digital Solutions?
            </h3>
            <div className="contact-box">
              <div className="contact-card">
                <p className="call-us" id="CallusI">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="12"
                      fill="url(#pattern0_3584_1530)"
                    />
                    <defs>
                      <pattern
                        id="pattern0_3584_1530"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use
                          xlinkHref="#image0_3584_1530"
                          transform="translate(-0.455882) scale(0.00735294)"
                        />
                      </pattern>
                      <image
                        id="image0_3584_1530"
                        width="260"
                        height="136"
                        xlinkHref="data:image/png;base64,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"
                      />
                    </defs>
                  </svg>
                </p>
                <a href="tel:+15855662070">
                  <h3 className="us-number">+1 585-566-2070</h3>
                </a>
                <p className="country">United States</p>
                <svg
                  className="phone-icon"
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 300.000000 300.000000"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g
                    transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
                    fill="#1b76fe"
                    stroke="none"
                  >
                    <path
                      d="M1473 2986 c-87 -40 -97 -178 -15 -220 15 -7 68 -17 117 -21 204 -16
347 -54 505 -136 232 -119 417 -305 535 -540 77 -151 115 -296 130 -494 8
-102 23 -138 65 -160 66 -34 149 -5 177 63 28 68 -3 318 -63 502 -191 583
-709 979 -1329 1015 -67 4 -98 2 -122 -9z"
                    />
                    <path
                      d="M520 2760 c-224 -58 -400 -210 -481 -415 -21 -54 -23 -75 -22 -200 3
-583 336 -1220 855 -1637 251 -203 553 -358 839 -432 201 -52 446 -77 554 -57
169 31 352 175 434 342 45 91 81 218 81 283 0 46 -27 97 -64 121 -20 13 -487
99 -909 166 -116 18 -175 -19 -197 -126 l-12 -56 -56 32 c-264 148 -525 399
-707 679 -97 149 -94 137 -30 150 107 22 144 81 126 197 -67 422 -153 889
-166 909 -42 65 -113 78 -245 44z"
                    />
                    <path
                      d="M1460 2408 c-47 -32 -62 -63 -56 -118 3 -35 11 -51 38 -76 31 -28 43
-32 121 -38 335 -27 586 -278 613 -613 6 -78 10 -90 38 -121 25 -27 41 -35 76
-38 55 -6 86 9 118 56 22 33 24 41 18 124 -15 223 -104 418 -262 578 -156 157
-358 249 -579 264 -84 6 -92 4 -125 -18z"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <span className="clients">Our Clients</span>
            <div className="company-images">
              <Image
                width="451"
                height="65"
                loading="lazy"
                className="contact-company"
                src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743446905/LOGOS-1_dhbr7h.png"
                // src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1743073826/contact-upper-companies_pwuwvi.png"
                alt="some project logos by Kushel Digi Solutions "
                style={{ margin: "0px auto", width: "70%" }}
              />
              <Image
                width="387"
                height="40"
                loading="lazy"
                className="contact-company"
                src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743446905/LOGO-2_mhkyhy.png"
                // src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1743073826/contact-below-companies_qyrqms.png"
                alt="some project logos by Kushel Digi Solutions "
                style={{ margin: "15px auto", width: "60%" }}
              />
            </div>
          </div>
          <div className="right">
            <h3 className="contact-heading">
              Share Your Ideas, We'll Build it.
            </h3>
            <form
              ref={formRef}
              onSubmit={handleForm}
              className="contact-htmlForm"
              id="contacthtmlForm"
            >
              <div className="contact-first-div">
                <div>
                  <label htmlFor="name2" className="contact-label">
                    Name
                  </label>
                  <br />
                  <input
                    className="contact-input down-contact-name-input"
                    type="text"
                    placeholder="Your Name"
                    name="name2"
                    id="name2"
                    required
                    value={formData?.name2}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (/^[A-Za-z ]*$/.test(value)) {
                        handleFormChange(e);
                      }
                    }}
                  />
                </div>

                <div id="homePhoneDiv" suppressHydrationWarning>
                  <label htmlFor="phone2" className="contact-label">
                    Phone Number
                  </label>

                  {isMounted && (
                    <PhoneInput
                      className={`${
                        hasShownToast
                          ? "outline outline-2 outline-[#ef4444]"
                          : "outline-none"
                      } contact-input`}
                      country={"us"}
                      placeholder="Phone Number"
                      name="phone2"
                      id="phone2"
                      value={formData?.phone2}
                      onChange={(phone2, country) => {
                        setHasShownToast(false);
                        if (/^(?:\+?[0-9]{0,15})$/.test(phone2)) {
                          setFormData((prev) => ({ ...prev, phone2: phone2 }));
                          setCountryData(country);
                        }
                      }}
                      inputProps={{
                        required: true,
                      }}
                      enableSearch={true}
                      searchPlaceholder="Search country..."
                    />
                  )}
                  {hasShownToast ? (
                    <p className=" text-[#ef4444]">
                      Please enter a valid phone number
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="contact-div">
                <label htmlFor="email2" className="contact-label">
                  Business Email
                </label>{" "}
                <br />
                <input
                  className={`${
                    hasShownToast2
                      ? "!outline !outline-2 !outline-[#ef4444]"
                      : "outline-none"
                  } contact-input contact-emailInput`}
                  type="email"
                  name="email2"
                  id="email2"
                  placeholder="Email"
                  value={formData?.email2}
                  onChange={handleFormChange}
                  required
                />
                {hasShownToast2 ? (
                  <p className=" text-[#ef4444]">
                    Please Enter valid email address!
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="contact-div">
                <label htmlFor="message2" className="contact-label">
                  Project Description
                </label>{" "}
                <br />
                <textarea
                  className="contact-textArea"
                  name="message2"
                  id="message2"
                  placeholder="How Can We Help You?*"
                  required
                  value={formData?.message2}
                  onChange={handleFormChange}
                ></textarea>
              </div>

              <div
                ref={recaptchaContainerRef}
                className="recaptcha-inline-badge"
              />
               {hasShownToast3 && (
                  <p className="text-[#ef4444]">
                   Please verify that you are not a robot.
                  </p>
                )}
              <button
                disabled={loading}
                className="contact-htmlForm-btn"
                type="submit"
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Website2;
