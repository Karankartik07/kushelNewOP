"use client";
import React, { useEffect, useRef, useState } from "react";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

import "./londonbanner.css";
import { Navigate } from "react-router-dom";
import FormEurope from "@/app/COMMON/FormEurope";

const LondonBanner = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   // phone: "",
  // });
  // const router = useRouter();
  // const [hasShownToast, setHasShownToast] = useState(false);
  // const [hasShownToast2, setHasShownToast2] = useState(false);
  // const phoneInputRef = useRef(null);
  // useEffect(() => {
  //   if (phoneInputRef.current) {
  //     const iti = intlTelInput(phoneInputRef.current, {
  //       initialCountry: "gb",
  //       geoIpLookup: (callback) => {
  //         fetch("https://ipapi.co/json")
  //           .then((res) => res.json())
  //           .then((data) => callback(data.country_code))
  //           .catch(() => callback("gb"));
  //       },
  //       utilsScript:
  //         "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
  //     });

  //     // Optional: Store the instance if you ever need to validate
  //     phoneInputRef.current._iti = iti;
  //   }
  // }, []);
  // const [loading, setLoading] = useState(false);
  // const handleChange = (e) => {
  //   setHasShownToast2(false);
  //   e.preventDefault();
  //   const { name, value } = e.target;

  //   let updatedValue = value;

  //   if (name === "name") {
  //     // ✅ Name only alphabets and spaces
  //     updatedValue = value.replace(/[^a-zA-Z\s]/g, "");
  //   }

  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [name]: updatedValue,
  //   }));
  // };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const phone = phoneInputRef.current?.value || "";
  //   const phoneDigitsOnly = phone.replace(/\D/g, ""); // Only digits
  //   if (!formData.name || !formData.email || !phone) {
  //     toast.error("Please fill all the fields!");
  //     return;
  //   }
  //   const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.[a-zA-Z]{2,}$/;
  //   if (!emailRegex.test(formData.email)) {
  //     setHasShownToast2(true);
  //     // toast.error("Invalid email address!");
  //     return;
  //   }
  //   if (phoneDigitsOnly.length !== 11) {
  //     setHasShownToast(true);
  //     return;
  //   }
  //   router.push("/thankyou");
  //   setLoading(true);
  //   try {
  //     const dataToSend = {
  //       ...formData,
  //       phone: phoneDigitsOnly,
  //       page: PageName,
  //     };
  //     const response = await fetch("https://kds-kappa.vercel.app/contact", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         mode: "no-cors",
  //       },
  //       body: JSON.stringify(dataToSend),
  //     });

  //     const result = await response.json();
  //     console.log("Result--->>", result);

  //     if (response.ok || response.success === true || response.status === 200) {
  //     } else {
  //       alert(`❌ Failed to send email: ${result.message || "Unknown error"}`);
  //     }
  //   } catch (error) {
  //     console.error("❌ Error while sending email:", error);
  //   } finally {
  //     setLoading(false);
  //     setFormData({ name: "", email: "" });
  //     phoneInputRef.current.value = ""; // reset manually
  //     // generateCaptcha();
  //   }
  // };
  // const navigate = useRouter();
  const scrollToFormHome = () => {
    const formSection = document.getElementById("form-section");
    if (formSection) {
      const yOffset = -120;
      const y =
        formSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  // const formRef = useRef(null);
  // useEffect(() => {
  //   if ((hasShownToast || hasShownToast2) && formRef.current) {
  //     const elementTop =
  //       formRef.current.getBoundingClientRect().top + window.scrollY;
  //     window.scrollTo({
  //       top: elementTop - 120,
  //       behavior: "smooth",
  //     });
  //   }
  // }, [hasShownToast, hasShownToast2]);

  // const [PageName, setPageName] = useState("");
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const path = window.location.pathname;
  //     const slug = path.split("/").pop();

  //     const PgName = slug
  //       .split("-")
  //       .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  //       .join(" ");

  //     setPageName(PgName);
  //   }
  // }, []);
  return (
    <section className="london-banner-section" >
      <div className="london-banner-overlay">
        <div className="london-banner-content-wrapper">
          {/* Left Content */}
          <div className="london-banner-left">
            <h1 className="london-banner-heading">
              E-Commerce Development
              <br />
              <span className="london-banner-span">Company in London</span>
            </h1>
            <p className="london-banner-subtext">
              Want a reliable ecommerce development company in London to help
              you grow your online business? Kushel Digi Solutions makes unique
              ecommerce sites that work well on mobile devices and focus on
              sales. If you let us handle the tech, you can focus on your
              business while we help you make more sales.
            </p>
            <div className="london-banner-buttons">
              <button
                onClick={scrollToFormHome}
                className="london-banner-btn-yellow"
              >
                Get Free Consultation
              </button>
              {/* <button
                onClick={() =>
                  window.open(
                    "https://calendly.com/shubham-goq0/sales-discovery-call?month=2025-06&utm_source=Email&utm_medium=email&utm_campaign=Chalendly",
                    "_blank"
                  )
                }
                className="london-banner-btn-outline"
              >
                Schedule a Demo
              </button> */}
            </div>

            <div className="london-banner-images">
              <img
                src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1750757052/Group_1171281720_x2l3jk.png"
                alt="eCommerce Development in noida"
                className="noida-banner-image"
              />
              <img
                src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1750757052/Group_1171281718_y1ktz6.png"
                alt="Graphic Design"
                className="noida-banner-graphic"
              />
              <img
                src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1750757052/Group_1171281719_ywsaio.png"
                alt="Graphic Design"
                className="noida-banner-graphic2"
              />
            </div>
          </div>

          {/* Right Form */}
          <FormEurope num={10} countryCode={"gb"}/>
          {/* <div className="london-banner-form">
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
                <p className=" text-[#ef4444]">
                  Please Enter valid email address!
                </p>
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
                    if (digits.length <= 11) {
                      e.target.value = digits;
                      setHasShownToast(false);
                    } else {
                      e.target.value = digits.slice(0, 11);
                    }
                  }}
                  required
                />
              </div>
              {hasShownToast ? (
                <p className=" text-[#ef4444]">
                  Please Enter 11 digit Phone Number
                </p>
              ) : (
                ""
              )}

              <div className="mt-btn">
                <button
                  className="form-submit-btn"
                  type="submit"
                  disabled={loading}
                >
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
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default LondonBanner;
