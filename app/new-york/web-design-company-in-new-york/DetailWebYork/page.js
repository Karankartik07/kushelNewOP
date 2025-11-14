"use client";
import React, { useEffect, useRef, useState } from "react";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { toast } from "react-toastify";
import "./detailsYork.css";

import { useRouter } from "next/navigation";
import FormUSA from "@/app/COMMON/FormUSA";

export default function DetailWebYork() {
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
          Web Design Company in New York – Professional, User-Friendly, and
          SEO-Ready Sites
        </h4>
        <p>
          Looking for a reliable web design company in New York you can trust?
          People see your business through your website, not just a page on the
          web. People will notice and believe a style that is good, and they
          will buy something. That's why it's important to discover the top New
          York web design company.
        </p>
        <p>
          We at Kushel Digi Solutions try to make websites that are both nice to
          look at and simple to use. Websites should help you, not hurt you, is
          what we believe. We make any kind of website you need.
        </p>
        <p>
          Our main goal is to make websites that get things done. That means
          your site needs to look nice, be easy to get to, and have the right
          tools to connect with your buyers.
        </p>
        <p>
          Do you need something special? We'll look after you. Would you like
          people to be able to find your site? We think about SEO when we build.
        </p>
        <p>
          We at Kushel Digi Solutions believe that making websites should be
          simple and not give you any trouble. We build a website that works for
          you based on what you tell us. If you need a web design service in New
          York that gets things done, Kushel Digi Solutions is the place to go.
        </p>
        <img
          src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1759141124/Web-Design-Company-in-New-York_j6rcjr.png"
          alt="web design company in new york"
        />
        <h5>Custom Web Development Solutions for Your New York Business</h5>
        <p>
          Having a strong online presence these days is a must, and getting a
          perfect website that reflects your goals and your products is getting
          tougher day by day. With Kushel Digi Solutions, you can craft a
          website that is created just for you: unique and beautiful. Our
          websites are quick, responsive, stylish, safe, good for SEO, and work
          well on any device.
        </p>
        <p>
          It doesn't matter whether you need a new website, changes to an old
          one, or features that are just available to your business. We can
          assist you. We care that the designs are safe, simple to use, and look
          nice on all tools. We make sure that our sites load quickly and are
          simple for users to use when we build them.
        </p>
        <p>
          Your website should do more for your business than just "look good."
          Our team can help with SEO, coming up with unique tools, and
          e-commerce. A lot of New York brands, from new ones just starting out
          to well-known ones, have shone online with our assistance.
        </p>

        <h5>Our Website Development Services in New York Include:</h5>
        <h6>Creating a Custom Website</h6>
        <p>
          The needs of each business for web creation are also unique. We make
          websites in New York that are one-of-a-kind and perfect for your
          business because of. Our team doesn't use themes that have already
          been made. Instead, they make a site that is unique to your business,
          your needs, and what your customers want.
        </p>
        <p>
          We look into what makes your business special and what your customers
          want. It's important to us that the website we make works well for
          everyone and fits your business.
        </p>

        <p>
          We have a clear goal in mind for everything we do, from ideas to
          features. We make websites that can change as your business does. Any
          changes you make to your site will work, whether you add new forms,
          change the text, or do something else.
        </p>

        <h6> Responsive website Designs</h6>
        <p>
          Most people who visit websites these days do so on their phones,
          tablets, or computers. So, websites that work well on mobile devices
          are not just a trend; they're necessary. We make websites at Kushel
          Digi Solutions that look great on all screen sizes by making them
          mobile-responsive.
        </p>
        <p>
          A flexible site may adapt to match multiple screen sizes. The text
          stays clear, the pictures look good, and the buttons are simple to
          press. This makes things easy for your guests and keeps them coming
          back. Search engines like Google will also like your site more if it
          has a responsive design. This means that more people can find your
          business online if your website works well on mobile devices.
        </p>

        <p>
          We make sure that your website works perfectly on all devices by
          testing it on them. A clean and useful design will make your guests
          happy no matter where they are looking. You won't lose people because
          your site is hard to use if you use our flexible web design service.
          Everyone, on any device, will always be able to access your site.
        </p>

        <h6>E-Commerce Web Design</h6>
        <p>
          Online shopping is growing quickly, and your company needs the right
          website to keep up. Our New York e-commerce web design service can
          help you make an online store that is simple to run and fun for
          customers to shop at. We make web shops that are safe, quick, and easy
          for people to use.
        </p>
        <p>
          Everything is set up so that shopping is easy, from product pages to
          ways to pay. People don't have to stress out when they look around,
          add things to their cart, and check out. Our e-commerce sites are
          customized to match your goods and business. We can add things like
          discount codes, product searches, and reviews. You'll also have tools
          to keep track of sales, handle your goods, and make changes to your
          store whenever you need to.
        </p>
        <p>
          Because mobile shopping is so popular, we make sure that your store
          works great on all phones and tablets. They also work well with SEO,
          which means that more people can find your goods online. Our
          e-commerce web design can help you make more sales and give your
          customers a great time shopping.
        </p>
        <h6>Website Redesign & Upgrades</h6>
        <p>
          Our website redesign and upgrade service is great for you if your site
          doesn't work well or looks old. We update the look of your page and
          make it work better. As part of a redesign service, you get new
          styles, improved graphics, and easier access. Also, we make sure that
          your site works well on phones, loads quickly, and is safe. These
          changes make things easier for users and keep people interested.
        </p>
        <p>
          When you upgrade, you can get new tools like the ability to book
          events, chat help, or interactive shows. We make your site work better
          so it can meet the needs of your business right now. A website that
          looks old can turn people away, but a website that has been updated
          can build trust and show that your brand is professional. We pay
          attention to how your site looks and how well it works so that it's
          ready for the market today.
        </p>
        <p>
          You can always rely on Kushel Digi Solutions to help you. Our staff is
          available to assist you with tech issues, adding new features, or
          changing this page. You can be sure that our website maintenance will
          keep it in good shape. That your clients will be pleased and that your
          company will run without any tech issues is a given.
        </p>
        <p>
          Not only will our redesign and upgrade services make your website look
          better, they will also get real results. It's a smart way to make sure
          your online profile stays strong.
        </p>
        <h6>SEO-Friendly Web Design</h6>
        <p>
          People can only use sites if they can be found. That's why, as part of
          our New York services, we make sure your site is SEO-friendly. We
          build websites with the right style, clean code, and SEO-friendly
          structure. Our team works with HTML, CSS, JavaScript, React, Node.js,
          and PHP to make your site fast, secure, and user-friendly.
        </p>
        <p>
          We make sure that your site is simple to use, quick, and good on
          phones. Fast and mobile responsive websites are very important for
          both visitors and for search engines to get ranked higher on search
          results. We also optimize meta titles, meta descriptions, and make
          good-quality pictures with fewer pixels. A style that is good for SEO
          helps more people find your business online. Your site does more than
          just look good; it becomes a strong way to get people to visit and buy
          from you.
        </p>
        <p>
          We build your website with SEO in mind from the start, so it will work
          well for a long time. Our SEO-friendly web design will not only make
          your site look more professional, but it will also bring you more
          visitors and increase your sales rate.
        </p>
        <h6>Help and maintenance for websites</h6>
        <p>
          A website needs regular maintenance and fixing to work properly and be
          secure. That's why we assist New York firms with their website
          maintenance and make sure they work well.
        </p>
        <p>
          You don't have to worry about saving changes, backing them up, or
          checking for security. We resolve any problems quickly so that your
          site remains up and performs effectively.If you keep up with regular
          maintenance, your website will remain quick and simple to use. We add
          new content, maintain features up to date, and address issues as they
          come up as part of our support services. This keeps your site current
          and helpful.
        </p>
        <p>
          If you choose our upkeep and support service, we'll take care of the
          technical side while you run your business. You don't have to worry
          about your website not operating. It will keep working. You can always
          trust Kushel Digi Solutions to keep your website secure, current, and
          ready to expand.
        </p>
        <h5>
          What Makes Kushel Digi Solutions Stand Out as a Web Design Agency in
          New York?
        </h5>
        <p>
          Sometimes, it's very tough to pick the right website design service in
          New York. The company you hire should understand how important your
          website is to your business. At Kushel Digi Solutions, we don't just
          make pretty websites; we also make websites that are useful, easy to
          use, and built to grow with your business.
        </p>
        <p>
          Our custom websites look great, are simple to use, and get you
          results. The construction of websites is not the only thing we do; we
          also make certain that they load quickly, are safe, and are optimized
          for search engines.
        </p>
        <p>
          Irrespective of whether you want a brand-new website or just wish to
          modify the appearance of the one you currently own, our staff will
          ensure that it is an excellent representation of your business on the
          internet.
        </p>
        <p>
          We are going to locate an intelligent partner who is trustworthy and
          who is interested in your success. Because of this, it is possible
          that it would be beneficial for your company to use our web
          development services.
        </p>
        <h6>We pay attention to your business goals</h6>

        <p>
          We don't just make websites at Kushel Digi Solutions; we make websites
          that help your business reach its goals. Each business is unique, and
          so is each website we make. First, we'll listen to you. What do you
          want your website to do? More sales? More leads? Better recognition of
          the brand? We'll make a plan that fits your goals once we know them.
        </p>

        <p>
          They're not just about how they look. They have to do with success. We
          look at what you sell, who buys it, and what your online goals are.
          After that, we make a website that makes those ideas come to life. You
          carefully chose the style and parts of your site so that it will stand
          out and do what you want it to do.
        </p>
        <p>
          A nearby restaurant might need an online menu and buying system that
          is simple to use. What about an online store? They might need a safe
          way to check out and look for items.
        </p>
        <p>
          Everything is made to fit your needs. When you work with us, you get
          more than that. A tech tool we make for you helps you do well.
        </p>
        <h6>Fair Pricing with No Hidden Costs</h6>
        <p>
          Building a page doesn't cost a lot of money. We believe that fair
          prices are important for good web building services. That means there
          aren't any costs or shocks. Prices should be clear and fair for what
          you get.
        </p>
        <p>
          There are different deals for each business, so we can make our deals
          fit your needs. No matter what they need, we can make a solution that
          works for all company sizes.
        </p>
        <p>
          Because we're honest, we're different. We make it clear what you get
          and what you pay for. Right away, you'll know for sure how much it
          costs and how long it takes.
        </p>
        <p>
          We want to finish what we began today more than anything else. Our
          prices are low, and the work is good, so any kind of business can hire
          us to make a company website. You know you'll get a good deal when you
          buy something from us.
        </p>

        <h6>Responsive and User-Friendly Websites</h6>
        <p>
          Most people who visit websites these days do so on their phones,
          tablets, or computers. So, websites that work well on mobile devices
          are not just a trend; they're necessary. We make websites at Kushel
          Digi Solutions that look great on all screen sizes by making them
          mobile-responsive.
        </p>
        <p>
          We also care about how easy it is to use. The choices are simple, and
          the pages load quickly. People aren't going to waste time trying to
          find something. Instead, they'll enjoy a website that works well and
          makes sense.
        </p>
        <p>
          Users who are pleased with your site will stay longer and be more
          likely to do something, like fill out a form, call you, or buy
          something. We'll make sure that people are interested in and keep
          coming back to your website.
        </p>
        <h6>SEO-Friendly Approach</h6>
        <p>
          Sites are only useful if people can find them. That's why we make sure
          that all of our web design projects are SEO-friendly. We don't just
          make websites that look good; we also make websites that search
          engines like Google like. We make sure that the code is clean, the
          pages are well laid out, and the information is in the best way
          possible. Our team uses HTML, CSS, JavaScript, React, and Node.js to
          build websites that are fast, secure, and user-friendly
        </p>

        <p>
          We make websites that are quick to load, work well on phones, and are
          simple for people to use. Every one of these things will help your
          rank. We also make sure that the meta tags, captions, and pictures on
          your page are search engine-friendly. If your website is good for SEO,
          more people will visit it. This lets more people find your business
          online without just seeing ads. Over time, this helps you get more
          attention and grow in the long run.
        </p>
        <p>
          With Kushel Digi Solutions, you can get a website that looks great and
          makes it easy for people to find you. It has the right amount of style
          and plan to help your online business grow.
        </p>
        <h6>Unique and Modern Designs</h6>
        <p>
          People rate your business by its webpage these days. So, we focus on
          making styles for you that are unique and up-to-date. Our team knows
          how to mix professional, clean styles with images that stand out and
          make an impact that lasts.
        </p>
        <p>
          We don't use old themes or patterns that aren't interesting. Instead,
          we make each site unique so that it fits with your brand. Colors,
          styles, images—everything on your website is carefully picked out to
          make it feel new and different.
        </p>
        <p>
          There's more to a current design than just style. It's also about how
          it works. There are no old web standards used to make our styles. They
          are also easy to use on phones. Your site looks great and works great
          on all devices.
        </p>
        <p>
          People who like your site are more likely to buy something, stay
          longer, and look around more. If you work with Kushel Digi Solutions,
          your website will be up-to-date, artistic, and easy to remember, just
          like your brand.
        </p>
        <p>
          When you work with our team, web design company in New York is simple
          and won't stress you out. We will make you a website that works well
          and looks great for your business. Just tell us what you want to do.
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
