"use client";
import React, { useEffect, useRef, useState } from "react";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { toast } from "react-toastify";
import "./detailsmichi.css";

import { useRouter } from "next/navigation";
import FormUSA from "@/app/COMMON/FormUSA";

export default function DetailWebMichi() {
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
        <h4>
          Web Development Companies in Michigan – Smart Solutions for Every
          Business
        </h4>
        <p>
          Looking for trusted web development companies in Michigan that really
          get your business? You're in the right spot. At Kushel Digi Solutions,
          we don’t just build websites — we create powerful digital experiences
          that help your brand grow.
        </p>
        <p>
          Sites that run fast, are simple to use, and last a long time are made
          by our team. From how fast your pages load to how they look on phones,
          we care about everything. We make sure that your site works well as
          well as looks good.
        </p>
        <p>
          Our team works hard to make sure that your site is simple to use, easy
          to get to, and has pictures that make people want to connect with you.
          They do more than just build you a website; they become a partner you
          can count on to help your online business grow.
        </p>
        <p>
          We make Michigan companies stand out online by delivering them
          great-looking websites.
        </p>

        <img
          src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1761733560/Web_Development_Companies_in_Michigan_l2udei.jpg"
          alt="web development companies in michigan"
        />
        <h5>
          What Web Development Services Does Kushel Digi Solutions Offer in
          Michigan?
        </h5>
        <p>
          At Kushel Digi Solutions in Michigan, we provide a lot of different
          web construction services to help you create your online presence. We
          don't only want to develop a weird website; we also want to assist
          your company flourish. We use strategy, technology, and creativity to
          make sure that your website is unique and functions properly.
        </p>
        <p>
          We do everything, from designing websites that operate on phones to
          running your website and putting up online stores. We provide all the
          web design services you need to have a strong online presence.
        </p>
        <p>
          Our professional crew doesn't trust designs that have previously been
          developed. We learn about your business and create a website that
          suits your style. We check to see that your site appears excellent and
          operates correctly. We achieve this by using unique designs and
          strategies that are ideal for SEO. Look more closely at the key
          services we provide in web development companies in Michigan.
        </p>

        <h5>Our Web Development Services Include:</h5>
        <h6>Custom Website Development</h6>
        <p>
          We believe that every company is unique, and so should your website
          be. Our service for developing bespoke websites is all about producing
          a site that meets your brand's needs perfectly. First, we find out
          what your objectives are, who your consumers are, and who your
          competitors are. Next, we create a style and structure that are all
          your own and show off your concept.
        </p>
        <p>
          We employ HTML5, CSS3, and JavaScript, among other things, to make
          your site seem modern and load rapidly. We also make sure that you can
          easily alter and manage your site. We build everything from the ground
          up, whether you require a small portfolio or a large company site.
        </p>

        <p>
          We just want to build a website for your company that looks amazing
          and helps it thrive online. Kushel Digi Solutions can help you stand
          out in Michigan's difficult market by giving you a distinctive online
          presence.
        </p>

        <h6>E-Commerce Website Development</h6>
        <p>
          We design ecommerce stores that help you sell your products. Our
          ecommerce stores are fast, secure, mobile responsive, reliable and SEO
          optimized in order to target the right audience. We verify every part
          of your business, from the stunning product pages to the easy methods
          to check out, to make sure everything works correctly. Your customers
          will have ease of purchasing and for a check out process because of
          our simple order and check out design.
        </p>
        <p>
          You can also keep track of your items, accept money, and check what
          orders you have coming in. These elements provide your internet
          company with the resources it needs to go bigger. Our experts in web
          development companies in Michigan will make sure that your site works
          for you, no matter how large or small your shop is.
        </p>

        <p>
          People in Michigan may earn a lot of money by buying online. Online
          shopping can make people in Michigan a lot of money. We will make a
          professional online store that not only looks good, but also helps in
          gaining visitors' trust and helps you make more sales.
        </p>

        <h6>Responsive Web Design</h6>
        <p>
          Maximum people use phones for online surfing or shopping. If your site
          doesn't look good or work well on phones, people might not want to go
          there. We make sure that every website we make works well on phones
          because of this.
        </p>
        <p>
          Simple, clean styles that look good on phones are what we make. This
          makes it simple for everyone to go about, no matter what device they
          are using. Responsive design may also enhance your SEO score since
          Google appreciates websites that are simple to use on phones.
        </p>
        <p>
          Our authors employ CSS and styles that may be changed to make sure
          that your website appears excellent on all devices. A website that is
          easy to use will keep users on it longer, have fewer bounce rates, and
          make more consumers satisfied, which is precisely what your company
          wants.
        </p>
        <h6>Website Maintenance & Support</h6>
        <p>
          Your website requires the same amount of maintenance as the rest of
          your company. When you take professional help from Kushel Digi
          Solutions, your website will remain fast, secure, responsive, and run
          perfectly on all devices
        </p>
        <p>
          We fix bugs, check for software updates, and maintain back-ups
          regularly, so that your website operates super fast and you can work
          tension-free. You may always call or email us for help if anything
          goes wrong.
        </p>
        <p>
          We can also keep the style and content of your site fresh and up to
          date by making little changes. We'll handle your IT issues while you
          run your business.
        </p>

        <h6>SEO-Friendly Web Development</h6>
        <p>
          Attractive websites are also of no use if people won't find them. Our
          website ranks higher on search engines, which is why if you search for
          something on Google, our site appears on top as we follow SEO best
          practices. In the backend, we look after everything like shortening or
          URLs, website loading speed, and many more. quickly.
        </p>
        <p>
          We use structured data and clean HTML5 code to help Google understand
          what you say. We make sure our websites work well, which may help you
          get more people to visit them.
        </p>
        <p>
          We also make sure that the site runs swiftly on mobile devices and
          incorporates crucial SEO tools like meta tags and photo optimization.
          What did you do after that? This website may help you obtain more
          clients in Michigan and bring more people to your company.
        </p>
        <h6>Website Redesign & Upgrades</h6>
        <p>
          You need a new site if the one you have is slow or the design is old.
          We can make substantial improvements to how your site appears and
          performs with our website makeover and upgrade services.
        </p>
        <p>
          We will make your site quicker, simpler to use, and appear better, but
          you should stay loyal to yourself. We can assist you with everything,
          from getting a new appearance to improving your SEO to speeding up
          your entry.
        </p>
        <p>
          We improve ancient websites by using the newest design and coding
          methods. The new experience will be fun for those who visit your site,
          and it will help your company receive more leads and attention. Kushel
          Digi Solutions is more than simply another Michigan firm that builds
          websites. As a leading web development companies in Michigan, our team
          is always available to fix everything. Let's build an online home for
          your business that will help it expand and get the word out about your
          brand.
        </p>
        <h5>
          Why Work with Kushel Digi Solutions for Web Development Companies in
          Michigan?
        </h5>
        <p>
          You need a web development companies in Michigan that understands your
          business, listens to your objectives, and develops a website that
          actually expresses who you are. That's what Kushel Digi Solutions does
          all the time.
        </p>
        <p>
          We employ strategy, technology, and creativity to build websites that
          accomplish more than simply look nice.
        </p>
        <p>
          We want to do more than just complete work; we want to develop
          long-term relationships. We pay close attention to every work, whether
          you want to build a new site from scratch or improve your current one.
        </p>
        <p>
          We take great care of everything, from the design and programming to
          the SEO and customer service.
        </p>
        <p>
          This is why so many Michigan companies trust us to take care of their
          websites.
        </p>
        <h6>Experience That Delivers Results</h6>

        <p>
          Our team members have been making websites for a long time. We've
          helped small businesses, local stores, and enterprises that are
          developing all around Michigan. We learn something new from every
          task, which helps us produce better websites every time.
        </p>

        <p>
          We don't use the same templates for everything. We create
          custom-designed websites that meet your brand's requirements. We make
          sure that the website for your business or online store looks good and
          works well.
        </p>
        <p>
          Your website will be quick, secure, and ready for the future since our
          developers know how to utilize HTML, CSS, JavaScript, and Node.js.
        </p>
        <p>
          Kushel Digi Solutions gives you more than simply a website. You
          receive a collection of tools that are meant to help your company
          flourish online.
        </p>
        <h6>Quality Websites That Fit Your Budget</h6>
        <p>
          A good website doesn't cost a lot of money. It should be created with
          dedication and skills. At Kushel Digi Solutions, we don't compromise
          on quality. We offer web development companies in Michigan.
        </p>
        <p>
          We believe in clear prices, which means there aren't any hidden fees
          or costs. What are your goals, how much money do you have, and when do
          you need the work done by? This helps us make something just right for
          you.
        </p>
        <p>
          Our team focuses on good design, fast performance, and code that is
          SEO-friendly even when there are options that are easy on the wallet.
          As a result? A website that looks great and works even better, made by
          professionals.
        </p>
        <p>
          Our goal is easy: to help every business in Michigan, no matter how
          big or small, go online in a sure and stylish way.
        </p>

        <h6>A History of Success</h6>
        <p>
          Before you hire a web design company, you should look at the work
          they've already done. Lots of different types of businesses in
          Michigan and other places have had good experiences with Kushel Digi
          Solutions. We've helped a lot of businesses, new and old, make
          websites that work.
        </p>
        <p>
          The websites we have are a mix of modern designs, useful plans, and
          ones that get people to come. What really counts, though, is how well
          these services work. It's helped many of our clients get more visits,
          make more sales, and be seen more online.
        </p>
        <p>
          We have had plans for a long time. Our websites are made to grow with
          your company. You can now make changes to your site whenever you want.
        </p>
        <p>
          A lot of clients have trust in us because of our previous track
          record. As a reliable web development companies in Michigan, our
          expert team works exactly the way you want your dream website.
        </p>
        <h6>Reasonable and clear Pricing</h6>
        <p>
          We believe that all businesses, no matter how big or small, should be
          able to get great web design. This is why Kushel Digi Solutions keeps
          our prices low and our services easy. You don't have to pay more if
          you are clear about the services you will get. We never ask for any
          hidden charges or extra fees. The prices are easy to see and
          understand. We'll tell you right away how much it costs for your
          business to have a simple website, a unique design, or a full
          ecommerce platform.
        </p>

        <p>
          We always do a good job, even though our prices are cheap. We only
          make business websites that look good on phones. They are made to help
          your business grow. You get the most for your money because we care
          most about value.
        </p>
        <p>
          Business deals we offer in Michigan can be changed to fit a wide range
          of needs and funds. It won't cost a lot of money and will do what you
          want it to do for your business. It doesn't matter if your company is
          new or old and growing. You can count on us and pay a little to make a
          website for you.
        </p>

        <h6>Reliable Support and Long-Term Partnership</h6>
        <p>
          Creating a website is not the only thing to do; maintaining it is the
          most important task. Over time, it needs to be fixed, updated, and
          looked for security holes. We do more than just make you a website at
          Kushel Digi Solutions.
        </p>
        <p>
          We can check your speed, perform monthly maintenance, create backups,
          and implement security changes for a small fee. We can add more tools
          or remove unwanted ones if your business expands. If anything goes
          wrong, we are there to fix it immediately.
        </p>
        <p>
          This connection won't give you any trouble for a while. We'll take
          care of the technical stuff while you work on building your business.
        </p>
        <p>
          Because we give each customer individualized treatment, they will
          never feel left behind. Let's make sure you have fun online.
        </p>
        <p>
          Are you ready for web development companies in Michigan to help your
          business grow? We need to make something great happen right away, so
          call Kushel Digi Solutions right away!
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
