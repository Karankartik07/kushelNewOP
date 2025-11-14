"use client";
import { useEffect, useRef, useState } from "react";
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

const Website = () => {
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
    dialCode: "91",
    countryCode: "in",
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
    const dialCode = (countryData && countryData.dialCode) || "91";
    const countryCode = (countryData && countryData.countryCode) || "in";
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
                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAACICAIAAACObwJKAAAACXBIWXMAAAsTAAALEwEAmpwYAAABR0lEQVR4nO3BMQEAAADCoPVPbQwfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOA1v9QAATX68/0AAAAASUVORK5CYII="
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
              <div className="contact-card">
                <p className="call-us">
                  <Image
                    width="34"
                    height="30"
                    loading="lazy"
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1742367985/istockphoto-1471401435-612x612-removebg-preview_yk8kie.png"
                    alt="Indian flag icon"
                  />
                </p>
                <a href="tel:+919045301702">
                  <h3 className="us-number">+91 9045301702</h3>
                </a>
                <p className="country">India</p>

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
                alt="some project logos by Kushel Digi Solutions"
                style={{ margin: "0px auto", width: "70%" }}
              />
              <Image
                width="387"
                height="40"
                loading="lazy"
                className="contact-company"
                src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743446905/LOGO-2_mhkyhy.png"
                alt="some project logos by Kushel Digi Solutions"
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
                      country={"in"}
                      placeholder="Phone Number"
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
                        name: "phone2",
                        id: "phone2",
                      }}
                      enableSearch={true}
                      searchPlaceholder="Search country..."
                    />
                  )}
                  {hasShownToast && (
                    <p className="text-[#ef4444]">
                      Please enter a valid phone number
                    </p>
                  )}
                </div>
              </div>
              <div className="contact-div">
                <label htmlFor="email2" className="contact-label">
                  Business Email
                </label>
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
                {hasShownToast2 && (
                  <p className="text-[#ef4444]">
                    Please Enter valid email address!
                  </p>
                )}
              </div>
              <div className="contact-div">
                <label htmlFor="message2" className="contact-label">
                  Project Description
                </label>
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
              {/* <p className="recaptcha-note">
                This site is protected by reCAPTCHA and the Google{" "}
                <a
                  href="/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a
                  href="/terms-conditions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms of Service
                </a>{" "}
                apply.
              </p> */}
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

export default Website;
