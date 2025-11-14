"use client";
import React, { useEffect, useRef, useState } from "react";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { toast } from "react-toastify";
import "./detailsgreen.css";

import { useRouter } from "next/navigation";
import FormUSA from "@/app/COMMON/FormUSA";

export default function DetailWebGreen() {
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
          Web Development Greensboro – Turning Your Ideas into a Digital Reality
        </h4>
        <p>
          Your site is likely the first thing people see about your business. It
          needs to work well and look good. At Kushel Digi Solutions, we build
          websites for businesses in web development Greensboro that help them
          grow, stand out, and do well online.
        </p>
        <p>
          Our web development Greensboro make sure that the websites they
          develop appear attractive and operate effectively. We make sure that
          all screens can see your site well, that it loads fast, and that it is
          simple to use.
        </p>
        <p>
          This is true for all businesses, big and small, new and old. We make
          websites that are just right for you. From clean code to easy entry,
          we make sure that everything we make works, is safe, and is built to
          last.
        </p>
        <p>
          We can't use templates that are previously prepared. We take the time
          to understand your company, your customers, and what you're aiming
          for. Then, we create a website that really makes your firm stand out.
        </p>
        <p>
          When you hire Kushel Digi Solutions, you get more than just a website.
          You also get an honest digital partner to help your online business
          grow.
        </p>

        <img
          src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1761733560/Web_Development_Greensboro_gpdag6.jpg"
          alt="web development greensboro"
        />
        <h5>What Web Development Services Do We Offer in Greensboro?</h5>
        <p>
          Many businesses in Greensboro are developing, and to stand out, their
          brands need to have a strong online presence. Our site creation
          services may assist with that. We assist businesses in the area to
          develop websites that are robust, attractive, simple to use, and truly
          show off their brand.
        </p>
        <p>
          We build websites that help companies develop, gain more customers,
          and earn more money, no matter how long they've been in business. We
          emphasize speed, new ideas, and smart technology to make sure that
          your site accomplishes more than simply looking amazing.
        </p>
        <p>
          We handle everything, from design and development to SEO and
          maintenance. We are glad to assist companies in Greensboro to go
          online the proper way.
        </p>

        <h5>Our Website Development Greensboro Services Include:</h5>
        <h6>Custom Website Design</h6>
        <p>
          Your website should totally show off your brand, and that's exactly
          what we're all about. Our web development Greensboro creates websites
          that match your style, values, and goals. We don't use dull themes. We
          make each design from the ground up so that it is one of a kind.
        </p>
        <p>
          We pay attention to designs that appear well on phones, layouts that
          are simple to read, and navigation that is straightforward to use.
          This means that your site appears excellent on any phone or computer.
          We also know a lot about color psychology and utilize the latest
          design tools to make your company stand out.
        </p>

        <p>
          What is the aim? To persuade others to pay attention and stay engaged.
          Our one-of-a-kind web design will provide you with a site that not
          only looks wonderful but also conveys your narrative in a clear and
          elegant manner.
        </p>

        <h6>E-Commerce Website Development</h6>
        <p>
          If you want an ecommerce website, then don't look further; our
          websites work well, are fast, responsive, and SEO friendly. We use
          platforms like Shopify, WooCommerce, and Magento to make online
          stores. Our designed websites attract more target audience, resulting
          in more sales and conversions.
        </p>
        <p>
          We designed every page on our site to make buying simple and exciting.
          You may easily and safely utilize anything, from the product pages and
          shopping carts to the payment methods. We also worry about speed since
          no one loves waiting for a website to load.
        </p>

        <p>
          Our ecommerce SEO strategies also help your shop show up in search
          results, which makes it simple for consumers to discover you. We build
          solutions that can expand with your company, no matter how many things
          you sell.
        </p>

        <h6> Mobile App Development</h6>
        <p>
          Having a website is excellent these days, but having an app may really
          help your company thrive. We build mobile applications that are simple
          to use and help your supporters engage with your business whenever
          they want.
        </p>
        <p>
          Our app builders make sure your customers have a great time by working
          with both Android and iOS. Our designed apps are simple, fast,
          responsive, always upgraded and have smooth navigation.
        </p>
        <p>
          As a reliable web development Greensboro, our team creates
          business-oriented apps. No matter which app you choose, whether it's
          for ecommerce, payments, or services. A customized app helps you go
          ahead of your competition in this crowded market and make more sales.
        </p>
        <h6>Support and Maintenance for the Website</h6>
        <p>
          Designing and getting your website live is not the only task to do.
          Keeping it smooth, upgraded, and trendy is also a crucial thing to
          maintain. That's why we help businesses with post-launch support and
          maintenance.
        </p>
        <p>
          We are always available for you, no matter whether you need us for bug
          fixing, making it safe, or upgrading software. We also check on your
          website to make sure it is simple to use and loads quickly. We repair
          things quickly if something goes wrong, so your company never stops.
        </p>
        <p>
          To keep hackers away, you must keep your website up to date. In
          addition, it keeps your information up to date and stops crashes. If
          you work with us, we'll make sure your website stays strong and
          healthy all year.
        </p>

        <h6>SEO and Digital Marketing</h6>
        <p>
          An excellent website is still of no use when no one can visit it. We
          can help you rank higher on search engines with our SEO best
          practices. We help your website get a better Google ranking, get more
          target visitors that are willing to convert, and turn clicks into
          sales.
        </p>
        <p>
          On-page SEO, backlinks, content marketing, and keyword study are some
          of the things we do. We also run focused ad campaigns on Google and
          social media to get more people to see your ads. We base all we do on
          facts and look for results.
        </p>
        <p>
          No matter what you desire, we can assist you in obtaining more leads,
          sales, or visitors to your website. If you have the correct SEO and
          digital strategy, your Greensboro company may expand quicker and
          appear better online.
        </p>
        <h6>Building a CMS</h6>
        <p>
          A CMS, or Content Management System, is a program that helps you run
          your website. We use content management systems (CMSs) like WordPress,
          Joomla, and Drupal to make our websites.
        </p>
        <p>
          People who aren't adept with computers may now modify text, upload
          photographs, or publish blogs more easily. You stay in command, and
          your website keeps up to date. Also, our CMS systems are safe,
          scalable, and can be fully tailored to the needs of your business.
        </p>
        <p>
          We make it easy to handle your website, whether you're a writer, a
          business owner, or a service. A CMS that is easy to use will save you
          time and money so you can focus on what really matters: building your
          business.
        </p>
        <h5>Why We’re the Best Choice for Web Development Greensboro?</h5>
        <p>
          Picking the right company to build your website can make all the
          difference for your business. Making cool websites and getting to know
          our customers well are what Kushel Digi Solutions is all about.
        </p>
        <p>
          We don't simply produce art; we also work with you to build stuff. We
          want to use your ideas to build a website that shows off your brand.
        </p>
        <p>
          We care about making things simple, stylish, and efficient. All of the
          websites we design load fast, are simple to use, and look beautiful on
          all screens.
        </p>
        <p>
          No matter how large or small your company is in Greensboro, our web
          development Greensboro can help you develop a website that gets people
          to notice it and convert them into devoted customers.
        </p>

        <h6>We Focus on Your Brand, Not Just Design</h6>

        <p>
          We try very hard to know what you want, how you'd like your business
          to feel, and who you want to reach. Help us make a digital plan that
          will help you reach your goal by telling us what we need to know. We
          always tell you what's going on.
        </p>

        <p>
          We can't wait to hear what you think about the drawings and every
          other little thing! This page has exactly what you were looking for!
          It's not enough to just make a site; you need to make one that really
          shows off your business.
        </p>
        <p>
          This helps us come up with a look that your consumers would like. If
          your website and brand communicate with one another, people will trust
          your brand more and come back.
        </p>
        <p>
          We adore producing designs that are one-of-a-kind, well-planned, and
          all about you.
        </p>
        <h6>We Create User-Friendly and Mobile-Ready Websites</h6>
        <p>
          Most individuals who browse websites these days do it on their PCs,
          phones, or tablets. It's not only a fad to make websites that operate
          well on phones; it's crucial. Kushel Digi Solutions builds websites
          that appear well on any screen size by making them
          "mobile-responsive."
        </p>
        <p>
          We need to be able to use it easily, too. It's simple to pick one, and
          the pages load quickly. People are not going to waste time trying to
          find something. They will rather use a website that works well and
          makes sense.
        </p>
        <p>
          We also think about speed. People leave sites that take too long to
          load. We make websites that work by using good code and the best
          features.
        </p>
        <p>
          In this way, websites open fast, which is good for both people and
          search engines. We'll always be one step ahead of your Greensboro
          business.
        </p>

        <h6>We Use Smart SEO Techniques</h6>
        <p>
          It's fantastic to have a good website, but visitors need to be able to
          find it. We can assist by sharing what we know about SEO. We construct
          all of our websites with SEO in mind so that search engines like
          Google can simply locate and rank your content.
        </p>
        <p>
          Names and meta tags that are well-written, as well as clean code that
          runs quickly, all make the site search engine friendly. We also
          utilize clever phrase placement to make sure that individuals in
          Greensboro and other places can locate your site. We don't simply want
          traffic; we want actual folks to come to our site.
        </p>
        <p>
          You may acquire more leads, greater traffic, and better outcomes
          without spending a lot of money on advertisements if you take care of
          your site. When you choose us as web development Greensboro, your
          website won't simply look good; it will also be powerful and ready to
          go.
        </p>
        <h6>We Offer Ongoing Support and Maintenance</h6>
        <p>
          Designing a website is not at all enough. There are other things that
          need to be done daily, like bug fixing, keeping the software up to
          date, upgrading tools, and many more. We can assist you with whatever
          you need to keep your site running smoothly. Do you need to repair
          something? Add some new items or change a few more? You may SMS or
          phone us at any time.
        </p>

        <p>
          We're still friends even though the job is over. We're always here to
          help you on the internet. This keeps your website safe, up to date,
          and in good shape as your business grows. Think of us as your friends
          because we're always here to help you with your computer. When you
          hire us, you can work on your business while we make your website look
          great.
        </p>

        <h6>Quality Websites at an Affordable Price</h6>
        <p>
          Greensboro law says that every business needs to make a budget. Our
          web development Greensboro can do great work for you without charging
          a lot of money. Sites like yours that are cool, useful, and cheap are
          what we do.
        </p>
        <p>
          You can flip around some of our great things. We can help you come up
          with a plan for your website, online shop, or any other project you
          wish to work on. There are no hidden expenses since the data are
          transparent.
        </p>
        <p>
          We do great work and always have low prices. It will be safe, work
          well on phones, and be set up to help you. We think that every
          business, not just big ones, should be able to get good web designers.
        </p>
        <p>
          You can find great deals and cool sites that help you level up there.
          It's smart, simple, and made to help you do well.
        </p>
        <p>
          Are you ready to kick-start your online presence with a bang? Let us
          make something very special that will replicate your business goals
          and help you grow. Contact us right now for expert web development
          Greensboro. Let's build a website that your clients will appreciate!
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
