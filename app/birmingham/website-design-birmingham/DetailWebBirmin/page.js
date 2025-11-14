"use client";
import React, { useEffect, useRef, useState } from "react";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { toast } from "react-toastify";
import "./detailsbirmin.css";

import { useRouter } from "next/navigation";
import FormUSA from "@/app/COMMON/FormUSA";

export default function DetailWebBirmin() {
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
          Website Design Birmingham – Professional Solutions for Every Business
        </h4>
        <p>
          Need a professional website design Birmingham? You're in the right
          spot. Kushel Digi Solutions makes websites that are not only nice to
          look at but also helpful and easy to use. Sites like yours should
          really show off your brand since they are often the first thing people
          see about your business.
        </p>
        <p>
          We build websites that are current, attractive, and easy for people to
          use. People can easily discover you online since our sites load fast,
          operate well on phones, and are good for search engines.
        </p>
        <p>
          We can make designs that work for any kind of business in Birmingham,
          from small shops just starting out to large companies that have been
          around for a long time.
        </p>
        <p>
          Our team works hard to make sure that your site has simple designs, is
          easy to get to, and has pictures that draw people in and help you
          connect with them. They give you more than a website; they become a
          partner you can trust who wants to help your online business grow.
        </p>

        <img
          src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1760515942/website-design-birmingham_aqcnd0.png"
          alt="website design birmingham"
        />
        <h5>What Website Design Services Do We Provide in Birmingham?</h5>
        <p>
          We at Kushel Digi Solutions think that every Birmingham company should
          have a website that works hard for them. It's not enough for a design
          to look good; it also needs to make your site easy to use, work on
          mobile devices, and be flexible enough to grow with your business.
        </p>
        <p>
          Our web design services cover all the things you need to make and keep
          a strong online presence, which is why we offer so many of them.
        </p>
        <p>
          There is no one-size-fits-all design on our team. We take the time to
          learn about your company and make a site that fits your brand. We make
          sure that your website not only looks good but also works well. We do
          this by using custom plans and designs that are good for SEO.
        </p>

        <h5>Our Website Design Services Include:</h5>
        <h6> Custom Website Design</h6>
        <p>
          Your website should show that your business is special. Not only do we
          at Kushel Digi Solutions make standard websites, but we also make
          designs that are unique to your brand, audience, and goals. Your
          website will be different from other companies that utilize the same
          themes if you build it yourself.
        </p>
        <p>
          First, we find out about your company, what you have to offer, and who
          you want to target. We then create a site that suits your style and
          makes a positive impression on visitors. Is a website just nice to
          look at? No, it also needs to be useful and simple to use.
        </p>

        <p>
          That's why we focus on clean styles, easy access, and tools that
          people can use. People who come should be able to easily and quickly
          find what they need. We'll make it for you whether you want something
          rough and cool or bright and fancy. When you work with us, we'll make
          a website that is just for your Birmingham business.
        </p>

        <h6>Mobile-Friendly Web Design</h6>
        <p>
          A lot of people use their phones to look things up on the internet.
          People may not want to visit your site if it doesn't look attractive
          or perform properly on phones. Because of this, we make sure that all
          of the websites we develop perform properly on phones.
        </p>
        <p>
          We employ flexibility, so your site will automatically alter to match
          any screen size, such as a computer, phone, or tablet. You can be
          confident that your site will look nice on all devices, load quickly,
          and be simple to use. This keeps people interested and makes things
          easy for your viewers.
        </p>

        <p>
          It's also important for SEO that your site works well on phones.
          Google gives sites that work well on phones more weight in search
          results. This means that more people will see your Birmingham company.
          We make your site stand out from the rest by combining the best ways
          to make things work for both people and search engines. When you use
          our services, you'll never have to worry about old styles that make
          people mad. Your site will always be up-to-date, mobile-friendly, and
          ready for a world where phones are the first thing people use.
        </p>

        <h6>E-Commerce Website Design</h6>
        <p>
          Is there something you need to sell online? You need a safe and simple
          way to do business online. Kushel Digi Solutions makes online stores
          that are simple for you to run and simple for your customers to use.
          We check your whole store to make sure it works perfectly, from the
          beautiful product pages to the simple checkout ways. Our e-commerce
          sites are quick, safe, and simple to use, so people who buy from you
          will feel good about it.
        </p>
        <p>
          You can also take care of your things, take funds, and see what orders
          you have coming in. These parts give your online business the tools it
          needs to grow. No matter how big or small your store is, our team will
          make sure that your site works for you.
        </p>
        <p>
          People in Birmingham can make a lot of money through online shopping.
          We'll help you make a professional online store that people will
          trust, that will fetch you more sales, and that will enjoy shopping on
          for your clients.
        </p>
        <h6>SEO-Friendly Design</h6>
        <p>
          It doesn't matter how nice your website looks if no one can find it.
          That's why every design we make has SEO (Search Engine Optimization)
          built in. Kushel Digi Solutions builds websites from the ground up so
          they look good and are easy for search engines to find.
        </p>
        <p>
          Languages that are easy to clean up include HTML, CSS, JavaScript,
          React, and Node.Search engines can read your site with the help of js.
          We also check how quickly the site runs, how well it works on phones,
          and where the information is put so that it is good for search
          engines. These important things will help Google rank your business
          higher.
        </p>
        <p>
          It's better for the user and better for SEO when the style is good.
          Everyone can find what they need quickly, and Google likes sites that
          keep people interested. In the end, this will help more people find
          your Birmingham business, which will mean more buyers. Websites that
          will grow with you, not just work now, are what we build. Even after
          it goes live, your site will still work hard to get results because
          our method is SEO-friendly.
        </p>

        <h6>Affordable and Transparent Pricing</h6>
        <p>
          We recognise that money is quite crucial when you require a web design
          company. We think Birmingham companies should be able to pay for
          Kushel Digi Solutions' fantastic work developing websites. You won't
          find any hidden fees or expenses in our rates.
        </p>
        <p>
          We inform you precisely what you're paying for before we start,
          whether it's design, development, or continuing support. You'll always
          know what to anticipate this way. We don't cut corners on quality,
          even if our services are inexpensive. We verify every site we develop
          to make sure it looks excellent, operates well on phones, and meets
          your company goals. You need to spend less.
        </p>
        <p>
          No matter how large or little your company is, we can assist you in a
          manner that suits your requirements and doesn't cost a lot of money.
          If you pick us, we guarantee that your website will look fantastic,
          help your company expand, and not cost a lot of money.
        </p>
        <h6>Long-Lasting Support and Maintenance</h6>
        <p>
          You can't simply get your website up and running. Keep taking care of
          it so that it is safe, functions effectively, and is up to date.
          That's why we serve all of our customers in Birmingham and keep them
          happy. We handle everything, from correcting problems to upgrading
          security to producing backups.
        </p>
        <p>
          We'll offer additional tools for you as your company develops and you
          need them. In this manner, visitors who visit your website will
          constantly find it valuable and new. We also check the speed of your
          site to make sure it works quickly and without any faults. Things get
          fixed quickly if they go wrong, so you don't have to worry about
          clients or being closed.
        </p>
        <p>
          You can run your business while we take care of the tech stuff if you
          have good help. Kushel Digi Solutions does more for you than just one
          job. They stay with you for a long time and help you whenever you need
          it.
        </p>
        <h5>Why Partner With Us for Website Design in Birmingham?</h5>
        <p>
          You need to find a partner who understands your business and goals,
          not just a web design company that can make you a website. We don't
          believe in replies that work for everyone here at Kushel Digi
          Solutions.
        </p>
        <p>
          We build websites that suit your brand, reach your audience, and help
          your company thrive.
        </p>
        <p>
          The key things we want to do are provide you with a site that looks
          good, is simple to use, and has a structure that helps with SEO and
          keeps it ahead of the competition.
        </p>
        <p>
          We make sure that your website shows who you are and treats people
          well, no matter how old or new your Birmingham business is.
        </p>
        <p>
          That's not all you get when you work with us. You get a digital
          partner for life who is always willing to help you make your online
          account better.
        </p>
        <h6>Skilled and Experienced Team</h6>

        <p>
          Our team makes us powerful. We collaborate with web designers,
          authors, and other tech-savvy folks who know how to make a site stand
          out. Our staff has been developing websites for a long time, so they
          know about the latest design trends, coding languages, and
          technologies that help them stand out.
        </p>

        <p>
          We care about more than simply equipment; we care about people too. We
          learn about your business, your users, and your goals before we make
          anything. This helps us build services that are beneficial for you,
          easy to use, and valuable.
        </p>
        <p>
          Our team members also know what's going on in the field. To start, we
          make sure that your website is mobile-friendly and follows SEO best
          practices so that it is always up to date and ready to battle. When
          you hire Kushel Digi Solutions, you receive more than simply competent
          workers. You put forth a lot of effort and employ your thoughts.
        </p>
        <p>
          If you pick us, you'll work with a group of individuals that sincerely
          want to assist companies in Birmingham flourish online.
        </p>
        <h6>Proven Track Record of Success</h6>
        <p>
          You should look at the work a web design business has done before you
          engage them. Many different kinds of companies in Birmingham and
          beyond have had good experiences with Kushel Digi Solutions. We've
          helped a lot of companies, both new and old, build websites that
          function.
        </p>
        <p>
          We have a combination of current designs, practical layouts, and
          websites that are effective at getting people to visit them. What
          matters most is how effectively these services operate, however. Many
          of the clients we've worked with have gotten more visitors, made more
          sales, and been seen more online.
        </p>
        <p>
          We have plans for more than a few months. Our sites are made to grow
          with your business. Your site can now change based on your wants.
        </p>
        <p>
          A lot of clients trust us with their digital journey because we've
          done well in the past. When you hire our team, you know that they will
          do what they say they will do.
        </p>

        <h6>Focus on User Experience</h6>
        <p>
          Your site should be fun and simple for people to use who visit it.
          They make your business what it is. We do everything at Kushel Digi
          Solutions with the customer in mind. This means the pages should run
          quickly and the styles should look neat and expert.
        </p>
        <p>
          Not only should websites look good, but they should also make people
          feel good when they look at them. People are more likely to stay
          longer and come back if they can quickly shop, find what they need, or
          get in touch with you.
        </p>
        <p>
          We think about how easy it is for everyone to use your website when we
          make it. Everything is made to keep people interested, like making it
          easy to use on phones. Google also likes sites that are easy for
          people to use. Sites that people like to use are good for search
          engines. Not only does giving people a good experience make your
          guests happy, but it also helps your SERPs. We can make your business
          in Birmingham look good and run well.
        </p>
        <h6>Affordable and Transparent Pricing</h6>
        <p>
          We think that every business, no matter how big or small, should be
          able to get good web design. Kushel Digi Solutions keeps our prices
          low and simple because of this. If you already know what you're
          getting, why pay more? There are no extra fees or prices that aren't
          clear. It's easy to see and know what the prices are. We'll let you
          know right away how much it costs if you need a simple website, a
          custom design, or a full e-commerce platform for your business.
        </p>

        <p>
          Even though we have low prices, we always do a good job. Only business
          sites that work well on phones are the ones we make. They're meant to
          help your company grow. We care most about value, so you get the most
          for your money.
        </p>
        <p>
          We have deals for businesses in Birmingham that can be changed to fit
          a lot of different wants and budgets. The website we make for your
          business won't cost a lot of money and will meet your needs. It
          doesn't matter if your business is new or old and growing. Building a
          website is easy because you can rely on us and pay little.
        </p>

        <h6>Long-Term Support and Partnership</h6>
        <p>
          You can't simply leave your website alone when you put it up. It has
          to be patched, updated, and checked for security gaps over time. At
          Kushel Digi Solutions, we don't simply build you a website; we also
          work with you for a long time.
        </p>
        <p>
          For a nominal cost, we can evaluate your speed, undertake regular
          maintenance, backups, and security updates. If your business expands
          and you require additional tools, we'll add them. Our crew is ready to
          solve things straight away if anything goes wrong.
        </p>
        <p>
          We also update your page. Trends and technologies change quickly, but
          as long as we work on your site, it will always be up to date. Your
          Birmingham business will never fall behind if you do this.
        </p>
        <p>
          When you work with us, you get more than just a web design business.
          You find a person who wants you to do well. We'll still be here for
          you after your website goes live. You can trust Kushel Digi Solutions
          to make a website for you if you need one in Birmingham.
        </p>
        <p>
          Are you sure you want to take your business online? With our expert
          website design Birmingham services, get in touch with us right away,
          and let’s make something great!
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
