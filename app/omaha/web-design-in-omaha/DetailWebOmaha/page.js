"use client";
import React, { useEffect, useRef, useState } from "react";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { toast } from "react-toastify";
import "./detailsomaha.css";

import { useRouter } from "next/navigation";
import FormUSA from "@/app/COMMON/FormUSA";

export default function DetailWebOmaha() {
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
        <h4>Web Design in Omaha – Custom, SEO-Friendly & Mobile-Ready Sites</h4>
        <p>
          The website is the digital face of your business. It's where people
          choose whether to work with you or not. So it's important to have good
          web design in Omaha. We help small businesses in your area make
          websites that do more than just look good; they're also very useful.
        </p>
        <p>
          The websites we make load quickly, look great on phones, and are easy
          for anyone to use. We maintain everything neat and tidy so that your
          visitors can quickly locate what they need. Do you own a small
          company, a shop in your region, or a name that is gaining bigger? We
          are going to make a website that works great for you.
        </p>
        <p>
          We also care about style that is good for SEO, which means that Google
          will be able to find your site. Everything is taken care of, from
          clean plans to great pictures and easy use.
        </p>
        <p>
          Kushel Digi Solutions does a lot more than just make websites. We also
          help your company grow, get more trust, and be seen.
        </p>
        <p>
          Let's make a website for you and your Omaha business that really shows
          who you are and what you do.
        </p>
        <img
          src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1761733560/Web_Design_in_Omaha_w02fve.png"
          alt="web design in omaha"
        />
        <h5>
          What Web Design Services Does Kushel Digi Solutions Offer in Omaha?
        </h5>
        <p>
          Each company has unique internet needs. We offer full web design in
          Omaha at Kushel Digi Solutions to help your business stand out online.
          We design clean, simple, and ready for SEO websites. No matter what
          you want, a new website or to update the old one. They look great.
        </p>
        <p>
          People will visit your site more often if it looks new, loads quickly,
          and is simple to read. Your sole task is to operate your company.
          Everything will be taken care of by us, from making and creating to
          SEO and maintenance.
        </p>
        <p>
          Our group doesn't have a template that works for everyone already
          made. We find out about your company and design a website that matches
          your style. We make sure that your website works well and looks good.
          We use unique plans and styles that are good for SEO to do this. Have
          a look at what we have to offer:
        </p>

        <h5>Our Web Design in Omaha Services Include:</h5>

        <h6>Custom Website Design</h6>
        <p>
          We don't have a plan that works for everyone. Your page should have a
          lovely story about your business. We build websites from the ground up
          with your goals, your business, and the people in your market in mind.
        </p>
        <p>
          People can easily move around on your pages because the styles we make
          look great. Whether you want something easy or bright and bold, we can
          make it. If you use one of our styles, your site will look great on
          computers, phones, and apps. A website must work well in addition to
          looking good. We make sure people who visit your site have fun, which
          helps you make sales from clicks.
        </p>
        <p>
          People should be able to stop and look around your business because of
          its style. Yes, that's exactly what our web design in Omaha services
          do.
        </p>
        <h6>Website Development</h6>
        <p>
          Building a solid website is just as vital as creating one. We use the
          latest computer languages, such HTML, CSS, JavaScript, and Node.js, to
          build websites that are clean, quick, and secure at Kushel Digi
          Solutions.
        </p>
        <p>
          We make sure that every part of your site functions flawlessly and
          doesn't freeze or take too long when we construct it. We can make any
          sort of website, from a tiny company site to a massive platform.
        </p>
        <p>
          Before the event starts, we check every area of it to make sure your
          visitors have a good time. We also leave your site open so that you
          may easily make adjustments again. An excellent website is made to
          last. The folks who work on your site ensure it works properly, loads
          fast, and remains useful as your company expands.
        </p>
        <h6>E-Commerce Website Design</h6>
        <p>
          Do you want to sell your stuff online? We as a reliable web design
          Omaha can offer you with bespoke ecommerce site design, which makes it
          simple. We can help you establish an online shop that is secure and
          easy to use, no matter how large or little your company is.
        </p>
        <p>
          We develop styles that look nice on phones, product pages that are
          easy to read, and methods to purchase items that are simple. If the
          sites don't take too long to load or become stuck, people will like
          shopping with you.
        </p>
        <p>
          We can add secure methods to pay, tools for managing items, and tools
          for marketing to help you keep track of everything. We also construct
          your shop so that you may obtain more customers and earn more sales.
          You receive more than that from Kushel Digi Solutions. They provide
          you with an online shop every day to help your company develop.
        </p>
        <h6>SEO and Performance Optimization</h6>
        <p>
          An awesome website is also of no use if no one is visiting there. To
          overcome this issue we constantly think about SEO when we develop a
          site. We provide your site cwith lean code and the right keyword
          information so that Google will enjoy it.
        </p>
        <p>
          We check that your site loads fast, has the proper meta tags, and that
          the content is set up in a manner that search engines can easily read.
          We obtain better outcomes when we use HTML, CSS, and JavaScript to
          code things the right way.
        </p>
        <p>
          We also care about how people feel about your site since Google will
          show it to more people if they enjoy it. Kushel Digi Solutions can
          make your site seem better than it did before. What smart web design
          in Omaha can do for you.
        </p>

        <h6>Website Maintenance and Support</h6>
        <p>
          After your website goes live, you should still check it often. It
          stays safe and works well with backups, changes, and security checks.
          We offer full upkeep services that will keep your website up and
          running. Our crew analyzes the performance of the site, removes
          errors, and adds or updates applications and software as needed.
        </p>
        <p>
          As your business grows and you need more tools, we'll give them to
          you. This manner, users who go to your website will constantly
          discover something fresh and valuable. We also check the performance
          of your site to make sure it loads swiftly and doesn't have any
          difficulties. You don't have to worry about customers or being stopped
          since things are rectified fast if they go wrong.
        </p>
        <p>
          Just text us or call us, and we will be there to help you with
          anything you want. Dont worry about the technical stuff also, as we
          handle them also. This continuing service makes sure that your firm
          may remain online without any hassles. When you deal with us, you can
          rest since you know your website is safe.
        </p>
        <h6>Responsive and Mobile-Friendly Design</h6>
        <p>
          Most individuals who surf websites these days do it on their phones.
          That's why we ensure fast loading websites. We carefully check each
          design on computers, tablets, and phones to make sure it works right.
          People can look at, read, and purchase from wherever on your site if
          it has a flexible design.
        </p>
        <p>
          Google also likes sites that are easy to use on phones. This helps
          more people find your business. We want to make sure that none of our
          visitors have any difficulties and that they all have a pleasant time.
        </p>
        <p>
          Your site should also work well on phones for SEO reasons. When people
          look for something, Google gives sites that work well on phones more
          weight. This means that more people will see your business in Omaha.
          Our process takes into account the best ways for both people and
          search engines to make your site stand out. You won't have to worry
          about old styles that make people mad when you use our services. In a
          world where phones are the main thing people use, your site will
          always be up-to-date and ready for that.
        </p>
        <h5>Why Partner with Kushel Digi Solutions for Web Design in Omaha?</h5>
        <p>
          Finding the right web design partner can really make a difference. We
          believe that your website should do more than just look good; it
          should also help your business grow. Our Omaha team makes websites
          that are true to your business, get people to visit, and work.
        </p>
        <p>
          We don't skimp or use models that have already been made. We make
          one-of-a-kind websites that work well and are put together with care.
        </p>
        <p>
          It doesn't matter what kind of business it is—small and large, new and
          old. We make them all shine online.
        </p>
        <p>
          Our only goal is to make websites that bring people together, get them
          to buy, and matter for a long time. Omahans know they can depend on us
          for all of their website design needs.
        </p>

        <h6>Unique and Creative Designs</h6>

        <p>
          It's good that you and your business are special. When we build a
          website for you, we start from scratch to make sure it fits your
          brand, style, and goals.
        </p>

        <p>
          We first start to understand business, your target audience, and your
          POV. After that, we design a plan that is both simple to follow and
          looks nice. There are no ready-made models here; just find a style
          that works for you.
        </p>
        <p>
          Our unique strategy helps customers locate your company online and
          trust it. People will realise straight away that your site is a
          company and that it aligns with your brand when they come. That's what
          makes Omaha's site design so excellent.
        </p>

        <h6>Clean Code and Quick Performance</h6>
        <p>
          We don't only make websites seem nice; we also put a lot of thought
          into how they work. We employ the latest technologies, such HTML, CSS,
          JavaScript, and Node.js, to make your site secure, quick, and clean.
        </p>
        <p>
          We test everything, keep sites small, and write as little code as
          possible so they load quickly.
        </p>
        <p>
          We also make your site SEO-friendly, which means that Google and other
          search engines can read what you put on it without any trouble. Clean
          code works better on all devices and is easy to read.
        </p>
        <p>
          Not only will we make sure that your website looks great, but it will
          also work well and make your people happy. That's how I do things at
          Kushel Digi.
        </p>

        <h6>Local Know-How</h6>
        <p>
          People who work for Kushel Digi Solutions are from Buffalo and really
          understand your market. You don't just get a web designer when you
          work with them. Every business has problems and chances to grow that
          we need to figure out if we want to stand out in a crowded market.
          What we've learnt helps us make websites that really connect with the
          people who visit them.
        </p>
        <p>
          We don't treat every client like a number like those big web design
          companies do; we learn about your business. We talk to you first to
          find out what your goals are. Then we create a website for your
          company that truly stands out. Making your site stand out makes it
          feel more like home and helps you meet people in your area.
        </p>
        <p>
          We'll always be there for you. We can assist you right now.You can
          obtain aid immediately soon, not in a few days. You get more than a
          service when you work with Kushel Digi Solutions. In Buffalo, you make
          a friend who wants to help you do well.
        </p>
        <h6>Dedicated Team and Transparent Process</h6>
        <p>
          At Kushel Digi Solutions, we value open communication and teamwork.
          Everything we do will be claer and transparent. We dont hide things.
          Our expert team is here to help you with theme suggestions and many
          more to help you create your dream business.
        </p>

        <p>
          We always tell you when and how things will be done. We also never
          keep rates a secret. We do things that way because people trust us
          when we are honest and forthright. We regard a task as more than
          simply performing it; it's an opportunity to work together. Your
          website should make you feel good about yourself and get you enthused
          about it.
        </p>
        <p>
          When you hire us as a web design in Omaha, you're not just getting a
          web design business; you're getting a group of individuals who want
          you to do well.
        </p>

        <h6>Reliable Support and Long-Term Care</h6>
        <p>
          After putting up your website, you can't just leave it alone. Over
          time, it needs to be fixed, updated, and looked for security holes. We
          do more than just make you a website at Kushel Digi Solutions. We work
          with you for a long time.
        </p>
        <p>
          For a nominal price, we can evaluate your speed, provide regular
          maintenance, backups, and security updates. We'll offer additional
          tools as your firm develops and you need them. If anything goes wrong,
          our crew is ready to solve it straight immediately
        </p>
        <p>
          We make changes to your page too. Tech and trends change quickly, but
          your site will always be up to date as long as we work on it. If you
          do this, your Omaha company will never fall behind.
        </p>
        <p>
          There's more that Kushel Digi Solutions does than just making
          websites. They become a long-term friend you can count on. With our
          professional web design in Omaha, let's make something that will last.
        </p>
        <p>
          Are you ready for the web design in Omaha to help your business grow?
          We'll make you a website that works if you call Kushel Digi Solutions
          right away.
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
