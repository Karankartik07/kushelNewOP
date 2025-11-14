"use client";
import React, { useEffect, useRef, useState } from "react";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { toast } from "react-toastify";
import "./detailsnash.css";

import { useRouter } from "next/navigation";
import FormUSA from "@/app/COMMON/FormUSA";

export default function DetailWebNash() {
  // const [formData, setFormData] = useState({
  //   name2: "",
  //   email2: "",
  //   phone2: "",
  //   message2: "",
  // });
  // const [hasShownToast, setHasShownToast] = useState(false);
  // const [hasShownToast2, setHasShownToast2] = useState(false);
  // const router = useRouter();
  // const phoneInputRef = useRef(null);
  // useEffect(() => {
  //   if (phoneInputRef.current) {
  //     const iti = intlTelInput(phoneInputRef.current, {
  //       initialCountry: "us",
  //       geoIpLookup: (callback) => {
  //         fetch("https://ipapi.co/json")
  //           .then((res) => res.json())
  //           .then((data) => callback(data.country_code))
  //           .catch(() => callback("us"));
  //       },
  //       utilsScript:
  //         "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
  //     });

  //     phoneInputRef.current._iti = iti;
  //   }
  // }, []);

  // const [loading, setLoading] = useState(false);

  // const handleChange = (e) => {
  //   setHasShownToast2(false);
  //   e.preventDefault();
  //   const { name, value } = e.target;

  //   let updatedValue = value;

  //   if (name === "name2") {
  //     // Name only alphabets and spaces
  //     updatedValue = value.replace(/[^a-zA-Z\s]/g, "");
  //   }

  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [name]: updatedValue,
  //   }));
  // };
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
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const phone2 = phoneInputRef.current?.value || "";
  //   const phoneDigitsOnly = phone2.replace(/\D/g, "");

  //   if (!formData.name2 || !formData.email2 || !phoneDigitsOnly) {
  //     toast.error("Please fill all the fields!");
  //     return;
  //   }

  //   const emailRegex = /^[A-Za-z0-9._]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  //   if (!emailRegex.test(formData.email2)) {
  //     setHasShownToast2(true);
  //     // toast.error("Invalid email address!");
  //     return;
  //   }

  //   if (phoneDigitsOnly.length !== 10) {
  //     setHasShownToast(true);
  //     return;
  //   }

  //   setLoading(true);

  //   try {
  //     const dataToSend = {
  //       ...formData,
  //       phone2: phoneDigitsOnly,
  //       page: PageName,
  //     };

  //     const response = await fetch("https://kds-kappa.vercel.app/contact2", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(dataToSend),
  //     });

  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }

  //     const result = await response.json();
  //     console.log("Result--->>", result);
  //   } catch (error) {
  //     console.error("❌ Error while sending email:", error);
  //     toast.error("Something went wrong. Please try again later.");
  //   } finally {
  //     setLoading(false);
  //     router.push("/thankyou");
  //     setFormData({ name2: "", email2: "", message2: "", phone2: "" });
  //     if (phoneInputRef.current) phoneInputRef.current.value = "";
  //   }
  // };

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
    <section className="details-sec" >
      <div className="details-desc">
        <h4>Web Design Company in Nashville – Bringing Ideas to Cyber Life</h4>
        <p>
          Are you looking for a web design company in Nashville that considers
          both the brand and the performance of a certain website? Kushel Digi
          Solutions goes beyond creating online experiences that are pleasing
          only to the eye. To us, a website is more than a glorious face: it is
          a strong engine for a successful brand. Hence, we combine creativity,
          analytics, and endless technologies with the aim of bringing alive
          portals that attract, engage, and convert. With either a business
          entity seeking to begin its digital presence or a company already
          established in the marketplace within Nashville opting for its website
          to be upgraded, we tailor each project with tangible deliverables
          aligned with any vision for the future.
        </p>
        <p>
          According to Kushel Digi Solutions, "Your website is the digital
          personality of your brand, not just an interface." Following this
          independent philosophy, Kushel Digi Solutions is dedicated to work
          towards designs filled with vision, strategy, and sustainable value.
          We focus on creating cost-effective websites that maximize your
          strengths and situate your business in a competitive daylight for an
          ever-changing marketplace in Nashville.
        </p>
        <p>
          From feature-rich portals for companies to e-commerce ecosystems,
          Kushel Digi Solutions designs extraordinary websites. Our vision is to
          create digital platforms loved by clients, trusted by customers, and
          envied by competitors.
        </p>

        <img
          src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1760515942/web-design-company-in-nashville_uiakjh.png"
          alt="web design company in nashville"
        />
        <h5>How Are You Going to Benefit with Our Web Development Services </h5>
        <p>
          Working with a web design company Nashville is not merely hiring
          someone to put together a pretty page. We build integrated solutions
          with the intent of creating visibility, growth, and seamless
          performance. Our disciplined methods guarantee that companies enjoy
          websites with user-ready architecture fitted with future-proof
          features. We don't build websites, we create journeys for the customer
          that resonate with the audience, outperform ours and are loved by
          search engines.
        </p>
        <p>
          Everything is centered around your goal: whether to draw traffic,
          enhance engagement, or increase conversion-from secured payments to
          blazing fast, mobile-optimized platforms.
        </p>
        <p>
          We would not see ourselves as just another design agency. We would be
          your digital partner for growth within the highly competitive online
          climate of Nashville.
        </p>

        <h6>Our Web Development Services </h6>
        <p>
          A website complements everything modernly. It's not only a digital
          visit card. According to Kushel Digi Solutions - Business has always
          been more than this, in fact, long since a very valuable tool. It's a
          digital reflection of your brand values with the purpose of defining
          persona and maintains many very valuable communication functions
          throughout the hour. Just like that, entering a physical shop or
          office does impress one of the venue upon entering, your website sets
          the tone for how prospects will view your legitimacy, professionalism,
          and reliability.
        </p>
        <p>
          It is in a highly active, fast-paced ecosystem like Nashville that a
          customer can seal a deal in something like seconds. A lady visitor
          says, "Every minute- every minute, a visitor makes an impression of a
          website". This impression will, consequently, decide whether to
          immerse in your offerings or jump to the competition. Therefore, it
          becomes not just an advantage but a necessity for the long-term
          survival of your business, that well-conceived, user-friendly, and
          scalable websites have.
        </p>

        <p>
          Every site under Kushel Digi Solutions is a growth platform rather
          than a mere set of pages. Our services stretch from matching the
          creative side seamlessly with the strategical and tactically employing
          cutting-edge technology to provide strong digital solutions. By using
          layout design to engage the eye, navigation for user-friendliness, and
          architecture for optimum functioning, we strive to achieve the
          ultimate balance where the website not only captures interest but also
          holds it and channels it toward measurable results.
        </p>

        <p>
          It doesn't matter whether you are a local start-up wanting to
          establish your web presence or a Nashville giant trying to build
          better interactivity with your customers, we will ensure that your web
          presence stands out, fits within a highly competitive neighbourhood,
          and is designed to be future-ready. Your website is not a mere virtual
          incarnation at Kushel Digi Solutions; a bustling business engine is
          actively working to broaden your reach and strengthen your brand and
          convert visitors into loyal clients.
        </p>
        <h6>Custom Website Design</h6>
        <p>
          Using templates washes away the individuality of an organization.
          Thus, we are custom-first. Our first agenda is to find out about your
          business identity, audience, and what pulls on their decisions. After
          that, our designers put together fully custom-developed websites that
          pack beauty together with every measurable ounce of outcome.
        </p>
        <p>
          Key Features of our customized website design company include are
          given below:
        </p>
        <ul className="list-disc px-4">
          <li>
            An extravagant, unique style that encompasses your brand identity.
          </li>
          <li>
            Visitor engaging pathways through easy-to-use navigation structures.
          </li>
          <li>
            A personalized experience fable along the audience expectation.
          </li>
        </ul>
        <p>A personalized experience fable along the audience expectation.</p>

        <h6> E-Commerce Development </h6>
        <p>
          Modern consumers expect their shopping experience to be free from
          interruptions and to be absolutely secure. Our e-commerce development
          will allow businesses right here in Nashville to meet just that
          without any effort. To us, it is not just about developing online
          shops but instead creating complete systems for loyalty and repeat
          purchase.
        </p>
        <p>Our e-commerce value:</p>
        <ul className="list-disc px-4">
          <li>Streamlined product catalog management.</li>
          <li>
            Introduced the secure payment gateway via PayPal, Stripe and UPI.
          </li>
          <li>
            Compliance with checkout optimization so as to discourage cart
            abandonment.{" "}
          </li>
          <li>
            Designed shops from the ground up using Shopify, WooCommerce,
            Magento, or BigCommerce.
          </li>
        </ul>
        <p>
          For example, one Nashville craft store teamed up with us to build its
          Shopify storefront. Six months later, they reported a 42% increase in
          repeat purchases and a 60% decrease in manual administrative work.{" "}
        </p>

        <h6>Mobile-Responsive Platforms</h6>
        <p>
          Mobile accounts for over two-thirds of all web traffic, and hence the
          least optimization has become an optional option. In this way, any
          project being developed by Kushel Digi Solutions should concern itself
          with mobile-responsiveness, with the project ideologies being built on
          this premise.
        </p>
        <p>Benefits:</p>
        <ul className="list-disc px-4">
          <li>Simple compatibility in smart phone, tablets and desktops.</li>
          <li>Quick loading even at low cell-phone bandwidth.</li>
          <li>
            Touch-friendly features including bigger buttons and simplified
            forms.
          </li>
        </ul>
        <p>
          Consider the scenario of seeking online reservations in a Nashville
          restaurant that is not optimized for mobile. These potential customers
          in search of some deals will fast abandon the site. Thanks to our
          responsive design, they would seamlessly surf their way through,
          creating more reservations and less revenue walking away that would
          most dearly cost them.
        </p>

        <h6>SEO-Friendly Web Architecture </h6>
        <p>
          An attractive website can be successful only when discoverable. This
          is the way, Kushel Digi Solutions embeds in every web site a simple,
          search-engine-friendly web architecture as a building block.
        </p>
        <p>Our strategies are:</p>
        <ul className="list-disc px-4">
          <li>Clean, keyword-optimized URL structures.</li>
          <li>Effective use of meta tags, headings, and schema-markup.</li>
          <li>
            Very high-speed loading optimized for search engines and humans.
          </li>
          <li>Mobile-first indexing compliance for better Google ranking.</li>
        </ul>
        <p>
          A Nashville legal consulting agency affiliated with us established
          itself in qualified leads by 120% when rebuilding every site according
          to SEO-first principles; increased visibility across local searches
          drives continuous growth in consultations by potential clients.
        </p>

        <h6>Secure Payment Integration</h6>
        <p>
          Every prosperous online transaction is founded on trust; clients do
          not feel safe without the secure mechanisms. In the case of Kushel
          Digi Solutions, we specialize in safe payments integration that
          guarantees safety to businesses and consumers.
        </p>
        <p>Our features include: </p>
        <ul className="list-disc px-4">
          <li>SSL encryption of confidential data. </li>
          <li>Anti-fraud systems that can detect fraud in real-time.</li>
          <li>
            Supporting big gateways such as PayPal, Stripe, and Razorpay.{" "}
          </li>
          <li>Single-page checkouts to reduce customer drop-offs.</li>
        </ul>
        <p>
          Following the integration of secure payment tools, a jewellery house
          in Nashville registered an increase of completed transactions by 35%.
          Their customers felt comfortable making these larger purchases due to
          visible aspects of security.
        </p>
        <h6>Product & Inventory Management </h6>
        <p>
          Inventory management is the biggest thing on which the e-commerce
          success is highly dependent. A customer would not be happy if he makes
          an order and later finds out that the order is not available because
          it was oversold, or no stock was known. Simple operationalization of
          product and inventory management systems would be enabled through
          Kushel Digi Solutions.
        </p>
        <p>Some core features that define this are as follows:</p>
        <ul className="list-disc px-4">
          <li>-Dashboards that made product update easy.</li>
          <li>Sends warning alerts automatically about stockouts.</li>
          <li>
            This would then be integrated with an ERP for proper reporting.
          </li>
          <li>Proper category organization for everyone. </li>
        </ul>
        <p>
          Our ERP-integrated inventory system reduced stock errors by 70% for a
          Nashville electronics retailer. Operations smoother, customer
          satisfaction increased.{" "}
        </p>
        <h6>Update and Migration Services </h6>
        <p>
          Restrict the growth and performance of websites with outdated matters.
          Thus, these migration and update services by us will allow business
          operations in Nashville to smoothly upgrade without hiccups.{" "}
        </p>
        <p>We do the following:</p>
        <ul className="list-disc px-4">
          <li>Safe, complete data migration.</li>
          <li>Platform migrations with retained performance of SEO efforts.</li>
          <li>Usability and aesthetics refreshed designs.</li>
          <li>No downtime at the time of migration. </li>
        </ul>
        <p>
          A Nashville fashion label has managed to move to Shopify using our
          services and maintain their search results and provide a modern
          mobile-friendly storefront with the help of our services.{" "}
        </p>
        <h6>Support & Maintenance After Launch </h6>
        <p>
          A website must have constant monitoring, maintenance, and support to
          be up to date and secure. That's why Kushel Digi Solutions has a
          support-and-maintenance-after-go-live option to blend years later with
          continuity and performance.
        </p>
        <p>Our services include: </p>
        <ul className="list-disc px-4">
          <li>Regular program upgrades and backups.</li>
          <li>Security audits as threats grow. </li>
          <li>Speed optimization and performance testing.</li>
          <li>
            Scheduled freshening of the content with periodic feature release.
          </li>
        </ul>
        <p>
          An example would be a Nashville healthcare provider that still calls
          us quarterly to update to HIPAA compliance and make sure patients have
          a seamless booking experience.
        </p>

        <h5>
          Why Kushel Digi Solutions for Your Nashville web development company.{" "}
        </h5>

        <p>
          Indeed, a web design company Nashville selection is significant. This
          is a business decision with all-strategic underpinning. The partner
          chosen by the organization will greatly affect the digital impression,
          brand reputation, or growth potential of the company.
        </p>
        <p>Reasons why clients choose us are given below:</p>
        <p>
          Of course, we are interested in immediate delivery whenever most
          agencies think of it; what we actually think of is a broad strategy
          with long-term objectives that create impacts that last. That is why
          companies go beyond just getting a website agency and come to us for
          custom solutions. Unlike others, Kushel Digi Solutions believes in
          sustainable growth instead of quick fix. Our status is not just a
          website marketing company but a reliable web marketing agency.
        </p>
        <h6>Let's Get Started on Your Trans-Site Future.</h6>
        <p>
          In today's competitive yet increasingly digital environment, simply
          having a website has become more than merely fortified against the
          elements. It has now become a core strategic aspect of the business.
          Partner with a web design company in Nashville that builds websites
          that incorporate art, innovation, and advanced technology for very
          long results: Kushel Digi Solutions.
        </p>
        <p>
          We don't build websites, we create journeys for the customer that
          resonate with the audience, outperform ours and are loved by search
          engines. From small startups in East Nashville to established
          corporations across Tennessee, we help businesses unlock their full
          potential in the digital age.
        </p>
        <p>
          It's time for new heights in your website. Contact Kushel Digi
          Solutions today-and let's create your digital tomorrow together.
        </p>

        <div className="detail-foot">
          <h5>Our Contact Address</h5>
          <p className="detail-foot-p">Kushel Digi Solutions</p>
          <p>
            <span>PHONE :</span>+ 1 585-566-2070
          </p>
          <p>
            <span>EMAIL :</span> info@kusheldigi.com
          </p>
          <p>
            <span>ADDRESS : </span>
            HLM EXIM CORP PTE LTD Suite #4-210, Governors Square, 23 Lime Tree
            Bay Avenue, PO Box 32311, Grand Cayman KY1-1209, Cayman Islands,
          </p>
        </div>
      </div>
      {/* <form className="getquote-wrapper" onSubmit={handleSubmit}>
        <div className="getquote-form">
          <div className="getquote-header"></div>
          <h2>GET A FREE QUOTE</h2>

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

                if (digits.length <= 10) {
                  e.target.value = digits;
                  setHasShownToast(false);
                } else {
                  e.target.value = digits.slice(0, 10);
                }
              }}
              required
            />
            {hasShownToast ? (
              <p className=" text-[#ef4444]">
                Please Enter 10 digit Phone Number
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
      </form> */}
       <FormUSA num={10} countryCode={"us"}/>
    </section>
  );
}
