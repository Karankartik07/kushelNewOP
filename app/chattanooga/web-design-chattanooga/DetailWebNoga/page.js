"use client";
import React, { useEffect, useRef, useState } from "react";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { toast } from "react-toastify";
import "./detailsnoga.css";

import { useRouter } from "next/navigation";
import FormUSA from "@/app/COMMON/FormUSA";

export default function DetailWebNoga() {
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
    <section className="details-sec">
      <div className="details-desc">
        <h3>
          Web Design Chattanooga – Your Trusted Partner for Digital Success
        </h3>
        <p>
          Want a website for your business in web design Chattanooga that really
          shines? You're in the right spot. Here at Kushel Digi Solutions, we
          make websites that look great, load quickly, and work great on all
          devices. That's generally the first thing that comes to mind when they
          learn about your business.
        </p>
        <p>
          We understand that every business in Chattanooga is different, whether
          it's a new firm, a tiny café, a store, or a service business. That's
          why we always think differently. We put a lot of effort into making
          websites that are specific to your community, wants, and style.
        </p>
        <p>
          We make sure that your website grows along with your business. Our
          friendly team has worked hard to make your site look great and do well
          in search engines.
        </p>
        <p>
          We offer Web Design Chattanooga, that will make your site stand out,
          get more people, and turn those visitors into fans.
        </p>

        <img
          src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1762342170/web-design-chattanooga_zrr9mv.jpg"
          alt="web design chattanooga"
        />
        <h4>
          What Web Development Services Does Kushel Digi Solutions Offer in
          Chattanooga?
        </h4>
        <p>
          Kushel Digi Solutions has everything you need to help your business
          grow online when it comes to site building in Chattanooga. For both
          small companies and big brands, we make websites that are up-to-date,
          useful, and easy to follow.
        </p>
        <p>
          We don't just care about how your site looks; we also make sure that
          everything on it works right. Every website we make is quick, safe,
          good for mobile devices, and good for search engines.
        </p>
        <p>
          To make sure the fastest speed, we use new technologies like HTML,
          CSS, JavaScript, and React, as well as clean code and creative design.
          Check out what we have to offer:
        </p>

        <h5>Our Web Design Chattanooga Include:</h5>
        <h6>Custom Website Development</h6>
        <p>
          Sites for your business should have clear goals. We start from scratch
          to make websites that work for your business and talk directly to your
          visitors. When our artists get the job, they learn about your company,
          the things you sell, and the people who buy those things.
        </p>
        <p>
          The websites we make should look good, be simple to use, and get
          people to sign up for our list or buy something. Either a simple site
          with a list of services or one with a lot of pages that are hard to
          use is what we can do for you.
        </p>

        <p>
          The code runs faster and better now that it is clean and
          well-organized. It's easy to change your site, so it can grow with
          your business. If you hire Kushel Digi Solutions, your website will
          really show what kind of person you are.
        </p>

        <h6>E-Commerce Web Development</h6>
        <p>
          Are you ready to sell things online? It's easy, safe, and fast to shop
          on the sites we build. We check every part of your business to make
          sure it works right, from the beautiful product pages to the simple
          ways to check out. Our ecommerce systems are quick, safe, and simple
          to use, so people who buy from you will feel good about it.
        </p>
        <p>
          You can also see what sales are coming in, keep track of your things,
          and take money. Your online business has the tools it needs to grow
          thanks to these factors. Our Web Design Chattanooga will make sure
          that your site works for you, no matter how big or small your business
          is. It's easy to go about, pay fast, and keep your money secure at any
          business.
        </p>

        <p>
          We will take care of everything, from your things to putting up your
          product pages and SEO. We also make sure that your online shop looks
          well on all computers, phones, and applications. With Kushel Digi
          Solutions, your shop will appear and operate better. You'll earn more
          money quickly since more people will purchase from you.
        </p>

        <h6>Mobile-Friendly Web Design</h6>
        <p>
          Phone online searches are common. If your site doesn't look good or
          work well on phones, people might not want to go there. We make sure
          that every website we make works well on phones because of this.
        </p>
        <p>
          You can make your site operate on any device, such a computer, phone,
          or tablet, since we're clever. Don't worry; it will be simple to use,
          load fast, and look excellent on any screen. This helps individuals
          and makes them want to read more.
        </p>
        <p>
          Your site should also work well on phones for SEO reasons. When people
          look for something, Google gives sites that work well on phones more
          weight. This means that more people will see your business in
          Chattanooga. Our process takes into account the best ways for both
          people and search engines to make your site stand out.
        </p>
        <h6>Website Maintenance and Support</h6>
        <p>
          A terrific website on launch day isn't enough; it has to be fresh and
          innovative all the time. The same amount of care needs to be given to
          your website as to the rest of your business.
        </p>
        <p>
          If you hire Kushel Digi Solutions to help you, your website will stay
          fast, safe, flexible, and work great on all devices. We patch issues,
          keep an eye on updates to software, and back up your site regularly so
          it loads quickly and you can get your business done.
        </p>
        <p>
          If anything goes wrong, you may always contact or email us for
          support. We can also make small changes to your site to keep the style
          and material new. We'll take care of your IT problems while you run
          your business.
        </p>

        <h6>SEO-Optimized Web Development</h6>
        <p>
          Your beautiful website is useless if no one visits. That's why we
          constantly consider SEO in our designs. Kushel Digi Solutions builds
          websites from the ground up so that they look good and are simple for
          search engines to find.
        </p>
        <p>
          We take care of everything in the server, including shrinking URLs,
          making sure the site loads quickly, and a lot more. quickly.
          Everything is thoroughly thought out, from making sure that URLs and
          meta tags are favorable to keywords to making sure that the site runs
          fast and functions effectively on mobile devices.
        </p>
        <p>
          We use HTML5, CSS3, and JavaScript to improve website performance and
          rankings. We also have capabilities to monitor your progress.
        </p>
        <h6>Website Redesign and Upgrades</h6>
        <p>
          Do you have a website that seems ancient or slow? We can assist you!
          We provide your website with a fresh design that is modern and
          operates effectively when we make changes to it.
        </p>
        <p>
          We look at your present website to discover what works and what
          doesn't. We can reconstruct it quickly and better because of our
          modern technologies, superior planning, and the latest design trends.
        </p>
        <p>
          We'll make sure your site reveals how much your company has grown,
          whether you want a complete makeover or simply a speed boost. Kushel
          Digi Solutions' new website will help your Chattanooga business get
          more attention online. It will look wonderful and get more people
          enthused about it.
        </p>
        <h5>Why Should You Hire Us for Web Design Chattanooga?</h5>
        <p>
          Selecting the correct website staff is crucial. That's easy for you to
          do with Kushel Digi Solutions. We do more than just make websites; we
          also help your business grow online.
        </p>
        <p>
          Our expert team is both creative and technology expert, so they create
          a perfect website for your business.
        </p>
        <p>
          Every type of Chattanooga business, from small start-ups to well-known
          brands, has come to us for help building a strong online presence. It
          takes a long time to listen, plan, build, and make each website look
          great and work even better. Most to us, it's about quality, being
          honest, and the long run.
        </p>
        <p>
          Here are a few reasons why we are the best choice for Chattanooga
          website designers:
        </p>

        <h6>Experience That Speaks for Itself</h6>

        <p>
          Our team has been making websites for a long time. We've helped small
          online stores, new companies, and neighborhood stores open all over
          Chattanooga. EWith each website, we learn something new and improve.
        </p>

        <p>
          We build attractive, practical, and modern online businesses and
          websites for you, utilizing the newest web technologies and
          innovations.
        </p>
        <p>
          Clean, functional code is guaranteed from our HTML, CSS, JavaScript,
          React, and Node.js engineers.
        </p>
        <p>
          Problem-solving and Kushel Digi Solutions skills are also required.
          How well you understand a website also matters. Know-how goes beyond
          tenure. If you hire us, we'll send a group to help you make your plans
          come true.
        </p>
        <h6>A History of Success</h6>
        <p>
          Before you hire a Web Design Chattanooga, you should look at the work
          they've already done. Lots of different types of businesses in
          Chattanooga and other places have had good experiences with Kushel
          Digi Solutions. We've helped a lot of businesses, new and old, make
          websites that work.
        </p>
        <p>
          The websites we have are a mix of modern designs, useful plans, and
          ones that get people to come. What really counts, though, is how well
          these services work. It's helped many of our clients get more visits,
          make more sales, and be seen more online.
        </p>
        <p>
          We have had plans for a long time. Our websites in Web Design
          Chattanooga are made to grow with your company. You can now make
          changes to your site whenever you want.
        </p>
        <p>
          A lot of clients put their trust in us because we've done good work in
          the past. You can trust our team to do what they say they will do.
        </p>

        <h6>100% Custom and Scalable Designs</h6>
        <p>
          We don't think there are models that work for everyone. Your website
          should be just as unique as your company. This is why we make unique
          websites that fit your needs, style, and community.
        </p>
        <p>
          The colors, the layout, and everything else are all made to match the
          style of your business. No matter its size, your firm will expand. You
          may always change your site's appearance to add pages, an online shop,
          or other services. You don't have to begin over.
        </p>
        <p>
          Kushel Digi Solutions will make sure your website works today and in
          the future, so your company can perform well in Chattanooga and
          beyond.
        </p>
        <h6>Transparent Process and Honest Communication</h6>
        <p>
          We think that every business, no matter how big or small, should be
          able to get great web design through Web Design Chattanooga. KUS keeps
          our prices low and our services simple for this reason. When you know
          what you're getting, you don't need to pay more.
        </p>

        <p>
          Even though our prices are low, we always do a good job. Only business
          sites that look good on phones are the ones we make. They're made to
          help your company grow. We care most about value, so you get the most
          for your money.
        </p>
        <p>
          The Chattanooga business deals we offer can be changed to fit a lot of
          different wants and budgets. It's not going to cost a lot of money and
          will help your business. It doesn't matter if your business is new or
          old and growing. We will make a website for you for a small fee.
        </p>

        <h6>Ongoing Support You Can Rely On</h6>
        <p>
          Updating a website is more important than creating it. You must patch,
          update, and check for security holes throughout time. At Kushel Digi
          Solutions, we do more than simply build websites for you.
        </p>
        <p>
          For a nominal cost, we can evaluate your speed, do regular
          maintenance, make backups, and make security adjustments. If your firm
          grows, we may add new tools or take away ones you don't want. We are
          always ready to correct things right away if something goes wrong
        </p>
        <p>
          For a time, this connection won't offer you any difficulty. You can
          focus on growing your business while we handle the technical details.
        </p>
        <p>
          We treat each consumer as an individual, so they will never feel left
          out. Let's make sure you have a good time online.
        </p>
        <p>
          Are you ready for Web Design Chattanooga businesses to help your
          business grow? Call Kushel Digi Solutions right immediately so we can
          make something fantastic happen right away!
        </p>
        <h5>FAQ’s - Web Design Chattanooga</h5>
        <h6 className="faQclass">
          1. What makes your web design services in Chattanooga stand out?
        </h6>
        <p>
          We ensure that our web design Chattanooga services are customized to
          your company, load quickly, and are simple to use. We create websites
          that are both up to date and favorable to search engines in order to
          facilitate the growth of businesses online and increase the number of
          clients they encounter.
        </p>
        <h6 className="faQclass">
          2. In Chattanooga, how long does it take to finish a website?
        </h6>
        <p>
          Four to eight weeks are typical for web design Chattanooga projects.
          This timeframe may vary depending on your website's aims, features,
          and content. From planning to product release, we ensure everything
          happens as planned and on schedule, precisely as you want.
        </p>
        <h6 className="faQclass">
          3. Do you create websites that work well on phones?
        </h6>
        <p>
          Ofcourse, our web design Chattanooga team does make websites that work
          on both desktop PCs and mobile devices like smartphones and tablets.
          For your viewers, this makes it easier for your website to work right
          on all devices.
        </p>
        <h6 className="faQclass">
          4. Can I change my website after it's live?
        </h6>
        <p>
          It is obvious! With web design Chattanooga, it is simple to make
          modifications to the text, images, and pages that are seen on
          WordPress websites. If you want assistance in managing your website
          after the event, we are also able to provide you with prompt training
          or assistance.
        </p>
        <h6 className="faQclass">5. Will my website be SEO-friendly?</h6>
        <p>
          Yes! Best practices for search engine optimization (SEO) are used by
          employees at web design Chattanooga. Some of these best practices are
          clean code, fast running times, and material that helps people find
          your business online and moves it up in the search results.
        </p>
        <h6 className="faQclass">
          6. What do I need to do to use your web design services in
          Chattanooga?
        </h6>
        <p>
          Web design Chattanooga makes it simple to get started with your
          website. When you get in contact with us, communicate to us what it is
          that you want your website to do. The next step will be to devise a
          strategy for carrying it out.
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
      <FormUSA num={10} countryCode={"us"} />
    </section>
  );
}
