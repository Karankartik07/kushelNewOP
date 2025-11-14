"use client";
import React, { useEffect, useRef, useState } from "react";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { toast } from "react-toastify";
import "./detailsrapid.css";

import { useRouter } from "next/navigation";
import FormUSA from "@/app/COMMON/FormUSA";

export default function DetailWebRapid() {
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
          Grand Rapids Website Development – Creative, Fast, and SEO-Ready Sites
        </h4>
        <p>
          The website is the first thing that visitors see, and it sets your
          business's reputation. It needs to look good and work even better. We
          help Grand Rapids businesses grow, stand out, and do well online
          through Grand Rapids website development at Kushel Digi Solutions.
        </p>
        <p>
          When we make websites in Grand Rapids, we make sure they look
          attractive and operate effectively. We make sure that your site loads
          fast, looks well on all devices, and is simple to use.
        </p>
        <p>
          We build websites that are just right for you, whether you're a little
          business, a new corporation, or a well-known brand. We make sure that
          everything we produce, from clean code to simple access, works, is
          secure, and is designed to last.
        </p>
        <p>
          We are totally against pre-made templates. We first understand your
          business, target audience, and your goals, and then accordingly we
          design custom websites that best suit your business.
        </p>
        <p>
          You get more than just a website when you work with Kushel Digi
          Solutions. You also get a trusted digital partner who helps your
          business grow online.
        </p>

        <img
          src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1760515941/grand-rapids-website-development_rz4bv4.jpg"
          alt="grand rapids website development"
        />
        <h5>
          How Our Web Development in Grand Rapids Helps Your Business Grow?
        </h5>
        <p>
          Kushel Digi Solutions offers a comprehensive variety of web design
          services that assist companies in Grand Rapids flourish online. We
          build websites that are simple to use and meet your brand's objectives
          and goals since every company is different. We ensure fast,
          responsive, secure, mobile-friendly and SEO optimized websites which
          attract real customers and drive sales.
        </p>
        <p>
          What type of website do you want us to design? It might be as little
          as one page to show off what you do or as long as multiple pages to
          sell stuff.
        </p>
        <p>
          We employ the newest technologies and the finest practices to make
          sure your site appears fantastic on all devices. We need your support
          to bring in more customers so your company may expand.
        </p>
        <p>
          They not only make you a website, but they also do other things for
          you. You receive a partner that helps you with everything, including
          making plans and coming up with ideas, as well as creating and mending
          things.
        </p>

        <h5>Web Development Services We Offer in Grand Rapids are:</h5>
        <h6>Tailor-Made Website Development</h6>
        <p>
          We make websites that are just right for you. We build websites that
          fit with your company and your brand. Your page should set your
          business apart. We learn about your company, your clients, and your
          goals for a long time.
        </p>
        <p>
          Websites created by our expert team work effortlessly and help you
          reach your goals. We're here to make sure that your site looks great
          on all of your computers, phones, and apps. Everything, from the
          choices to the buttons, is meant to be simple for the holder. We also
          include galleries, email forms, and "call to action" buttons that help
          users get in contact with your site.
        </p>

        <p>
          Unique designs look excellent and make your company stand out online.
          A well-made website is more likely to get people to accept and act on
          it. At Kushel Digi Solutions, we concentrate on designs that entice
          people to come to our site and purchase things. Our unique website
          design services can help your company obtain a website that looks
          amazing and produces results.
        </p>

        <h6>E-commerce Development Solutions</h6>
        <p>
          Our Grand Rapids ecommerce site design makes it easy and fast for
          businesses to sell products online. We build online shops that are
          secure, fast, and simple to run. Your site is set up so that it's
          simple for you to sell and for visitors to purchase. It has adverts
          for products and many methods to pay.
        </p>
        <p>
          We want to develop stores that look nice and operate properly. People
          will be able to easily look about and depart. This will make them
          pleased and make them purchase more. We also make sure that your
          business operates well on all phones so that consumers can shop when
          they're out and about.
        </p>

        <p>
          Both large and small businesses may utilize our e-commerce platforms.
          You can easily rearrange stuff, keep track of sales, and add new
          content. We also provide offers, reviews, and stats to help your
          company thrive. Your online company will look wonderful with Kushel
          Digi Solutions. This will help you gain more clients and generate more
          money.
        </p>

        <h6>Mobile-Friendly & Responsive Design</h6>
        <p>
          It should be simple to change sites so they operate on all devices. We
          make sure that your site appears well on phones, laptops, and
          applications, as well as other devices. Our staff made sure that your
          site appears well on desktops, phones, and applications. The text,
          images, and buttons on the screen change form as soon as you glance at
          them. People who attend will have a fantastic time because of this.
        </p>
        <p>
          A website that is adaptable keeps customers around longer and doesn't
          let them go as quickly. Search engines will also like your site
          better, which will make it simpler for people to discover you online.
          We aim to keep things simple, make it easy to go about, and make sure
          sites load quickly. Different tools are used to test each section of
          your site to make sure it functions flawlessly.
        </p>
        <p>
          If you choose Kushel Digi Solutions to build your website, it won't be
          able to be seen or used by anybody. People can effortlessly read, get
          in touch with, and explore your site on any device. You should think
          about more than just how your website looks on phones. It should also
          help people, make things better for them, get them more active, and
          grow your email business.
        </p>
        <h6>CMS Development</h6>
        <p>
          It doesn't have to be hard to make sure the material on your website
          is good. That's why we at Kushel Digi Solutions provide CMS (Content
          Management System) creation to make things easier for you. You can
          easily run your internet company with only a few clicks. No need to
          hard code.
        </p>
        <p>
          We work with great sites like WordPress, Shopify, and Magento. If you
          need anything more, we can also provide bespoke CMS solutions for you.
          We can help you operate your website without having to learn how to
          code. A CMS website would definitely help you save time and money. Why
          not simply make those little changes yourself instead of phoning a
          developer every time? Your website is constantly up-to-date,
          versatile, and full of life.
        </p>
        <p>
          Our CMS sites are very safe, load quickly, and are simple to grow, so
          your site can grow with your company. You don't only receive a website
          when you engage Kushel Digi Solutions. You also get the tools you need
          to easily and confidently maintain your online presence.
        </p>

        <h6>Search-Optimized Web Development</h6>
        <p>
          Your website won't benefit you if no one can discover it. That's why
          we consider about SEO when we make websites. Google will like your
          site more if you write, set it up, and improve it.
        </p>
        <p>
          Clean code (HTML, CSS, JavaScript, React, and Node.js), pages that
          load fast, and information that is in the right places are some of the
          things we do to make sure Google can easily read your site. We also
          look at names, titles, and styles that use a lot of common words and
          phrases to make it easier for people to find your Grand Rapids
          business online.
        </p>
        <p>
          You want to reach the right people, not just more people who visit
          your site. Your site will be seen by the right people thanks to Kushel
          Digi Solutions.
        </p>
        <h6>Website Revamps and Modern Upgrades</h6>
        <p>
          You may want to make some modifications if your site doesn't perform
          correctly or looks outdated. We will maintain Grand Rapids companies'
          websites up to date. We make sure they look beautiful, operate well,
          and are simple to use over and over again.
        </p>
        <p>
          People glance at your previous website to see what works and what
          doesn't. It's then made to appear like it's fresh new. We change the
          pics and styles so that phones can use the site better. We make sure
          it's quick and good for SEO above all else. People who have been to
          your site before could come back. People will trust your internet
          business more because it will look more professional. This company
          will make your new website look and work better.
        </p>
        <p>
          We listen to what you say and try to figure out what you need and
          desire. Your new website will make people pleased, which will help
          your business expand. We can make your website seem better and run
          better so that it stays competitive in the online business world.
        </p>
        <h5>
          What Makes Kushel Digi Solutions the Best Choice for Web Development
          in Grand Rapids?
        </h5>
        <p>
          Picking the right company to build your website is very important for
          your business. Our major goals at Kushel Digi Solutions are to make
          cool websites and learn a lot about our clients. We only want to give
          you tech options for your business that really work. We keep things
          simple, clear, and easy from the first time we talk to the big launch.
        </p>
        <p>
          We love it when tech and art come together. It will look great, work
          well, and bring you good results. What might go wrong?
        </p>
        <p>
          The pros on our Grand Rapids team really know how to create and build
          things. What you tell us helps us plan websites that are safe, easy to
          use, and ready to grow.
        </p>
        <p>
          Why do so many Grand Rapids companies pick Kushel Digi Solutions to
          meet their web needs? Find out below:
        </p>

        <h6>Proven Experience That Delivers Results</h6>

        <p>
          For many years, we've made websites for a lot of different kinds of
          businesses. We know what works and what doesn't for brands big and
          small. We can make websites for your business that really show what it
          stands for now that we know this.
        </p>

        <p>
          There are always new styles coming out on our team, but we also make
          sure that everything is useful. Websites should be easy to use and
          look beautiful.
        </p>
        <p>
          We ponder about how things will appear and operate when we make them.
          We won't provide you boring designs when you deal with us. It's made
          so that each page fits your needs.
        </p>
        <p>
          Grand Rapids businesses trust us because we are both artistic and
          professional.
        </p>
        <h6>High-Quality Websites at Affordable Prices</h6>
        <p>
          Grand Rapids law says that every business needs to make a budget. Our
          web design company in Grand Rapids can do great work for you without
          charging a lot of money. Sites like yours that are cool, useful, and
          cheap are what we do.
        </p>
        <p>
          You can flip around some of our great things. We can help you plan
          your website, online shop, or any other project you wish to work on.
          There are no hidden expenses since the data are transparent.
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

        <h6>Fast, Mobile-Friendly Websites That Work Everywhere</h6>
        <p>
          Most people visit websites these days on their phones or computers. We
          make sure that your site works well for people with screens of all
          sizes. We need to be able to use it easily too. It's simple to pick
          one, and the pages load quickly.
        </p>
        <p>
          People are not going to waste time trying to find something. They will
          rather use a website that works well and makes sense. We also think
          about speed.
        </p>
        <p>
          When websites take too long to load, people leave them. We use good
          code and the best features to make websites that work. This makes
          sites load quickly, which is good for both people and search engines.
          We'll always be ahead of your business in Grand Rapids.
        </p>
        <h6>SEO-Optimized Websites for Maximum Visibility</h6>
        <p>
          No matter how awesome your website looks if no one can find it. So,
          when we make things, we think about SEO. From the start, we make sure
          that our sites are search engine friendly. The code should be clean,
          the page should load quickly, names should be used correctly, and the
          style should be full of keywords.
        </p>

        <p>
          We made the pictures better and added safe links (HTTPS) so search
          engines will like it too. Styles that look good on phones were also
          made. This is how a lot of people in Grand Rapids will be able to find
          your business online.
        </p>
        <p>
          Several things, like making sure the content is easy to read and good
          for keywords, might help you gain attention. It will be a long time
          before the sites we build stop working. They will keep people coming
          back and bring in new ones.
        </p>

        <h6>Fresh, Creative, and Unique Web Designs</h6>
        <p>
          People rate your business by its webpage these days. We make sure that
          the styles we give you are unique and up-to-date. We know how to put
          together clean, business-like styles with pictures that stand out and
          make an impact that lasts.
        </p>
        <p>
          We don't stick to dull colors or subjects. We make every page unique
          so that it fits your brand. You carefully picked out everything on
          your website to make it feel new and different. The colors, styles,
          and pictures are all part of this.
        </p>
        <p>
          Plan is more than just style these days. It's also about how it works.
          We don't follow any old web rules with the styles we use. They also
          work well on phones. Your site looks and operates excellent.
        </p>
        <p>
          People are more inclined to purchase anything, stay longer, and
          explore around more if they enjoy your site. Your website will be
          up-to-date, one-of-a-kind, and easy to remember if you employ Kushel
          Digi Solutions.
        </p>
        <p>
          When you work with our team, Grand Rapids website development is
          simple and won't stress you out. We'll make a website for your
          business that works well and looks great. Tell us what you need to do.
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
