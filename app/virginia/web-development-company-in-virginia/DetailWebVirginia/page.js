"use client";
import React, { useEffect, useRef, useState } from "react";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { toast } from "react-toastify";
import "./detailsrich.css";

import { useRouter } from "next/navigation";
import FormUSA from "@/app/COMMON/FormUSA";

export default function DetailWebVirginia() {
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
          Web Development Company in Virginia – Affordable, Reliable, and Custom
          Solutions
        </h4>
        <p>
          Need a web development company in Virginia that you can trust? You're
          in the right place. In the world we live in now, your website is how
          people see your business. These days, you can't avoid having a good
          public image.
        </p>
        <p>
          Our team makes sites that look good, load quickly, and are simple for
          people to use. Don't worry about whether you're a small business, a
          neighbourhood group, or a big company.
        </p>
        <p>
          Kushel Digi Solutions makes sure that the websites we build look great
          and work well. We care about having clean code, smart styles, and
          features on your site that make it easy for everyone to use.
        </p>
        <p>
          You can have a small business, be a new company, or be a big name. We
          can make websites that can help you get what you want and help your
          business grow online.
        </p>
        <p>
          Sites that our team makes are up-to-date, quick, mobile-friendly, and
          ready for SEO. This means that your website will not only get people
          to visit, but it will also keep them there and make them buy
          something.
        </p>
        <p>
          It's easier than ever to have a strong online footprint when Kushel
          Digi Solutions is on your side.
        </p>
        <img
          src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1759143250/web-development-company-in-virginia_pxx21b.jpg"
          alt="web development company in virginia"
        />
        <h5>
          What Web Development Solutions Does Kushel Digi Solutions Offer in
          Virginia?
        </h5>
        <p>
          When you hire a web development company, that's not all you need. You
          need a full answer. People should want to visit your website, and it
          should help your business grow. We can help with that at Kushel Digi
          Solutions because we make websites in Virginia in a lot of different
          ways.
        </p>
        <p>
          Websites that look good and work well are made by our team. They can
          accomplish anything, including building e-commerce sites or making
          bespoke websites. We employ HTML, CSS, JavaScript, Node.js, and other
          innovative technologies to make sure your website is solid when we
          design it. No matter how large or small your brand is, every task is
          made just for you.
        </p>
        <p>
          Our major objective is to build secure websites, load quickly, operate
          well on phones, and are ready for search engine optimisation. You may
          also receive assistance with making sure your site is kept up to date,
          revamping it, and making it seem its best. Kushel Digi Solutions is a
          digital partner that can help your business flourish.
        </p>

        <h5>Our Web Development Services in Virginia Include:</h5>
        <h6>Building a Website Just For You</h6>
        <p>
          Your website should show how your firm is different from others.
          Custom website creation is what we do. We make websites that match
          your brand and the way you run your business. Your page should make
          your company stand out.
        </p>
        <p>
          We check to make sure that your site appears well on all types of
          phones, laptops, and tablets. From the options to the buttons,
          everything is made to be easy for the holder. We also add galleries,
          email forms, and "call to action" buttons that let people get in touch
          with your site.
        </p>

        <p>
          We want your website to feel like it belongs to you. Your business
          will stand out in the Virginia market if you have a custom design.
          There will be more to your site than meets the eye. It will be a great
          approach to engage with clients and expand your business online.
        </p>

        <h6>Mobile-Friendly and Responsive Design</h6>
        <p>
          Many people use multiple devices to browse the web; therefore, sites
          need to be simple to adapt so that they operate on all of them. Your
          site looks excellent on desktops, phones, and apps, thanks to our
          staff. When Kushel Digi Solutions builds websites, we look at how they
          will work on phones first. This means that both phones and computers
          will be able to use and see your site well.
        </p>
        <p>
          Our patterns can be changed right away to fit any screen size because
          they are flexible. You can see everything, from the buttons and photos
          to the forms and choices. This makes your visitors happy and boosts
          your search results since Google appreciates websites that operate
          well on phones.
        </p>

        <p>
          New platforms and tools are used by our team to make sure that
          everything loads quickly and works well on all devices. That's right,
          no one will have to zoom in or deal with broken layouts. Your site
          will be easy for everyone to use. This style lets you reach people
          from anywhere and at any time.
        </p>

        <h6>Building E-Commerce Sites for Online Stores</h6>
        <p>
          You need more than just a website to actually sell items online. You
          need a good e-commerce tool. Kushel Digi Solutions builds online
          stores that are secure, easy to use, and meant to get more people to
          buy things.
        </p>
        <p>
          We made the shopping carts, the pages explaining the items, and the
          secure payment options. Your consumers will appreciate browsing at
          your business since it's simple to find things and check out quickly.
          We make it easy for you to keep track of sales, manage your stock, and
          add new items behind the scenes.
        </p>
        <p>
          Safety is really important. We use the newest technology to keep your
          customers' data safe and ensure that transactions are safe. We also
          make your shop mobile- and SEO-friendly to bring in more customers.
          Our e-commerce development services may help your company flourish in
          Virginia and beyond, whether you create your first online shop or make
          an existing one better. We'll help your shop grow, sell more, and make
          your customers happy.
        </p>
        <h6>SEO-Friendly Web Development</h6>
        <p>
          For your site to be useful, people must be able to find it. Search
          engines will like the website we build for you in Buffalo because it
          is SEO-friendly. What we do is the best way to help Google and other
          search engines understand what you've written.
        </p>
        <p>
          Along with looking good, the site should load quickly, work well on
          mobile devices, be easy for search engines to find, and have code that
          is simple to read. More people visit, lead to, and buy from websites
          that are better. We can also help with things on the site itself, like
          the names, meta tags, and the way the content is organised. This helps
          more people find your page and speeds things up online.
        </p>
        <p>
          There are a lot of ways that Kushel Digi Solutions can help your
          business stand out. People who are interested in what you have to
          offer are more likely to find your website if it was built with SEO in
          mind. Our services will not only make your website look great, but
          they will also help it do well in search engines. This will steady the
          growth of your business.
        </p>

        <h6>Website Redesign and Upgrades</h6>
        <p>
          Let us know if your website looks old or doesn't work right now. We
          can help you fix it. We make your site work better and look better.
          This is faster, has new images, and is simple to enter. We start by
          checking out your current site to see what needs to be changed. This
          could be the style, the speed, the content, or the features. Then we
          make a new version that is easier to use, looks better, and loads
          faster.
        </p>
        <p>
          We also focus on adding new features and improving SEO as we make
          improvements. We maintain your site appearing updated by introducing
          new styles and allowing you to adjust the design.
        </p>
        <p>
          If you like, we can integrate additional tools like robots, shopping
          carts, or systems for making reservations. Changing your website may
          surprise visitors, keep them engaged, and attract more people to
          purchase from you. It's more vital to expand your Virginia company
          than to make it appear good.
        </p>
        <h6>Support and Maintenance that Lasts</h6>
        <p>
          The first step is to create a website. You should back up and check
          your sites every day to make sure they are up to date and working
          properly. This is something that Kushel Digi Solutions can help you
          with. We are always here to help you maintain your site safe, quick,
          and useful. We do more than just fix problems and back up your data.
          We also add new items. You don't have to deal with IT difficulties,
          which saves you time and stress.
        </p>
        <p>
          Our crew works promptly to address any problems that come up. We can
          also assist you in keeping the information on your website up to date
          so that it remains helpful and fresh as your company expands.
        </p>
        <p>
          We don't simply do something for you once; we work with you for the
          rest of your life. While you conduct your business, our staff will
          take care of your site. Your website grows just like you do when you
          take excellent care of it.
        </p>
        <h5>
          Why Partner with Kushel Digi Solutions for Web Design in Virginia?
        </h5>
        <p>
          It isn't always easy to find a good web design business. Your website
          is one of the first things people see about your business, so it needs
          to be good. People should be able to easily use a good website that is
          also made to help their business grow.
        </p>
        <p>
          Kushel Digi Solutions believes that web design is more than just how a
          site looks. We make websites that are true to your business, get in
          touch with the right people, and really work. We listen to what you
          want and come up with ideas that will help your people, no matter what
          size business you have.
        </p>
        <p>
          We use the most recent tools, clean code, and SEO-friendly methods to
          make sure your site is quick, safe, and ready to go. When you work
          with us, you get more than just design help. You get an online partner
          you can trust who wants you to do well.
        </p>
        <p>
          Kushel Digi Solutions is the best web design company for businesses in
          Virginia. Find out why.
        </p>
        <h6>Designs that Show Off Your Brand</h6>

        <p>
          Your site should show that your company is special. We don't use
          designs that are one size fits all at Kushel Digi Solutions. We make
          websites that tell your story and fit the style of your brand.
        </p>

        <p>
          The styles, colours, fonts, and pictures we choose for your business
          are the best. We make designs that are just right for your brand,
          whether you want something bright and up-to-date or simple and classy.
          The site was made with people in mind, so it's easy for them to get in
          touch with your business.
        </p>
        <p>
          We check the idea out in the real world, too. It should look good and
          work too. People should be able to easily find what they need on the
          site, and it should make them want to do something, like buy something
          or contact you.
        </p>
        <p>
          We can make a website for you that really shows off your brand and
          gets people in Virginia to care about it.
        </p>
        <h6>User-Friendly Designs on Every Devices</h6>
        <p>
          People explore the web on PCs, phones, and apps. Styles that look good
          on any computer can be changed by us. We at Kushel Digi Solutions
          first check that sites work well on phones. This helps make sure that
          everyone who comes to your website knows how to use it properly.
        </p>
        <p>
          We made styles that are easy to use by putting choices, buttons, and
          information in the right places. Users don't have to zoom in or deal
          with broken photos because it's all clean and simple. Also, sites
          should load rapidly since no one loves to wait for anything to take a
          long time.
        </p>
        <p>
          A design that is both flexible and mobile-friendly will not only make
          your site users happy, but it will also help your Google ranking.
          Google appreciates websites that are easy to use on mobile devices.
        </p>
        <p>
          If you choose us, your website will work well on all devices and keep
          people in Virginia interested, no matter where they are in the state.
        </p>

        <h6>Strong E-Commerce Solutions</h6>
        <p>
          You need more than simply a website to sell products on the internet.
          Kushel Digi Solutions builds ecommerce sites that are secure, simple
          to use, and meant to help you generate more sales. We make it easy for
          your pals to go shopping with you. It's straightforward to use
          everything, from the shopping carts and product pages to the methods
          to pay and keep track of your purchases. A lot of folks will enjoy how
          easy and secure it is to check out on our site.
        </p>
        <p>
          It's simple to alter items, keep track of inventory, and check how
          many have been sold on the back end. We also plan for development, so
          as your company expands, your shop will be able to manage additional
          customers and sales.
        </p>
        <p>
          Our staff makes sure that the site is easy for search engines to find
          and functions effectively on phones. This makes it easier for
          consumers in Virginia to locate your shop. We can help you set up an
          online business that looks amazing and generates money with our
          e-commerce options.
        </p>
        <h6>SEO-Friendly Web Design</h6>
        <p>
          Your website has to look attractive, but it also needs to be easy to
          locate. We design websites at Kushel Digi Solutions with SEO in mind.
          This signifies that your website is ready to be seen and ranked by
          search engines like Google. We handle all the technical details,
          including ensuring your site runs fast, works well on mobile devices,
          has clear URLs, and has the right meta tags. Our designs are made to
          make your information stand out in a way that is clear to both people
          and search engines.
        </p>

        <p>
          If you make your website SEO-friendly, it will probably rank higher
          and attract more real visitors. This will make it easier for
          individuals in Virginia to locate your company and attract more
          potential clients to your site. We'll provide you with a website that
          not only looks amazing but also helps you gain more traffic online.
          The look truly helps you get what you want for your company.
        </p>

        <h6>Support and Maintenance You Can Count On</h6>
        <p>
          You can't just finish a website; you have to keep it up to date. We at
          Kushel Digi Solutions provide ongoing support and maintenance to keep
          your site safe, secure, and up to date.
        </p>
        <p>
          We do a lot of crucial things to keep it secure, including searching
          for issues, upgrading software, and generating backups. If anything
          goes wrong with your website, our team is always there to assist you
          in fixing it. You won't have to worry about the technical issues since
          we'll handle them.
        </p>
        <p>
          As your company expands, we can also assist you in adding new tools
          and keeping your material up to date. This will keep your site up to
          date, new, and in line with your goals.
        </p>
        <p>
          When you work with us, you get more than just a website. We're one of
          the best web development company in Virginia. You make a buddy for
          life. We provide exceptional service, so your website will keep
          working smoothly and help your business perform well in Virginia for
          years to come.
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
