"use client";
import React, { useEffect, useRef, useState } from "react";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { toast } from "react-toastify";
import "./detailsrich.css";

import { useRouter } from "next/navigation";
import FormUSA from "@/app/COMMON/FormUSA";

export default function DetailWebRich() {
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
          Web Design Services Richmond – Build Stunning, User-Friendly Websites
        </h4>
        <p>
          You're in the right place if you're looking for web design services in
          Richmond. We make websites that are up-to-date, quick, and easy to use
          here at Kushel Digi Solutions. Our goal is to help small businesses
          get noticed online by making images that people will remember.
        </p>
        <p>
          People often see your website first when they think of your business.
          Because of this, it needs to look good and work well. Our sites are
          designed to be user-friendly, run quickly, and give every person a
          great time. When you use our web design services, you can turn first
          impressions into long-term relationships with customers.
        </p>
        <p>
          A small business that is just starting out is the same as a big
          business that is getting bigger. We can make a website for you that
          meets your needs. We help with everything, from making one-of-a-kind
          models to setting up online shops.
        </p>
        <p>
          All of our websites are safe, mobile-friendly, and search
          engine-friendly, which makes it easy for your customers to find you.
        </p>
        <p>
          We at Kushel Digi Solutions think that a good website is more than
          just great design. We see it as a tool that can help your company
          grow. Our website design services in Richmond will help you make a
          site that works for you and your users.
        </p>
        <img
          src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1759141123/Web-Design-Company-in-Richmond_edei2r.png"
          alt="web design company in richmond"
        />
        <h5>Which Web Design Services Can We Offer in Richmond?</h5>
        <p>
          On the web, your business page should do more than just look good.
          Kushel Digi Solutions can help you create a strong, useful, and
          easy-to-use website if you live in Richmond. We make sites that fit
          your brand and your goals because each business is unique. We build
          new websites and improve old ones.
        </p>
        <p>
          We focus on simple, fast designs that look good on phones and are
          built in a way that is good for SEO. We also want people who visit
          your site to enjoy each page and find it simple to work with.
        </p>
        <p>
          It's up to us to make anything from a simple business site to a
          full-on online shop.
        </p>

        <h5>Our Website Design Services Include:</h5>
        <h6>Tailored Website Designs for Your Brand</h6>
        <p>
          We know that every business is different here at Kushel Digi
          Solutions. That's why we make websites that are perfect for your
          business and help you reach your goals. We don't use dull themes. We
          make styles that are unique to your business and help you stand out
          online instead.
        </p>
        <p>
          The first thing we do when we make plans is ask you what you want. We
          talk about what you want to achieve, who you want to reach, and the
          resources you need. Then we make a style that is up-to-date,
          professional, and simple to use. The styles, colors, pictures, and
          even where the text goes were all carefully chosen.
        </p>

        <p>
          If your brand has its own website, it shows that it is special, and
          people will trust it more. We can help you make a beautiful resume, a
          simple site for information, or a design for a service. You get more
          than just a website when you hire our personalized web design agency
          in Richmond. You get a strong online presence that helps your business
          grow as well.
        </p>

        <h6> Mobile-First and Fully Responsive Sites</h6>
        <p>
          A lot of people today use their phones to browse the web. In light of
          this, your website needs to look good and work well on all screen
          sizes. Our professional team makes websites that work well on phones
          because they are fun to read and look great on small screens. We make
          sure that websites run quickly and look good on all screen sizes.
          People can move around the page without having to look or zoom in.
        </p>
        <p>
          Our team makes sure that your website works well on all of them by
          testing it on a number of different devices. Any phone, tablet, or
          computer will be able to see your site, and it will look the same.
        </p>

        <p>
          You get a website that is ready for the modern world when you hire our
          web design company in Richmond. We'll keep your business ahead by
          making sure that all of your visitors have a smooth experience, no
          matter how they get to your site.
        </p>

        <h6>Powerful E-Commerce Stores That Sell</h6>
        <p>
          You need more than just a website to sell things or offer services
          online. The store you need should have everything. Our tech skills
          allow us to create ecommerce sites that can help your city of Richmond
          business grow.
        </p>
        <p>
          In our web stores, we make it easy for people to look around, buy
          things, and pay. A safe way to pay, a list of products, a buying cart,
          and a customer account are all on our ecommerce sites. We also check
          that everything works well by making sure it's quick and has styles
          that look good on phones.
        </p>
        <p>
          If you want to open an online store or already have one and want to
          sell more things, we can make you an ecommerce system that works. We
          also add tools that make it easy to see what you've sold, who got it,
          and how much stock you have. When you hire our web design service in
          Richmond, we give you more than just a store.. We make it safe for you
          to shop online with us, so you'll want to come back.
        </p>
        <h6>Smart Designs with Built-In SEO</h6>
        <p>
          It doesn't matter how nice your website looks if no one can find it.
          This is why Kushel Digi Solutions makes SEO-friendly websites: so that
          your business can do better in search engines. We work on both the
          look and the speed of your site so that people notice it.
        </p>
        <p>
          Our team cleans up the code on your website and makes sure it loads
          quickly. For SEO, these all matter. We also make sure that the
          headers, pictures, and page styles on your site are search
          engine-friendly. People in Richmond are more likely to find your
          business on Google now.
        </p>
        <p>
          Our strategies for design and SEO have been sensible and worked
          successfully for a long time.. These people will visit your site more
          often and buy more from you if you use our search engine–friendly
          services. When you hire us for SEO web design in Richmond, you get
          more than just a nice-looking site. You get a tool that helps your
          online business grow and brings real people to your site.
        </p>

        <h6> Redesigning and Upgrading Old Websites</h6>
        <p>
          Have a website already, but it looks old? We can give your website new
          life by redesigning it and upgrading it at Kushel Digi Solutions. A
          lot of Richmond companies come to us with sites that are slow, out of
          date, or not mobile-friendly. We can fix all of that.
        </p>
        <p>
          The goal of our makeover process is to make things look better and
          work better. We make layouts look better, add new content, and give
          your site a more modern look that fits your brand better. We also make
          sure the site is mobile-friendly, runs faster, and uses the most
          up-to-date SEO techniques.
        </p>
        <p>
          Small changes, like adding new features, making it easier to navigate,
          or updating the look and feel, can sometimes make a big difference.
          Sometimes, a whole new look is called for. No matter what, we'll make
          sure your website looks and feels current, trustworthy, and useful.
          When you use our website makeover services in Richmond, we do more
          than just update your site. We make your whole online presence better
          by making it look better and be easier for people to use.
        </p>
        <h6>Support and Maintenance that Lasts</h6>
        <p>
          Keeping your website safe, fast, and up to date isn't enough; it needs
          regular care. That's why our Idaho Falls web design services are here
          to help you with your site. Of course, you should check your website
          often, just like you would any other gadget.
        </p>
        <p>
          Don't worry about any of that; our team will make changes, make sure
          everything is safe, back up, and fix problems. We'll fix it if you
          call us right away if something goes wrong. This keeps your customers
          happy and your website up to date with what your business needs.
        </p>
        <p>
          As long as everything works, there's no need to think about tech
          problems. Do what you're good at. No matter how often you need repair
          help—once a month or once a week—we can be there for you. Don't
          worry—your website will look great if you work with us. With our
          repair services, we can make sure that your Idaho Falls website stays
          up and running.
        </p>
        <h5>Why Are We the Right Web Design Partner in Richmond?</h5>
        <p>
          It can be hard to find the right web design company. There are lots of
          choices, and all of them say they will give you the best benefits.
          That being said, not every business knows what's important for yours.
        </p>
        <p>
          We think your website is more than just a bunch of web pages. It's
          your home on the web. People find out about you, trust you, and choose
          to buy from you there.
        </p>
        <p>
          We know what Richmond businesses need because we are a web design team
          based in Richmond. We make websites that are simple, clean, and simple
          to use. That's not all we want to do for your site.
        </p>
        <p>
          We also want it to work well for your customers. We give each job the
          care it needs, whether it's for a small business or a well-known
          brand. This is why working with us is important:
        </p>
        <h6>Websites Built to Reflect Your Brand</h6>

        <p>
          Your site should show that your company is special. We don't use dull
          templates that make all of our sites look the same here at Kushel Digi
          Solutions. We instead make plans that are unique to your brand and
          match its voice, colors, and style.
        </p>

        <p>
          People should be able to tell who you are as soon as they go to your
          site. We listen to what you have to say and then produce a design that
          communicates directly to your audience. The styles, graphics, page
          flow, and calls to action are all carefully chosen. Your website won't
          seem like it's for everyone that way.
        </p>
        <p>
          A company-centered approach builds trust. People are more inclined to
          purchase from businesses that seem authentic and know what they're
          doing when they shop online.
        </p>
        <p>
          Our designs let you connect with people on a deeper level by showing
          what you stand for. We will make sure that your website not only looks
          amazing, but also feels like a part of your business
        </p>
        <h6> Mobile Responsive Designs That Work on Any Device</h6>
        <p>
          Most people visit websites these days on their phones or computers. If
          your site doesn't look good on small screens, people will leave it
          quickly. That's why our websites work well on all sorts of machine
          types. You can be sure that every customer, whether they use a PC,
          phone, or iPad, will have a great time.
        </p>
        <p>
          We put mobile first when we make things. We make sure your site loads
          quickly, keys are simple to press, and text is clear on small
          computers. Google likes websites that can be changed to fit different
          devices, so if your mobile users are happy, your ranking will go up.
        </p>
        <p>
          Trust is also a good thing. People are more likely to stay longer and
          come back again if they can quickly find what they need without having
          to zoom in or mess around.
        </p>
        <p>
          We make sure that everywhere your site works and looks good. Whether
          you make the device today or tomorrow, it will work with your picture.
        </p>

        <h6> E-Commerce Solutions That Drive Sales</h6>
        <p>
          Your website is your store if you let people buy things or hire you
          online. If a place is slow or hard to understand, people will leave.
          That's why our ecommerce sites are easy for people to use. It's easy
          and doesn't cause any stress to look at the things and pay for them.
        </p>
        <p>
          You can easily find your way around, pay without worry, and product
          pages load fast. All of these were set up by us. It's simple for
          customers to discover what they need, put it in their cart, and pay
          for it. We also make sure that people trust your store, which makes
          them more likely to give you their information.
        </p>
        <p>
          Products can be searched for, wish lists can be made, and notes can be
          written about products.. A lot of people shop on their phones these
          days, so we also make sites that work well on those. We want your
          store to look good and make more sales. People will want to buy things
          from your web store because it will look good and work well.
        </p>
        <h6>SEO-Friendly Designs That Rank Higher</h6>
        <p>
          If no one can find your website, it doesn't matter how nice it looks.
          That's why we think about SEO when we create. We make sure that our
          sites are search engine-friendly from the start. There should be clean
          code, quick load times, the right way to use names, and a style that's
          packed with keywords.
        </p>

        <p>
          If you follow SEO best practices, Google is more likely to send more
          people to your site.. That means you won't have to spend as much on
          ads and more people will find your business. We also set up safe links
          (HTTPS) and improved pictures, all of which search engines like. And
          we made styles that work well on phones.
        </p>
        <p>
          Another important part of SEO is customer service. If your site is
          simple to use and quick to load, people will stay on it longer. The
          search engines can see this and give you better results because of it.
          Kushel Digi Solutions will make things look good, but they will do
          more than that. Our sites are good for SEO, which means they will help
          your business get more users and be seen more often online.
        </p>
        <h6>Ongoing Care and Dependable Help</h6>
        <p>
          Making a website isn't enough. It needs help, care, and changes right
          away to stay in good shape. We don't just leave you when the job is
          done at Kushel Digi Solutions. We assure that your site will always be
          safe, perform properly, and be up to date.
        </p>
        <p>
          Our experts can assist you in updating things, correcting issues,
          backing it up, and keeping it secure. Don't worry about the IT
          portion; we'll handle everything. If something goes wrong, you can
          easily call or email us.
        </p>
        <p>
          We're ready to go in and deal with whatever comes up right now. As
          your company expands, we'll help you remain on pace, add new features,
          and make the site even better. We want to do more for you than merely
          serve you.
        </p>
        <p>
          We wish to be a partner you can trust for a long time. Don't worry;
          we'll take care of your website and make sure it functions correctly.
        </p>
        <p>
          When you work with our team, web design services Richmond are simple
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
