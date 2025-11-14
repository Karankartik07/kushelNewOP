"use client";
import React, { useEffect, useRef, useState } from "react";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { toast } from "react-toastify";
import "./detailsbama.css";

import { useRouter } from "next/navigation";
import FormUSA from "@/app/COMMON/FormUSA";

export default function DetailWebBama() {
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
          Web Design in Alabama | Affordable and Professional Web Solutions
        </h4>
        <p>
          Looking for professional web design in Alabama? You're in the right
          spot. When we build websites for our clients, they do more than just
          look good; they also help your business. People will probably see your
          website for the first time and think of your brand. It needs to be
          clean, appealing, and simple to use. Yes, that's exactly what we make
          for Alabama clients.
        </p>
        <p>
          We build websites that load quickly, work well on mobile devices, and
          put the person first. We ensure that your website meets your needs, no
          matter if you run a small neighbourhood business, a new company on the
          rise, or a well-known one that has been around for a long time.
        </p>
        <p>
          Our team works hard to ensure that websites have clear plans, great
          graphics, and easy access, allowing users to quickly find what they
          need.
        </p>
        <p>
          We also think about search engines to make sure that the right people
          can find your site.
        </p>
        <p>
          You get more than just a website when you work with Kushel Digi
          Solutions. We want your business to succeed online, and we are there
          to help you do it.
        </p>

        <img
          src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1759326257/web_design_in_alabama_qd6ehc.jpg"
          alt="web design in alabama"
        />
        <h5>How Can Kushel Digi Solutions Help with Web Design in Alabama?</h5>
        <p>
          These days, you need to have a strong online footprint, and it's
          getting harder and harder to get a website that fits your goals and
          your goods. With Kushel Digi Solutions, you can make a website that is
          beautiful and made just for you. Our websites are secure, load fast,
          look excellent, operate well on all devices, and assist with SEO.
        </p>
        <p>
          It doesn't matter whether you need a new website, modifications to an
          existing one, or features that are exclusive to your firm. We can
          assist you. We want the designs to look beautiful, be safe, and be
          simple to use on all equipment. We make sure that the websites we
          develop load quickly and are simple to use.
        </p>
        <p>
          There's more that your website should do for your business than just
          "look good." Our team can help with e-commerce, SEO, and making new
          tools. With our help, a lot of Alabama brands, from new ones just
          starting out to well-known ones, have shone online.
        </p>

        <h5>Our Web Design Services in Alabama include:</h5>
        <h6>Custom Website Design</h6>
        <p>
          Your website shouldn't look like a template; it should show off your
          brand. That's why we make website designs that are just right for your
          company. Our team hears your ideas, learns about your business, and
          then creates a website that looks up-to-date and expert.
        </p>
        <p>
          We focus on making plans that show off your goods or services in the
          best way possible. Each design is made to be neat, simple, and
          interesting to look at. As soon as people land on your site, they
          should have faith in your business.
        </p>

        <p>
          Our unique designs will help your Alabama business stand out, whether
          it's a new one or an old one. There won't be any cookie-cutter
          websites; only unique content that is made for your viewers. You'll
          have a site that really shows off your brand and makes a good first
          impression with Kushel Digi Solutions.
        </p>

        <h6>Mobile-Friendly Web Design</h6>
        <p>
          Most people who browse websites these days do it on their phones,
          tablets, or computers. Websites that work well on mobile devices
          aren't just a trend; they're a must-have. We develop websites at
          Kushel Digi Solutions that appear good on all screen sizes by having
          them work well on mobile devices.
        </p>
        <p>
          Phones are quick, flexible, and easy to use, so our designs work well
          on them. You can easily read words, press buttons, and move pictures
          around on the screen. People will never have any problems when they
          try to scroll or zoom in or out. It will always work perfectly for
          them.
        </p>

        <p>
          Search engines like sites that work well on phones, so making your
          site flexible can also help your SEO. That means more people in
          Alabama can find your business online. If you hire Kushel Digi
          Solutions, your site will look great and work great on mobile devices.
        </p>

        <h6>E-Commerce Website Design</h6>
        <p>
          An ecommerce site that is safe, simple, and easy to use is what you
          need if you want to sell things online. At Kushel Digi Solutions, we
          create online shops that make it simple for your clients to buy
          things.
        </p>
        <p>
          We make sure that the product pages look nice and clean, that the
          checkout process is quick, and that the payment choices are safe. Any
          form of company, from clothing stores to service providers, may
          utilise our e-commerce services.
        </p>
        <p>
          We also include tracking supplies, search criteria, and customer
          feedback to make things better for the individuals who use it. No
          matter where you are in the nation, you may apply our ideas to earn
          more sales. Your company will expand, and people who purchase on your
          site will have a pleasant experience.
        </p>
        <h6>SEO-Friendly Design</h6>
        <p>
          Your website won't do any good if no one can discover it. That's why
          we consider SEO when we make websites. We write, set up, and make your
          site better so that search engines will enjoy it.
        </p>
        <p>
          We make sure that Google can easily read your site by using clean code
          (HTML, CSS, JavaScript, React, and Node.js), pages that load quickly,
          and content that is in the correct locations. We also look at names,
          descriptions, and designs that employ a lot of popular phrases to help
          people locate your Alabama company online.
        </p>
        <p>
          It's not enough to just get more people to your site; you want to
          reach the right people. Kushel Digi Solutions will make sure that the
          right people see your website.
        </p>

        <h6>Website Redesign Services</h6>
        <p>
          If your site looks or works badly or seems old, it might be time for a
          change. We help businesses in Alabama keep their websites fresh,
          making sure they look good, work well, and are simple for people to
          use again.
        </p>
        <p>
          Your old website is looked at to see what works and what doesn't. Then
          it is made to look brand new. We change the images and styles and make
          the site work better on phones. Above all else, we make sure it's
          quick and good for SEO.
        </p>
        <p>
          People who used to visit your website could come back. Your internet
          company will seem more professional, and customers will trust you
          more. With Kushel Digi Solutions, your new site will work better and
          look better.
        </p>
        <h6>Maintenance and Help that Lasts</h6>
        <p>
          It's not over when your website goes live. Each day, you should keep
          it up to date and fix any problems you find. This is why we keep
          helping people in Alabama.
        </p>
        <p>
          We change the material, look for security holes, and keep the tools up
          to date, among other things. We repair things immediately if they go
          wrong. You won't have to worry about any technical errors or any bugs.
        </p>
        <p>
          As your company grows, we can also help you add new tools or keep your
          information up to date. This will keep your website new and useful
          over time. You get more than just web design from Kushel Digi
          Solutions. They become your long-term partner and make sure your site
          always works at its best.
        </p>
        <h5>
          Why Partner with Kushel Digi Solutions for Web Design in Alabama?
        </h5>
        <p>
          It's very important for your business to choose the right company to
          build your website. Kushel Digi Solutions' main goals are to make cool
          websites and get to know our clients well.
        </p>
        <p>
          We only want to give your business tech choices that really work. From
          the first time we talk to the big launch, we keep things simple,
          clear, and easy.
        </p>
        <p>
          We love it when art and technology work together. Your website will
          look great, work well, and get you good results. What could go wrong?
        </p>
        <p>
          Our Alabama team is made up of professionals who really understand
          design and development. We use what you tell us to make plans for
          safe, user-friendly websites that are ready to grow.
        </p>
        <p>
          Why do so many businesses in Alabama choose Kushel Digi Solutions for
          their website needs? Read below to find out:
        </p>
        <h6>Experience That Matters</h6>

        <p>
          We've been making websites for a wide range of businesses for many
          years. We know what works and what doesn't for both small businesses
          and big names. With this knowledge, we can make websites that really
          show what your business stands for.
        </p>

        <p>
          There are always new design trends on our team, but we also make sure
          that everything is helpful. Sites that look good are great, but they
          also need to be easy to use. We think about both how things look and
          how they work when we make them.
        </p>
        <p>
          We won't give you generic templates when you work with us. Every page
          is made to fit your specific needs.
        </p>
        <p>
          We are a trusted choice for companies all over Alabama because we are
          both creative and professional.
        </p>
        <h6>Quality Websites that Don't Break the Bank</h6>
        <p>
          Every business in Alabama has to make a budget. You can get great
          services from our Alabama web design company without spending a lot of
          money. We make cool, useful, and cheap websites for people like you.
        </p>
        <p>
          You can switch around some cool packages we have. Let's make a plan
          just for your website, online store, or any other project you want to
          work on. There are no hidden fees; the amounts are easy to see.
        </p>
        <p>
          We always have low prices and do great work. It's going to be safe,
          work well on phones, and be set up to help you. We believe that all
          businesses, not just big ones, should be able to get good web
          development.
        </p>
        <p>
          That's where you can find great deals and cool websites that help you
          level up. You'll find it smart, simple, and made to help you do well.
        </p>

        <h6> Mobile-Friendly and Fast Websites</h6>
        <p>
          Most people surf the web these days on their phones. That's why we
          make sure all screen sizes can see and use your site well.
        </p>
        <p>
          It has to be simple for us to use too. It is easy to make a choice,
          and the pages load fast. People aren't going to waste time looking for
          something. They will instead enjoy a website that works well and makes
          sense.
        </p>
        <p>
          Speed is another thing we think about. Sites that load too slowly lose
          visitors. We build websites with solid coding and the greatest
          features that function. This makes websites load quickly, which is
          helpful for both humans and search engines. We'll constantly be one
          step ahead of your Alabama company.
        </p>
        <h6>SEO-Ready Websites for Better Reach</h6>
        <p>
          No matter how cool your site seems, it won't benefit anybody if they
          can't locate it. That's where our site's SEO-friendly feel truly
          shines. When we create your website, we focus on SEO from the very
          beginning. By giving each page a clear title, keeping the code clean
          with HTML, CSS, and JavaScript, and optimizing images with the right
          details, we make sure search engines love your site.
        </p>

        <p>
          In the future, it will be easier for others to locate you. All we have
          to do is make sure that everything works properly, looks well, and
          follows all the SEO rules.
        </p>
        <p>
          {" "}
          It's also search engine-friendly as we added safe links (HTTPS) and
          made the pictures better. We also made styles that look good on
          phones. A lot of individuals in Alabama will be able to locate your
          company online this way.
        </p>
        <p>
          There are a number of factors that might help you stand out, such as
          ensuring the material is simple to read and good for keywords. The
          sites we build not only operate today; they keep users coming back and
          bring in new ones for a long time.
        </p>
        <h6>New and Unique Designs</h6>
        <p>
          These days, people judge your business by its website. We make sure
          that the styles we make for you are both special and up-to-date. Our
          team knows how to combine clean, professional styles with pictures
          that stand out and have an effect that lasts.
        </p>
        <p>
          We don't stick to boring old themes or patterns. We make each site
          special so it fits with your brand instead. Everything on your website
          was chosen with care to make it feel new and different. This includes
          the colours, styles, and pictures.
        </p>
        <p>
          These days, design is more than just style. It's also about how it
          works. The styles we use don't follow any old web rules. They work
          well on phones, too. Everything on your site works great and looks
          great.
        </p>
        <p>
          People who like your site are more likely to buy something, stay
          longer, and look around more. Like your business, your website will be
          modern, creative, and easy to remember if you work with Kushel Digi
          Solutions.
        </p>
        <p>
          Web design in Alabama is easy and won't stress you out when you work
          with our team. We'll build you a website for your business that looks
          great and works great. Tell us what you want to do.
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
