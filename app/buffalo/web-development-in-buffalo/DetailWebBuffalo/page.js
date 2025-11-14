"use client";
import React, { useEffect, useRef, useState } from "react";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { toast } from "react-toastify";
import "./details.css";

import { useRouter } from "next/navigation";
import FormUSA from "@/app/COMMON/FormUSA";

export default function DetailWebBuffalo() {
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
        <h4>
          Web Development in Buffalo– Powerful, Responsive, and Affordable
        </h4>
        <p>
          Are you looking for a reliable web development in Buffalo? We at
          Kushel Digi Solutions help businesses grow and do well online. You
          can't get away from having a good public picture these days. Sites
          that look good, run fast, and are easy for users to navigate are
          created by our team. Do not worry if you are a small company, a
          neighborhood group, or a big corporation.
        </p>
        <p>
          When we build websites in Buffalo, we use both our creative ideas and
          our technical know-how. When we make websites, our major goal is to
          get more users, leads, or sales.
        </p>
        <p>
          The experts at Kushel Digi Solutions can make your website stand out
          by incorporating unique features and styles that adapt to fit any
          device.
        </p>
        <p>
          We plan, create, build, and manage with you every step of the way
          because we care about quality, getting things done on time, and making
          sure our clients are happy.
        </p>
        <p>
          Don't look any further than Kushel Digi Solutions if you need a
          website made in Buffalo that you can trust, is unique, and is useful.
        </p>
        <img
          src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1758873028/Web-Development-in-Buffalo_idlyrx.png"
          alt="web development in buffalo"
        />

        <h5>What Makes Our Web Development Services in Buffalo Stand Out?</h5>
        <p>
          Kushel Digi Solutions offers many web design services in Buffalo to
          help businesses grow online. As each business is unique, that's why we
          create easy-to-fit websites that match your brand's wants and goals..
          Our expert team designs fast, secure, mobile-responsive, and SEO
          friendly websites that ensure seamless operations.
        </p>
        <p>
          What kind of site do you want to make? It can be as small as one page
          to show off your services or as big as one where you can sell things
          online. We use the most up-to-date tools and best practices to make
          sure your site looks great on all devices. Your job is to help us get
          more people to your business so it can grow.
        </p>
        <p>
          When you hire Kushel Digi Solutions, you get more than just a website.
          You get a partner who helps you with everything, from making plans and
          designs to building and fixing things up.
        </p>

        <h5>Our Web Development Services in Buffalo Include:</h5>
        <h6>Custom Website Design</h6>
        <p>
          As part of our custom website design services, we make websites that
          fit your brand and the way you do business. Your site should show that
          your business is special. We spend our quality time understanding your
          business, your audience, and your goals, which you want to achieve.
        </p>
        <p>
          This helps us make sure that the website we make for you works well
          and helps you reach your goals. On all computers, phones, and tablets,
          we make sure that your site looks good. Everything is designed to make
          things easy for the user, from the choices to the buttons. We also add
          email forms, galleries, and "call to action" buttons that let people
          get in touch with your site.
        </p>

        <p>
          Not only do one-of-a-kind designs look great, but they also help your
          business stand out online. A well-designed website is more likely to
          get people to believe and act on it. At Kushel Digi Solutions, we
          focus on creating designs that attract visitors and convert them into
          customers. When you use our unique website design services, your
          business will have a professional website that gets results.
        </p>

        <h6> E-Commerce Website Development</h6>
        <p>
          Our e-commerce web creation in Buffalo makes it easy and quick for
          businesses to sell things online. We make web shops that are safe,
          quick, and simple to run. Everything on your site, from the product
          ads to the payment methods, is made to make it easy for you to sell
          and for your customers to shop.
        </p>
        <p>
          Our main goal is to make shops that look good and work well. It will
          be easy for your buyers to look around and check out. This helps bring
          in more sales and make customers happier. We also make sure that your
          store works perfectly on all phones, so people can easily shop on the
          go.
        </p>

        <p>
          Both small and large businesses may utilize our e-commerce platforms.
          It's simple to keep track of sales, move things around, and update the
          content. We also provide things like promotions, reviews, and
          statistics to help your company thrive. Your online business will look
          amazing with Kushel Digi Solutions, which will help you generate more
          money and gain more consumers.
        </p>

        <h6>Responsive Web Design</h6>
        <p>
          A lot of different devices are used to view the web, so it's important
          for sites to be easy to change to work on all of them. Our team made
          sure that your site looks great on computers, phones, and apps. Our
          team made your site appear excellent on desktops, phones, and apps.
          Based on the screen, text, pictures, and buttons change shapes right
          away. People who come will have a good time because of this.
        </p>
        <p>
          People stay on a flexible website longer and don't leave as quickly.
          Also, search engines will appreciate your site more, which will make
          it easier for consumers to locate your company online. We aim to keep
          our designs basic, make it easy to navigate, and make sure that pages
          load quickly. Different gadgets are used to test every part of your
          site to make sure it works perfectly.
        </p>
        <p>
          Nobody will be able to see or use your website if you get web design
          from Kushel Digi Solutions. Your site is easy for everyone to read,
          get in touch with, and look around on any device. You should think
          about more than just how your mobile website looks. It should also
          improve the user experience, get them more involved, and help your
          online business grow.
        </p>
        <h6>Website Maintenance & Support</h6>
        <p>
          When we help websites, we make sure they are safe and work well. Sites
          should be backed up and checked every day to stay up to date and work
          well. We'll take care of everything while you run your business.
        </p>
        <p>
          We will fix your site right away if it has any design errors, coding
          issues, or anything else. You need a fast, secure, and responsive
          website. If you want to show your website more in search engine
          results and want to drive more traffic, then your website must be
          up-to-date, fresh, and SEO-friendly. It's important to keep things up
          to date since even little flaws may hurt SEO and make things less fun
          for customers.
        </p>
        <p>
          You can always rely on Kushel Digi Solutions to help you. Our staff is
          available to assist you with tech issues, adding new features, or
          changing this page. You can be sure that our website maintenance will
          keep it in good shape. That your clients will be pleased and that your
          company will run without any tech issues is a given.
        </p>
        <h6>SEO-Friendly Web Development</h6>
        <p>
          People need to be able to find your website in order for it to be
          useful. Our web building in Buffalo is SEO-friendly, so your site will
          do well in search engines. The best way to help Google and other
          search engines understand your content is what we do.
        </p>
        <p>
          This includes having the right layout, SEO optimized, site should open
          quickly, being mobile-friendly, and having simple and clean code.
          Websites that are optimized get more users, get more leads, and make
          more sales. We can also help with things like meta tags, headers, and
          text layout that are on the page itself. This makes your page more
          visible and faster online.
        </p>
        <p>
          We use both web creation and SEO tactics at Kushel Digi Solutions to
          help your business stand out. A website that was made with SEO in mind
          is more likely to show up in search results and reach the people you
          want to reach. Not only will our services make your website look
          great, but they will also help it do well in search engines, which
          will help your business grow steadily.
        </p>
        <h6>Website Redesign & Upgrades</h6>
        <p>
          We can help you update and makeover your website if it looks old or
          doesn't work right now. We make your site look better and work better
          at the same time. This has better speed, new graphics, and easy entry.
        </p>
        <p>
          To make your website ideal for search engines, we make some important
          changes like adding new features, removing old themes, plugins, and
          all unnecessary items, making it mobile responsive and SEO friendly to
          boost search engine rankings. People are more likely to stay excited
          because of these changes, which brings in more people and boost sales.
          Small changes can help the business and the people a lot.
        </p>
        <p>
          We listen to what you have to say and try our best to figure out what
          you need and want. Your new website will keep people excited, which
          will help your business grow. We can make changes to your website that
          will make it look better, work better, and help your business stay
          competitive online.
        </p>
        <h5>
          Why Should You Partner With Us for Web Development Service in Buffalo?
        </h5>
        <p>
          Picking the right company to build your website can make all the
          difference for your business. Making cool websites and getting to know
          our customers well are what Kushel Digi Solutions is all about.
        </p>
        <p>
          We're all about giving your business tech options that really work. We
          keep things simple, clear, and easy-going from the first time we talk
          to the big launch. We love it when tech and art work together. There
          will be no problems with your website; it will look great, work well,
          and get you good results.
        </p>
        <p>
          Pros who really understand design and development make up our Buffalo
          team. What you say helps us make plans that help us make websites that
          are safe, easy to use, and ready to grow.
        </p>
        <p>
          Click here to see why so many companies in Buffalo pick Kushel Digi
          Solutions for their web creation needs:
        </p>
        <h6>We Hear Your Vision</h6>

        <p>
          Your website is the best place to tell people about the great story of
          your business. We're here to help you find ideas that work for you.
          First, we pay close attention and are present
        </p>

        <p>
          We work hard to know what you want, how you want your business to
          feel, and who you want to reach. We'll make a digital plan that fits
          your goal perfectly once we have all the information we need. We let
          you know what's going on at all times.
        </p>
        <p>
          We can't wait to hear what you think about everything, from the design
          plans to the last little details! The page is just what you were
          looking for! Making a site isn't enough; you need to make a place that
          really shows off your business.
        </p>
        <p>
          In the end, your website is more than just a space online; it's like
          having your own voice heard. When we listen first, we make sure it's a
          voice that your buyers can connect with and trust.
        </p>
        <h6>Local Expertise</h6>
        <p>
          When you work with Kushel Digi Solutions, you don't just get a web
          creator; you work with a group of people from Buffalo who really
          understand your market. There are problems and opportunities to grow
          in each business that we have to figure out to stand unique in the
          crowded market. We use what we've learned to make websites that really
          speak to your visitors.
        </p>
        <p>
          We're not like those big web design firms that treat each client like
          a number; we take the time to learn about your business. First, we
          talk to you to learn about your goals. Then we build a website that
          really shows off your brand. Putting your own stamp on your site makes
          it feel more like home and helps you connect with people in your area
          better.
        </p>
        <p>
          We'll be here for you the whole time. Want to know more or not sure?
          We can help you right away.You don't have to wait days to get help.
        </p>
        <p>
          When you work with Kushel Digi Solutions, you get more than just a
          service. You get a friend in Buffalo who wants to help you achieve.
        </p>

        <h6>Technology that Actually Helps You</h6>
        <p>
          Every cool website has some really cool tech behind it. We make sure
          your site works well and runs quickly. No one likes websites that are
          too slow or hard to use, so we pick platforms that are safe and
          reliable and keep everything quick and safe.
        </p>
        <p>
          We pick tech that works for you, whether it's content management tools
          or people who know how to code. It will only take a few clicks to
          change the text or photos yourself. We want technology to be useful
          for you, not harmful.
        </p>
        <p>
          For your site to look good and work well, you need to have the right
          tools. That leads to less trouble, happy people, and a good mood
          online that lasts for a long time.
        </p>
        <h6>Full Support and Maintenance</h6>
        <p>
          There is a lot more to do after creating a website. It needs regular
          maintenance like software updates, bug fixing, and many more. That's
          why we are here to help you out with everything you want to keep your
          website healthy. Need any fixing? Add new features, or make some more
          changes? We are just one text or call away. Whenever you want, we are
          here to help you out with anything you are looking for.
        </p>

        <p>
          We're still friends after the job is over. We're your internet friend
          who is always here to help. As your business grows, this keeps your
          website safe, up to date, and in good shape. We are always here to
          help you with computer issues, so think of us as your friends. You can
          relax and work on your business while we make your website look great
          when you hire us.
        </p>

        <h6>Quality Websites That Fit Your Budget</h6>
        <p>
          Buffalo businesses need to make budgets all the time. When you work
          with our Buffalo web design company, you can get great services that
          won't break the bank. We're all about making cool, useful, and
          affordable websites for you.
        </p>
        <p>
          We have some cool packages that you can change around. Let us make a
          plan just for your small business website, online store, or any other
          project you have in mind. There are no secret costs; the prices are
          clear.
        </p>
        <p>
          Our prices are always low, but the work we do is always top-notch. It
          will be safe, work well on phones, and be set up to get you results.
          Every business, not just the big names, should be able to get good web
          development, we say.
        </p>
        <p>
          You can get great prices and cool websites that help you level up at
          Kushel Digi Solutions. It's smart, easy to understand, and designed to
          help you do well.Do you want to make a website that doesn't break the
          bank and gets results? Get in touch with us right away, and let's
          begin web development in Buffalo!
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
