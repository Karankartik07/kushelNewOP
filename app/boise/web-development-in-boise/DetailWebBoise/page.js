"use client";
import React, { useEffect, useRef, useState } from "react";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { toast } from "react-toastify";
import "./details.css";

import { useRouter } from "next/navigation";
import FormUSA from "@/app/COMMON/FormUSA";

export default function DetailWebBoise() {
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
  //     // toast.error("Invalid email address!");
  //     setHasShownToast2(true);
  //     return;
  //   }

  //   if (phoneDigitsOnly.length < 10 || phoneDigitsOnly.length > 15) {
  //     setHasShownToast(true);
  //     return;
  //   }
  //   router.push("/thankyou");
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
    <section className="details-sec">
      <div className="details-desc">
        <h4>Web Development in Boise– Modern, Fast, and User-Friendly Sites</h4>
        <p>
          Looking for a web development in Boise you can trust? You're in the
          right spot. We make websites that load quickly, look good, and are
          simple for people to use here at Kushel Digi Solutions. We know your
          website is more than just a page online. It's the face of your
          business. That's why we carefully plan and build with your goals in
          mind.
        </p>
        <p>
          Any size of business can work with our Boise team. Whether you are an
          established business or a small store, we are here to help you grow.
          We design all kinds of websites you need. Our websites are smooth,
          easy-to-use, SEO optimized, and mobile-friendly.
        </p>
        <p>
          We also focus on making websites that get things done. That means
          having a clean look, easy access, and the correct tools to connect
          with your customers.
        </p>
        <p>
          Do you need special features? We'll take care of you. Do you want
          people to be able to find your site? When we build, we think about
          SEO.
        </p>
        <p>
          At Kushel Digi Solutions, we think that building websites should be
          easy and not cause you any stress. We take what you want and make it
          into a website that works for you. Let's make something great in Boise
          for your company.
        </p>
        <img
          src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1758873027/Web-Development-in-Boise_kdubup.png"
          alt="web development in boise"
        />

        <h5>What Web Development Services Do We Offer in Boise?</h5>
        <p>
          We at Kushel Digi Solutions know that each Boise business is
          different. To make things even better, we don't just offer one plan
          for web creation; we make sure that the plan fits your needs. Our
          designed websites help grow your business, connect with your audience,
          and look decent online to help you gain trust in the competitive
          market.
        </p>
        <p>
          We can help you if you need a brand-new website, make changes to an
          old one, or add features that are specific to your business. We stress
          making designs that are easy for people to use, safe codes, and styles
          that work on all devices. We build every site with speed in mind, so
          your customers can enjoy sites that run quickly and are easy to
          navigate.
        </p>
        <p>
          Our team also helps with SEO, making unique tools, and e-commerce, so
          your website does more for your business than just "look good." We've
          helped a lot of Boise brands shine online, from new businesses just
          starting to well-known ones.
        </p>

        <h5>Our Website Development Services Include:</h5>
        <h6>Custom Website Development</h6>
        <p>
          Each Boise business has a unique story, and your website should show
          that. We make websites that are unique to your business, your
          customers, and your goals here at Kushel Digi Solutions. We skip the
          pre-made designs and really focus on getting to know your business and
          what you need. We can take this info and create a site that not only
          looks awesome but also connects with your customers.
        </p>
        <p>
          Our websites are designed with simple codes and runs fast. We make
          your site speedy, secure, mobile-friendly and SEO optimized, ensuring
          seamless experience to your visitors.{" "}
        </p>

        <p>
          We also do our best to be flexible. Your site should grow along with
          your business. That's why our custom development makes it easy for you
          to add features, change styles, or make the site bigger. When you work
          with Kushel Digi Solutions, your website isn't just a page online;
          it's a useful tool that you can use to get people to visit, keep them
          interested, and eventually buy something.
        </p>

        <h6>E-Commerce Development</h6>
        <p>
          These days, tons of businesses are selling stuff online. We make it
          super easy for businesses in Boise to get things done. Kushel Digi
          Solutions creates e-commerce sites that are secure, user-friendly, and
          super smooth to navigate. These sites make it super easy for your
          customers to shop. Every part of the process, from checking out the
          stuff to paying for it, feels super fast and secure.
        </p>
        <p>
          We work with popular e-commerce platforms like Shopify and
          WooCommerce, plus some cool custom options that are tailored just for
          you. We created a store that's super simple to manage and designed to
          expand, no matter if you're selling ten items or a thousand. We make
          sure that our designs are all about making it easy to browse, having
          cool layouts, and being able to check out quickly.
        </p>

        <p>
          Our team will make sure that your store looks great on all devices,
          like computers and phones. We work together with shipping tools,
          payment platforms, and stocking systems to make your daily chores
          easier. We put security first so that your customers can buy safely.
          Kushel Digi Solutions helps online companies do well. It'll add
          customers, boost sales, and accelerate Boise business growth.
        </p>

        <h6>Responsive Web Design</h6>
        <p>
          These days, most of the visitors prefer using mobile-phones, tablets
          and desktops to visit websites. Therefore mobile friendly websites are
          not a fashion but a necessity. At kushel Digi Solutions, we create
          mobile responsive websites that looks awesome on all secreen sizes.
        </p>
        <p>
          A responsive website just adapts to whatever device your customer is
          on. No zooming in, no cut-off images, and no messy layouts, got it?
          People will find it very easy to read and navigate your site. It will
          also be fun to look around. A smooth experience is important because
          it keeps people on your site longer and increases the chances that
          they'll contact you or buy something.
        </p>
        <p>
          Google also cares a lot about websites that work well on phones.
          People in Boise and other places can find your business online more
          easily if you have a mobile site. Everything we do for your website,
          from building it from scratch to giving an old one a new look, is
          adaptable. Kushel Digi Solutions hooks you up with a site that looks
          awesome, runs smoothly, and earns your customers' trust on any device.
        </p>
        <h6>CMS Development</h6>
        <p>
          Making sure your website content is on point doesn’t need to be a
          pain. That's why at Kushel Digi Solutions, we offer CMS (Content
          Management System) development to make things simple for you. Just a
          few clicks and you are ready to manage your online business
          effortlessly. No hard-coding is required.
        </p>
        <p>
          Sites like Shopify, Magento, and WordPress are great ones that we work
          with. If you need something different, we can also make custom CMS
          options for you. We're here to help you manage your website
          effortlessly, no coding stress involved. A CMS website can definitely
          help you save time and money. Why not just take care of those little
          updates yourself instead of calling a developer every time? Your
          website keeps things flexible, lively, and always up-to-date.
        </p>
        <p>
          We create CMS sites that are super secure, quick to load, and easy to
          scale, so your site can keep up as your business expands. With Kushel
          Digi Solutions, you’re not just getting a website—you’re getting the
          tools to handle your online presence with ease and confidence.
        </p>
        <h6>Website Redesign & Upgrades</h6>
        <p>
          If your website feels outdated, takes forever to load, or just doesn’t
          vibe with your brand anymore, it might be time for a change. Kushel
          Digi Solutions, right here in Boise, can totally help you jazz up your
          website with some awesome new designs and features. It's not only
          about how something appears when you redo it. We create websites that
          fit your business, are super user-friendly, and look awesome on mobile
          devices.
        </p>
        <p>
          Visitors to your site are going to have a blast exploring because we
          make everything faster, super user-friendly, and switch up the style.
          This keeps everyone pumped and ensures your stuff is enjoyable for
          them. We throw in some awesome features for websites, like online
          booking, payment options, and custom tools. We can make some changes
          to the layout of your site to make it shine more if it's not getting
          enough visits or the SEO it needs.
        </p>
        <p>
          It's kind of like adding a new vibe to your online life. Kushel Digi
          Solutions is ready to give your website a fresh new look that’s not
          only modern but also makes your business run better—helping you
          connect with more customers and stay competitive in Boise’s bustling
          market.
        </p>
        <h6>SEO-Friendly Development</h6>
        <p>
          A nice-looking website is cool, but it doesn't really matter if nobody
          can find it. Kushel Digi Solutions makes sure to build every site with
          SEO in mind. SEO-friendly development is all about setting up your
          website so that search engines like Google can easily get it and rank
          it higher.
        </p>
        <p>
          We focus on clean coding, optimized images, quick loading times, and
          mobile-friendly designs—these are all super important for SEO. What's
          the fuss about this? Getting higher rankings means more folks will
          check you out, click on your stuff, and help you bring in more
          business. If you’ve got a little shop in Boise or a big business, SEO
          is a solid way to connect with local customers looking for what you’ve
          got.
        </p>
        <p>
          We take it a step further. To keep a check on your website
          performance, we have got some latest tools which we add on your
          website. If you chooe Kushel Digi Solutions, you are not just getting
          a random website, you are getting an online presence tht is strong and
          ready to help you suceed from the very first day.
        </p>
        <h5>Why Choose Kushel Digi Solutions for Web Development in Boise?</h5>
        <p>
          Choosing the right website development company can make a total
          difference for your business. At Kushel Digi Solutions, we’re all
          about making cool websites and building great relationships with our
          clients.
        </p>
        <p>
          We're all about creating digital solutions that actually work for your
          business.. From our first chat to the big launch, we keep everything
          easy, straightforward, and relaxed. We’re all about mixing creativity
          with tech. Your website will not only look great, but it’ll also work
          smoothly and actually get you some solid results.
        </p>
        <p>
          Our Boise team is made up of pros who totally get design and
          development. We get what you're saying, put together a plan, and build
          websites that are easy to use, secure, and set up for growth.
        </p>
        <p>
          Take a look at why tons of businesses in Boise choose Kushel Digi
          Solutions for their web development services:
        </p>
        <h6>Local Expertise with a Personal Touch</h6>

        <p>
          Teaming up with Kushel Digi Solutions means you’re not just getting a
          web developer—you’re joining forces with a local Boise crew that
          really gets your market. We get the one-of-a-kind challenges and
          chances businesses deal with around here, and we use that insight to
          create websites that really connect with your audience.
        </p>

        <p>
          We’re not like those big web development agency that see clients as
          just another number; we actually take the time to get to know your
          business. We talk with you, learn about your goals, and create a
          website that truly highlights your brand. Having that personal touch
          really makes your site feel more relatable and helps you vibe better
          with local customers.
        </p>
        <p>
          We are here to help you throughout. Got some doubts or questions? We
          are here to help you immediately. No need to wait around for days to
          get some help.
        </p>
        <p>
          When you team up with Kushel Digi Solutions, you're not just getting a
          service; you're getting a local buddy who's all about helping you
          succeed in Boise.
        </p>
        <h6>Custom Solutions for Every Business</h6>
        <p>
          Your website should show what kind of vibe your business has. We don't
          use methods that work for everyone. Kushel Digi Solutions makes web
          creation fit your needs, your budget, and the people you want to
          reach.
        </p>
        <p>
          For small businesses in Boise, we can create a smart, secure, and
          affordable website that really highlights your USP. If you're a
          growing company, we can set up the latest features like e-commerce,
          booking systems, or content management tools. You just pay for what
          you actually need, no unnecessary extras.
        </p>
        <p>
          We always think about your customers when we design. Your website will
          be a breeze to navigate, load fast, and totally fun to use. This keeps
          visitors hanging out, getting involved, and becoming loyal customers.
        </p>
        <p>
          When you work with us, you’re not just getting a website—you’re
          getting a solution that’s tailored to your unique business. Kushel
          Digi Solutions definitely knows how to make a mark.
        </p>

        <h6>Focus on User Experience</h6>
        <p>
          A good website isn't just one that looks good; it's also one that
          makes people feel good when they visit it. When people come to your
          site, Kushel Digi Solutions wants them to have a great time and not
          have any problems. Our site's quick loading times and easy access make
          it easy to get around. We make sure everything works well.
        </p>
        <p>
          To make sure everyone has a great time, we check your site out on a
          number of devices and computers. It's really easy to find buttons and
          read choices. The styles also make it easy for customers to find what
          they need.
        </p>
        <p>
          If you create a solid user experience, people are more likely to hang
          out on your site and do things like give you a call, book a service,
          or make a purchase. A confusing or slow site just makes folks want to
          bounce. Kushel Digi Solutions helps your website look awesome, so you
          can build trust and grow your Boise business.
        </p>
        <h6>Reliable Support and Maintenance</h6>
        <p>
          Launching your website is only the start. Kushel Digi Solutions
          provides continuous support and maintenance to keep your site looking
          fantastic, secure, and running smoothly. Don't worry about the
          back-end stuff; we've got the tech changes handled, we'll fix any
          bugs, and keep everything running smoothly.
        </p>

        <p>
          If you’re looking for new tools or thinking about making some changes,
          just give us a shout—we’ve got your back! Your website grows and
          changes just like your business does. We keep an eye on the speed,
          check for any security issues, and back up your information regularly.
          That definitely makes you feel better knowing your website is super
          secure and dependable.
        </p>

        <h6>Affordable Pricing with Quality Results</h6>
        <p>
          Budgeting is super important for companies in Boise. As a web design
          company in Boise, we offer great services without breaking the bank.
          We’re all about giving you awesome, budget-friendly, and practical
          websites.
        </p>
        <p>
          We've got some cool flexible bundles for you! We'll whip up a custom
          plan for your small business website, online store, or any other
          project you've got in mind. No hidden fees—just transparent pricing.
        </p>
        <p>
          We keep our prices competitive, but we always deliver top-notch
          performance. Your site’s gonna be secure, mobile-friendly, and set up
          to get you results. We think that solid web development should be
          available to every business, not just the big names.
        </p>
        <p>
          Kushel Digi Solutions gives you the perfect combo—great prices and
          awesome websites that help you level up. It’s clever, straightforward,
          and made to help you succeed. Want to create a website that works for
          your budget and actually gets results? Contact us today, and let’s
          start with web development in Boise!{" "}
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
          <h2 ref={formRef}>GET A FREE QUOTE</h2>

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
