"use client";
import React, { useEffect, useRef, useState } from "react";
import "./ContactUs.css";

import { useRouter } from "next/navigation";
import { FaAward, FaUserAlt } from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../components/Home/homeBan.css";

const RECAPTCHA_SITE_KEY =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ||
  "6Lc8UQosAAAAAL3zldS2VgjKnfRaMQqa2gzrXE82";

const ContactUs = () => {
  const interestsOptions = [
    "UI/UX Design",
    "E-Commerce Solution",
    "Web development",
    "Mobile App Development",
    // "Digital Marketing",
    "Graphic Design",
    "Staff Augmentation",
    "Other",
  ];

  const handleChange1 = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "file") {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleInterestClick = (interest) => {
    setFormData((prev) => {
      const isSelected = prev.interests.includes(interest);
      return {
        ...prev,
        interests: isSelected
          ? prev.interests.filter((item) => item !== interest)
          : [...prev.interests, interest],
      };
    });
  };

  const [hasShownToast, setHasShownToast] = useState(false);
  const [hasShownToast2, setHasShownToast2] = useState(false);
  const [hasShownToast3, setHasShownToast3] = useState(false);

  const [formData, setFormData] = useState({
    name11: "",
    phone11: "",
    email11: "",
    message11: "",
    service11: [],
    termsAccepted: false,
  });

  const router = useRouter();
  const [isRecaptchaReady, setIsRecaptchaReady] = useState(false);
  const [recaptchaWidgetId, setRecaptchaWidgetId] = useState(null);
  const [recaptchaToken, setRecaptchaToken] = useState("");

  // const navigate = useRouter();
  const recaptchaContainerRef = useRef(null);
  // const formRef = useRef(null);
  const phoneInputRef = useRef(null);

  const [countryData, setCountryData] = useState({
    dialCode: "91",
    countryCode: "in",
  });
  // const [loading, setLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleChange = (e) => {
    setHasShownToast2(false);
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        service11: checked
          ? [...prev.service11, value]
          : prev.service11.filter((s) => s !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
      console.log(formData);
    }
  };
  const [loading, setLoading] = useState(false);

  const navigate = useRouter();

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
    // const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(formData.email11)) {
      setHasShownToast2(true);
      // toast.error("Invalid email address!");
      return;
    }
    const digitsOnly = formData.phone11.replace(/\D/g, "");
    const dialCode = (countryData && countryData.dialCode) || "91";
    const countryCode = (countryData && countryData.countryCode) || "in";
    let phoneNumberOnly = digitsOnly;

    if (dialCode && digitsOnly.startsWith(dialCode)) {
      phoneNumberOnly = digitsOnly.substring(dialCode.length);
    }
    const countryPhoneLengths = {
      // 🌎 North America
      us: 10, // United States
      ca: 10, // Canada
      mx: 10, // Mexico
      ag: 10, // Antigua and Barbuda
      bs: 10, // Bahamas
      bb: 10, // Barbados
      bz: 7, // Belize
      cr: 8, // Costa Rica
      cu: 8, // Cuba
      dm: 10, // Dominica
      do: 10, // Dominican Republic
      sv: 8, // El Salvador
      gd: 10, // Grenada
      gt: 8, // Guatemala
      ht: 8, // Haiti
      hn: 8, // Honduras
      jm: 10, // Jamaica
      ni: 8, // Nicaragua
      pa: 8, // Panama
      tt: 10, // Trinidad and Tobago

      // 🌎 South America
      ar: 10, // Argentina
      bo: 8, // Bolivia
      br: 11, // Brazil
      cl: 9, // Chile
      co: 10, // Colombia
      ec: 9, // Ecuador
      gy: 7, // Guyana
      py: 9, // Paraguay
      pe: 9, // Peru
      sr: 7, // Suriname
      uy: 9, // Uruguay
      ve: 10, // Venezuela

      // 🌍 Europe
      al: 9, // Albania
      ad: 6, // Andorra
      am: 8, // Armenia
      at: 10, // Austria
      by: 9, // Belarus
      be: 9, // Belgium
      ba: 8, // Bosnia and Herzegovina
      bg: 9, // Bulgaria
      hr: 9, // Croatia
      cy: 8, // Cyprus
      cz: 9, // Czech Republic
      dk: 8, // Denmark
      ee: 8, // Estonia
      fi: 10, // Finland
      fr: 9, // France
      de: 11, // Germany
      gr: 10, // Greece
      hu: 9, // Hungary
      is: 7, // Iceland
      ie: 9, // Ireland
      it: 10, // Italy
      lv: 8, // Latvia
      lt: 8, // Lithuania
      lu: 9, // Luxembourg
      mt: 8, // Malta
      md: 8, // Moldova
      mc: 8, // Monaco
      me: 8, // Montenegro
      nl: 9, // Netherlands
      no: 8, // Norway
      pl: 9, // Poland
      pt: 9, // Portugal
      ro: 10, // Romania
      ru: 10, // Russia
      rs: 9, // Serbia
      sk: 9, // Slovakia
      si: 8, // Slovenia
      es: 9, // Spain
      se: 9, // Sweden
      ch: 9, // Switzerland
      ua: 9, // Ukraine
      gb: 10, // United Kingdom
      va: 6, // Vatican City

      // 🌍 Middle East & Central Asia
      ae: 9, // United Arab Emirates
      bh: 8, // Bahrain
      ir: 10, // Iran
      iq: 10, // Iraq
      il: 9, // Israel
      jo: 9, // Jordan
      kw: 8, // Kuwait
      lb: 8, // Lebanon
      om: 8, // Oman
      qa: 8, // Qatar
      sa: 9, // Saudi Arabia
      sy: 9, // Syria
      ye: 9, // Yemen
      tr: 10, // Turkey
      az: 9, // Azerbaijan
      kz: 10, // Kazakhstan
      uz: 9, // Uzbekistan
      tj: 9, // Tajikistan
      tm: 8, // Turkmenistan
      af: 9, // Afghanistan

      // 🌏 Asia
      in: 10, // India
      pk: 10, // Pakistan
      bd: 10, // Bangladesh
      np: 10, // Nepal
      bt: 8, // Bhutan
      lk: 9, // Sri Lanka
      mm: 9, // Myanmar
      th: 9, // Thailand
      vn: 9, // Vietnam
      kh: 9, // Cambodia
      la: 9, // Laos
      id: 10, // Indonesia
      ph: 10, // Philippines
      my: 9, // Malaysia
      sg: 8, // Singapore
      cn: 11, // China
      hk: 8, // Hong Kong
      tw: 9, // Taiwan
      jp: 10, // Japan
      kr: 10, // South Korea
      mn: 8, // Mongolia
      bn: 7, // Brunei

      // 🌍 Africa
      dz: 9, // Algeria
      ao: 9, // Angola
      bj: 8, // Benin
      bw: 8, // Botswana
      bf: 8, // Burkina Faso
      bi: 8, // Burundi
      cm: 9, // Cameroon
      cv: 7, // Cape Verde
      cf: 8, // Central African Republic
      td: 8, // Chad
      km: 7, // Comoros
      cg: 9, // Congo
      cd: 9, // DR Congo
      ci: 8, // Ivory Coast
      dj: 8, // Djibouti
      eg: 10, // Egypt
      gq: 9, // Equatorial Guinea
      er: 7, // Eritrea
      sz: 8, // Eswatini
      et: 9, // Ethiopia
      ga: 8, // Gabon
      gm: 7, // Gambia
      gh: 9, // Ghana
      gn: 9, // Guinea
      gw: 7, // Guinea-Bissau
      ke: 9, // Kenya
      ls: 8, // Lesotho
      lr: 7, // Liberia
      ly: 9, // Libya
      mg: 9, // Madagascar
      mw: 9, // Malawi
      ml: 8, // Mali
      mr: 8, // Mauritania
      mu: 8, // Mauritius
      ma: 9, // Morocco
      mz: 9, // Mozambique
      na: 9, // Namibia
      ne: 8, // Niger
      ng: 10, // Nigeria
      rw: 9, // Rwanda
      st: 7, // São Tomé and Príncipe
      sn: 9, // Senegal
      sc: 7, // Seychelles
      sl: 8, // Sierra Leone
      so: 9, // Somalia
      za: 9, // South Africa
      ss: 9, // South Sudan
      sd: 9, // Sudan
      tz: 9, // Tanzania
      tg: 8, // Togo
      tn: 8, // Tunisia
      ug: 9, // Uganda
      zm: 9, // Zambia
      zw: 9, // Zimbabwe

      // 🌊 Oceania
      au: 9, // Australia
      nz: 9, // New Zealand
      fj: 7, // Fiji
      pg: 8, // Papua New Guinea
      sb: 7, // Solomon Islands
      vu: 7, // Vanuatu
      ws: 7, // Samoa
      to: 7, // Tonga
      tv: 5, // Tuvalu
      ki: 8, // Kiribati
      nr: 7, // Nauru
      pw: 7, // Palau
      mh: 7, // Marshall Islands

      // 🏝️ Territories & Others
      pr: 10, // Puerto Rico
      gu: 10, // Guam
      vi: 10, // U.S. Virgin Islands
      pf: 8, // French Polynesia
      nc: 6, // New Caledonia
      re: 9, // Réunion
      yt: 9, // Mayotte
      gp: 9, // Guadeloupe
      mq: 9, // Martinique
      gi: 8, // Gibraltar
      fo: 6, // Faroe Islands
      gl: 6, // Greenland
      im: 10, // Isle of Man
      je: 10, // Jersey
      gg: 10, // Guernsey
    };
    const expectedLength = countryPhoneLengths[countryCode.toLowerCase()] || 10;

    if (
      phoneNumberOnly.length !== expectedLength ||
      !/^\d+$/.test(phoneNumberOnly)
    ) {
      setHasShownToast(true);
      return;
    }
    // Validate phone number length (minimum 10 digits, maximum 15 as per E.164 standard)
    // if (digitsOnly.length < 10 || digitsOnly.length > 15) {
    //   setHasShownToast(true);
    //   return;
    // }

    if (
      formData.name11.trim() === "" ||
      formData.phone11.trim() === "" ||
      formData.email11.trim() === "" ||
      formData.message11.trim() === "" ||
      formData.service11.length === 0
    ) {
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
      const response = await fetch("https://kds-kappa.vercel.app/contact11", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          mode: "no-cors",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log(result);

      if (response.ok || response.success === true || response.status === 200) {
        // only navigate on successful submission
        navigate.push("/thankyou");
      } else {
        toast.error(JSON.stringify(response), "Unknown error");
      }
    } catch (error) {
      console.error("Error while sending email:", error);
    } finally {
      setLoading(false);
      // reset the form state after submission attempt (keep termsAccepted=false)
      setFormData({
        name11: "",
        phone11: "",
        email11: "",
        message11: "",
        service11: [],
        termsAccepted: false,
      });
    }
  };
  const trackRef = useRef(null);

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  useEffect(() => {
    const track = trackRef.current;
    if (track) {
      const images = track.innerHTML;
      track.innerHTML += images;
    }
  }, []);

  const formRef = useRef(null);
  useEffect(() => {
    if ((hasShownToast || hasShownToast2) && formRef.current) {
      const elementTop =
        formRef.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementTop - 240,
        behavior: "smooth",
      });
    }
  }, [hasShownToast, hasShownToast2, hasShownToast3]);

  return (
    <section className="contactMainku">
      <div className="contact-containerKush">
        <div className="form-sectionKush">
          <form
            ref={formRef}
            onSubmit={handleForm}
            className="contact-formKush"
            id="contactForm"
          >
            <h2>Fill in the form</h2>

            <div className="contact-form1">
              <input
                type="text"
                name="name11"
                placeholder="Full name *"
                value={formData?.name11}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^[A-Za-z ]*$/.test(value)) {
                    handleFormChange(e);
                  }
                }}
                required
              />
            </div>
            <div className="input-groupKush">
              <input
                type="email"
                name="email11"
                placeholder="Business email *"
                className={`${
                  hasShownToast2
                    ? "!outline !outline-2 !outline-[#ef4444]"
                    : "outline-none"
                } contact-input contact-emailInput`}
                value={formData?.email11}
                onChange={handleFormChange}
                required
              />
              {hasShownToast2 ? (
                <p className=" text-[#ef4444] text-[14px] block md:hidden  sm:text-[16px]">
                  Please Enter valid email address!
                </p>
              ) : (
                ""
              )}
              <PhoneInput
                style={{
                  width: "100%",
                  padding: "7px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  fontSize: "1rem",
                  margin: "8px 0px",
                  color: "#272727",
                  backgroundColor: "#cccccc32",
                }}
                type="tel"
                name="phone11"
                country={"in"}
                className={`${
                  hasShownToast
                    ? "outline outline-2 outline-[#ef4444]"
                    : "outline-none"
                } phone-input-with-dropdown`}
                placeholder="Phone number*"
                maxLength={10}
                value={formData?.phone11}
                // onChange={(phone) => {
                //   const digits = (phone || "").replace(/\D/g, "").slice(0, 13);
                //   setFormData((prev) => ({ ...prev, phone11: digits }));

                //   if (digits.length < 13) setHasShownToast(false);
                //   else setHasShownToast(true);
                // }}
                // required
                onChange={(phone11, country) => {
                  setHasShownToast(false);
                  if (/^(?:\+?[0-9]{0,15})$/.test(phone11)) {
                    setFormData((prev) => ({ ...prev, phone11: phone11 }));
                    setCountryData(country);
                  }
                }}
                inputProps={{
                  required: true,
                }}
                enableSearch={true}
                searchPlaceholder="Search country..."
              />
            </div>

            <div className=" flex">
              {hasShownToast2 ? (
                <p className=" text-[#ef4444] extErromsg text-[14px] block w-[50%] sm:text-[16px]">
                  Please Enter valid email address!
                </p>
              ) : (
                ""
              )}
              <p className=" w-[50%] extErromsg "></p>
              {hasShownToast ? (
                <p className=" text-[#ef4444] text-[14px] sm:text-[16px]">
                  Please enter a valid phone number
                </p>
              ) : (
                ""
              )}
            </div>

            <div>
              <textarea
                name="message11"
                placeholder="Project details *"
                value={formData?.message11}
                onChange={handleFormChange}
                required
              ></textarea>
            </div>

            <div className="interests-listCom checkboxes-listCom">
              {interestsOptions.map((service, index) => {
                const inputId = `service-${index}`;
                const isSelected = (formData.service11 || []).includes(service);
                return (
                  <label
                    key={inputId}
                    className={`checkbox-labelCom ${
                      isSelected ? "selecteCom" : ""
                    }`}
                    htmlFor={inputId}
                  >
                    <input
                      type="checkbox"
                      name="service11"
                      id={inputId}
                      value={service}
                      onChange={handleChange}
                      checked={isSelected}
                      className="checkedCheckbox"
                    />
                    {service}
                  </label>
                );
              })}
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
            <div className="terms-lables">
              <label className="terms-label">
                <input
                  type="checkbox"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleChange1}
                  required
                />
                *I have read and accepted the{" "}
                <a href="/terms-conditions">Terms & Conditions </a> and{" "}
                <a href="/privacy-policy"> Privacy Policy </a>
              </label>
              {/* <div className="captcha-box">
                <div className="inputcapt">
                  <span>{`${firstNo} + ${secondNo} = `}</span>
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
                disabled={loading}
                type="submit"
                className="submit-btnKush"
              >
                {" "}
                {loading ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
        <div className="info-sectionkUSH">
          <h1 className="DropCont">
            <span>Got an Idea? </span> Let’s Make It Happen.
          </h1>
          <div className="row-box">
            <div className="col-box dis-flex">
              <div className="iconImgReact">
                <GiTrophyCup />
              </div>

              <div className="desp">
                <h4>8+ Years of Experience</h4>
                <p>
                  Delivering smart, scalable solutions for complex business
                  challenges.
                </p>
              </div>
            </div>
            <div className="col-box dis-flex">
              <div className="iconImgReact">
                <FaAward />
              </div>

              <div className="desp">
                <h4>1000+ Clients Served</h4>
                <p>
                  From budding startups to Fortune 500 companies – we’ve done it
                  all.
                </p>
              </div>
            </div>
            <div className="col-box dis-flex">
              <div className="iconImgReact">
                <FaUserAlt />
              </div>

              <div className="desp">
                <h4>250+ Experts Onboard</h4>
                <p>
                  A powerhouse team focused to deliver digital excellence and
                  business growth.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="trusted-by">
            Tell us about your project. We’ll handle the rest.
          </div>

          <div className="sliderTrusted">
            <div className="slider-track" ref={trackRef}>
              {[...Array(2)].map((_, i) => (
                <React.Fragment key={i}>
                  <img
                    loading="lazy"
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744203598/webinstalogo_rutcoc_1_empjy6.png"
                    alt="image"
                  />
                  <img
                    loading="lazy"
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744203613/summer_2_htxjay.png"
                    alt="img"
                  />
                  <img
                    loading="lazy"
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744203624/CodePXL_Web_Logo_1_cr6g7c.png"
                    alt="img"
                  />
                  <img
                    loading="lazy"
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744203637/Slide365_Logo_1_x9pvmf.png"
                    alt="img"
                  />
                  <img
                    loading="lazy"
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744203651/sights_and_scope_black_logo_2_ksdcq4.png"
                    alt="img"
                  />
                  <img
                    loading="lazy"
                    src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1744203692/70904_228x204_1_rvp6ue.png"
                    alt="img"
                  />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
