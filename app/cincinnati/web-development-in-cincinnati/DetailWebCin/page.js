"use client";
import React, { useEffect, useRef, useState } from "react";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { toast } from "react-toastify";
import "./details.css";

import { useRouter } from "next/navigation";
import FormUSA from "@/app/COMMON/FormUSA";

export default function DetailWebCin() {
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

  //   if (phoneDigitsOnly.length < 10 || phoneDigitsOnly.length > 15) {
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
        <h4>
          Web Development in Cincinnati-Digital Solutions Designed for Growth
        </h4>
        <p>
          Are you looking for a custom web development in Cincinnati that will
          be a true representation of your business? At Kushel Digi Solutions,
          we do not just make websites; we build brands through the expertise of
          our professionals. We provide solutions for start-ups, emerging
          companies, and established businesses; in essence, solving many
          problems by designing digital experiences that really represent who
          you are and most importantly deliver results.
        </p>
        <p>
          No matter how big or small your business is-a start-up taking its
          first steps online, a family-owned business moving onto e-commerce, or
          a large firm needing advanced features-your website matches your
          needs. Our team blends everything together-design, functionality, and
          strategy-to deliver digital experiences that seamlessly work across
          devices and result in measurable outcomes.
        </p>
        <p>
          There is no "one size fits all," they say. We plan every site
          according to the audience, industry, and targets for growth purposes.
          From user-friendly front ends to robust back-end systems, we've taken
          care of it-h so you can focus your attention on managing your
          business.
        </p>
        <img
          src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1759141190/Web-Development-in-Cincinnati_yjfdxc.png"
          alt="web development in cincinnati"
        />
        <h5>How Are You Going to Benefit with Our Web Development Services</h5>
        <p>
          Your website is more than just optional-it's your business's virtual
          face in the world of the digital marketplace today. Customers form
          opinions in a matter of seconds, but, more often than not, a site gets
          to influence whether they stay or leave. Kushel Digi Solutions is all
          set to do more than just get you a working web platform; they want to
          give you an all-inclusive digital solution that focuses on bringing
          you visitors, hence engaging and converting them to loyal customers.
        </p>
        <p>This, then, is how we get the site working for you:</p>
        <ul className="list-disc px-4">
          <li>
            Complete yet simple navigation and layout still binds users to stay
            in the site.{" "}
          </li>
          <li>Fast loading time, bear the customers happy.</li>
          <li>Responsive mobile design, i.e., in all possible screen sizes.</li>
          <li>SEO built for better online visibility.</li>
          <li>
            Secure platforms where your data and transactions are protected.{" "}
          </li>
          <li>Continuous support to keep the site fresh and reliable.</li>
        </ul>
        <p>Our Web Development Services Include:</p>
        <h6>Custom Website Design</h6>
        <p>
          Every company has its thoughts and personality reflected on the
          website; hence Kushel Digi Solutions does not believe in quick-fix
          packages. Its design is built around your brand's goals, values, and
          audience preferences. Whether your idea is a modern sleek,
          minimalistic designed site, or something daring and filled with
          features, our designers will be ready to set all tools to effortlessly
          visualize the story of your business.
        </p>
        <p>Our Design Process-</p>
        <ul className="list-disc px-4">
          <li>
            {" "}
            <strong>Audience and Competitor Research:</strong> To begin with, we
            must understand who your customers are and what they expect from
            your brand. Competitive analysis highlights the holes and
            opportunities from which a brand can emerge.{" "}
          </li>
          <li>
            {" "}
            <strong>User Journey Mapping:</strong> These directions enable the
            users to get access to the information they require at your site
            immediately, which will decrease annoyances on the part of the user
            and form an emotional bond with the user.
          </li>
          <li>
            {" "}
            <strong>Visual Branding:</strong> All qualities-colours, images as
            well as typography-are selected in a manner that conveys the nature
            and message of your brand; therefore, a consistent visual image
            would be established.
          </li>
          <li>
            {" "}
            <strong>Strategic Calls-to-Action:</strong> Buttons, forms, and
            other prompts are placed with alignment with visitors taking actions
            that are important to your business, such as reaching out or buying.
          </li>
        </ul>
        <p>
          Examples: One of Cincinnati's fitness studios wanted a website that
          could show schedules and memberships and allow online booking. So, we
          designed a quite simple, user-friendly site to get navigated easily
          and book easily. Three months onward, a massive increase in the
          numbers of registered members at the studio was achieved thereby
          indicating how a well contemplated site may indeed pay off in terms of
          growth.
        </p>
        <p>
          In fact, a carefully thought-out site can create goodwill, present
          professional dispositions, and create a stronger urge to the users to
          want to be associated with such a brand. Every design decision we make
          is grounded in creating the best user experience, which is supposed to
          translate into conversions for you.{" "}
        </p>
        <h5>E-Commerce Development</h5>
        <p>
          Online shopping today is not an option; it is mandatory for the
          majority of businesses. Yes, at Kushel Digi Solutions, you get
          all-in-one e-commerce applications that allow a business to sell
          products while maintaining hassle-free buying experiences for
          customers.
        </p>
        <p>Most Promising Features of Our E-Commerce Solutions. </p>
        <p>
          Easy Updates to the Product Catalogue: Modifying product information,
          adding new products, or removing old assets doesn't call for advance
          technical knowledge. This way, you keep your website up to date and
          displaying inventory real-time status.{" "}
        </p>
        <p>
          Safe Checkout System: Make all the required settings to transact with
          the most popular payment gateway systems to have fast, reliable and
          safe transaction completion.
        </p>
        <p>
          Mobile Shopping-Now Much More Beyond Received: Over fifty percent of
          all online shopping is conducted via a mobile gadget. Therefore, our
          products are designed with the view of their functionality on
          smartphones and the display devices in an accessible way to the users.
        </p>
        <p>
          Promotions and Customer Accounts: Develop discounts, special offers
          and reward programs to encourage repeat business.
        </p>

        <p>
          Growth Capacity with the Business: With the expansion of the business,
          the online shop would be able to easily grow with the business to
          incorporate additional customers and goods without compromising the
          performance.
        </p>
        <p>
          Example: The fashion start-up which is based in Cincinnati wanted to
          expand internationally. We built a complete Shopify Store capable of
          inventory tracking and automated workflows. Within months, this
          reduced manual workload by over 30%, significantly improving sales
          revenue.
        </p>
        <p>
          Our e-commerce solutions are tailored ideally to facilitate a
          transaction-based experience. It works smoothly and reliably while
          guaranteeing customers will come back for more purchases. We allow
          businesses to help maximize revenue and foster customer loyalty by the
          combination of usability, aesthetics, and strong back-end
          functionality.
        </p>
        <h6>Mobile-Responsive Platforms</h6>
        <p>
          It accounts for over 70 percent of all traffic; so, a site is not
          mobile-friendly, but a website that does not work on a mobile device
          is out-of-date. We create websites with defined principles
          mobile-first, meaning that they will work wonderfully well on
          smartphones, tablets, and desktops.
        </p>
        <p>Advantages of Mobile-First Design.</p>
        <p>
          Speed Loading: A charm reduced wait time is quite favourable-even for
          those who boast of sluggish connection speed.
        </p>

        <p>
          Touch-Friendly Interfaces: e.g. buttons, forms, menus, etc., which are
          easily operable on touch interface.
        </p>
        <p>
          Responsive Layout: Content layout that adapts automatically according
          to specific mobile screens without hassle with layout enhancing user
          experience.
        </p>
        <p>
          Example: Picture a possible client going for your services in a hurry.
          With a bulky non-mobile enabled site, you may just have lost that
          sale. A smooth mobile experience means continuous engagement with the
          business, which translates to opportunities leading into increased
          leads and better customer satisfaction. With a mobile-first attitude,
          we can guarantee that your website provides an equal engaging
          experience on any device, simplifying the way guests can consume your
          content and reach or fulfill their intent.
        </p>
        <h6>SEO-Friendly Structure</h6>
        <p>
          Even if your design is worth a million dollars, it will be worthless
          to you if it cannot be accessed. SEO (Search Engine Optimization) of
          your website guarantees a top rank in-search engines, thus directing
          highly qualified visitors to your website. We begin building our
          websites with SEO architecture as soon as we begin.
        </p>
        <p>What We Provide in SEO-Optimized Websites.</p>
        <p>
          Straightforward URL Structures: Simple URL structures are easily read
          by search engines and inferred about your content.
        </p>

        <p>
          Meta Titles, Tags, and Schema Markup: These are the technical pieces
          that define your content and visible within the search engine results.
        </p>
        <p>
          Fast Loading Speed: Speed-optimized websites are interacted with by
          users and given priority by search Engines.
        </p>
        <p>
          Mobile Compatibility: A mobile-compatible site is prioritized by
          Google while ranking websites, hence becoming extremely crucial for
          SEO.
        </p>
        <p>
          For instance: A Cincinnati law firm that was unable to receive organic
          leads made some changes to the architecture of its website according
          to some SEO best practices; in a few months' time, organic leads
          slowed down by 120 percent. Thus, it is here that SEO connects with
          your architecture-at websites. It is directed to call the right
          audience, encourage traffic on the site, and convert clicks to sales
          at increased rates. It is a sweet kind of risk, as it pays big even
          after a long time, securing your visibility, and competitive spirit in
          the market.{" "}
        </p>
        <h6> Secure Payment Integration</h6>

        <p>
          Security, in the real world, is priority one when it comes to
          web-based purchases. Customers make purchases after being convinced
          that no information including personal and financial details will be
          disclosed. Having this state of mind, we developed our online
          platforms to give safe and sound payment integrations.
        </p>

        <p>Key Features-</p>
        <p>
          SSL Certification: Through this, sensitive information is safeguarded
          against unacceptable access.
        </p>
        <p>Fraud Prevention: The inbuilt code prevents fraudulent payments.</p>
        <p>
          Various Payments: Accepts PayPal, Stripe, UPI, digital wallets and
          physical banks.{" "}
        </p>
        <p>
          Streamlined Checkout: It is simplified and minimized the number of
          people who abandon their carts without buying anything.{" "}
        </p>
        <p>
          Example: A jewellery store in Cincinnati had gone online through our
          one-page secure checkout. The result: completed purchases had
          increased by 40 percent. Clearly, security and convenience may be used
          to make direct sales. Such low-key payment facilities not only make
          sure that your customers are safe but their faith also translates into
          repeat buying as well as long term loyalty.
        </p>
        <h6>Product & Inventory Management</h6>
        <p>
          Product and stock management might be chaotic, but our solutions
          enable businesses to continue with ease.
        </p>
        <p>Features: </p>
        <p>
          Quick Adding, Editing, or Deleting of Products: Intuitive dashboards.
        </p>
        <p>
          Stock Alerts: Low-stocking alert reminders automatically. Product
          Variants: Multiple sizes, colours and prices should be supported.
        </p>
        <p>
          ERP / Accounting Integration: Unite financial, inventory and sales
          information with delivery in real-time.{" "}
        </p>
        <p>
          Example: This inventory system was incorporated in the ERP of an
          example Cincinnati based electronics store. Stock discrepancies
          decreased by more than 70 percent. Time was saved and customer
          satisfaction was enhanced. Ensure that anything relating to product
          availability at the shelves and homepage is a success point. Offer
          total management in staff efficiency and doing away with operational
          inefficiencies.
        </p>
        <h6>Upgrading a Migration of Sites</h6>
        <p>
          The field of providing technology evolves daily, making an old site
          ineffective and slow. We provide easy upgrade and migration services
          that will ensure that your site is updated without the loss of
          important information.
        </p>
        <p>What We Offer:</p>
        <p>Safe Data Transfer: Store customer data and content in storage.</p>
        <p>
          SEO Preservation: preserve search engine positioning in the case of
          migration. Better Theme and features: Renovate the site in terms of
          design and functionality.{" "}
        </p>
        <p>
          Low Transition Downtime: Keep your business operating. In case of
          Shopify to WooCommerce, along with Magento upgrade to WordPress
          changeover, our team ensures that such inconvenience is never imposed
          on the companies. These painless switchovers are now able to give
          companies an added performance, better user experience, and high level
          of technology platform.
        </p>
        <h6>Long time Support and Maintenance.</h6>
        <p>
          A website is created, not born. It is maintained and supported to make
          it alive, safe and up-to-date.
        </p>
        <p>Continuous Service of Maintenance.</p>
        <ul className="list-disc px-4">
          <li>
            {" "}
            <strong>Data Backup:</strong> Preparing your site to be vigilant in
            terms of lost information.
          </li>
          <li>
            {" "}
            <strong>Bug Fix Solution:</strong> But work on bugs that arise
            promptly.{" "}
          </li>
          <li>
            {" "}
            <strong>Security Monitoring:</strong> Watch and block any danger.{" "}
          </li>
          <li>
            {" "}
            <strong>Performance Tuning:</strong> Snap and smooth the site to
            achieve the charm.
          </li>
          <li>
            {" "}
            <strong>Content Management:</strong> Refresh your site with
            promotions, add-ons, and enhancements.{" "}
          </li>
        </ul>
        <p>
          Therefore, our long-term promise of assistance guarantees that the
          website has space for continuous evolution with the trend of the
          demands placed by your business and customers. Maintenance of updates
          and security protocols up-to-date guarantees that your online presence
          is competitive and alive. Briefly, Kushel Digi Solutions is a complete
          solution provider for web services, enabling businesses to establish
          themselves online. Made-to-order from A to Z, tailored solutions
          comprise custom designs and ecommerce sites, mobile optimization, SEO
          design, payment security, inventory management, migration services,
          and maintenance support. Our efforts combine imagination with
          technological progress and business knowledge to create websites that
          engage, entertain, and convert visitors into customers for life.
        </p>

        <h6>Now Let's Build Your Digital Future </h6>
        <p>
          The ideal web development in Cincinnati may well be the final push
          that propels your business online. Businesses like to work with Kushel
          Digi Solutions because it provides:
        </p>
        <p>
          <strong>Brand-specific custom designs.</strong>
        </p>
        <ul>
          <li>Mobile-first development to reach customers on every gadget.</li>
          <li>
            SEO-based constructions that are built to attract the right kind of
            audience.
          </li>
          <li>Secure yet scalable platforms.</li>
          <li>
            Transparent and genuine communication and updates during project
            timelines.
          </li>
          <li>Long-term website maintenance.</li>
        </ul>
        <p>
          Not simply constructing websites, but also sustainable, trusting
          relationships. Now Let's Build Your Online Success
        </p>
        <p>
          Your site is the online equivalent of your store. In a busy market
          such as Cincinnati, where consumers and businesses are fighting for
          that single buyer, your site must stand out in all special senses of
          speed, dependability, and effectiveness of design. Without them, even
          the finest goods and services will never get out.
        </p>
        <p>
          Your competitors are already on the internet. Do not allow them to get
          ahead of you. You can create a new store or renew your existing one;
          either way, we can assist. The combination of technical skills and
          business knowledge enables our team to build ecommerce development in
          Salt Lake City solutions that provide real outcomes.
        </p>
        <p>
          Here at Kushel Digi Solutions, we're coupling imagination, strategy,
          and technology to create websites that drive real results. You may be
          opening your first site or need a complete overhaul. That's where we
          step in.
        </p>
        <p>
          Now is the ideal time to invest in professional services for web
          development in Cincinnati which are future ready to make your business
          stand out from the crowd.
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
                Please enter a valid phone number
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
