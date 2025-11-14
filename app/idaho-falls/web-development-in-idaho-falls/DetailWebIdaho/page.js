"use client";
import React, { useEffect, useRef, useState } from "react";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { toast } from "react-toastify";
import "./details.css";

import { useRouter } from "next/navigation";
import FormUSA from "@/app/COMMON/FormUSA";

export default function DetailWebIdaho() {
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
          Web Development in Idaho Falls – Turning Your Ideas into Powerful
          Websites
        </h4>
        <p>
          Are you in need of web development in Idaho Falls? You are in the
          right place. We help small businesses in the area make websites that
          are up-to-date, quick, and simple to use here at Kushel Digi
          Solutions.
        </p>
        <p>
          Your site should be good because many people will see it before they
          even learn about your business. Because of this, we focus on styles
          that are simple, quick, and easy for people to use.
        </p>
        <p>
          There is no difference between a small business just starting and a
          big business that is growing. Our team can make a website that fits
          your needs. We assist with everything, from making unique patterns to
          setting up online stores.
        </p>
        <p>
          Our websites are all mobile-friendly, safe, and search
          engine-friendly, so your customers can easily find you.
        </p>
        <p>
          Web creation in Idaho Falls is easy and stress-free when you work with
          Kushel Digi Solutions. We'll make a website that helps your business
          grow based on what you tell us.
        </p>
        <img
          src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1758873027/Web-Development-in-Idaho-Falls_ccs2cj.png"
          alt="web development in idaho falls"
        />

        <h5>How Can Our Web Development Services Help You in Idaho Falls?</h5>
        <p>
          We are happy to offer top-notch web development services in Idaho
          Falls to companies of all kinds here at Kushel Digi Solutions.
          Nowadays, it's not a choice to have a strong online presence—every
          business, no matter how big or small, needs to do it. Your website is
          often the first thing people see about your business.
        </p>
        <p>
          Our websites are always fresh, quick, flexible, and good for phones.
          We make sure that your guests will have a smooth time while they
          browse. We build new websites and improve old ones. We also make sure
          your site is safe, simple to use, and good for search engines.
        </p>
        <p>
          For dependable web creation in Idaho Falls, look no further. We can
          help your business stand out and do well online.
        </p>

        <h5>Our Website Development Services Include:</h5>
        <h6>Custom Website Development</h6>
        <p>
          Every business is different, and so are its web development needs.
          That's why we focus on making websites in Idaho Falls that are unique
          and perfect for your business. Our team doesn't use pre-made themes;
          instead, they make a site that fits your needs, your business, and
          what your customers expect.
        </p>
        <p>
          We dive into your business, figure out what makes it unique, and
          understand what your customers want. We make sure the website we build
          fits your business and gives everyone a great experience. Everything
          we do, from plans to features, is all about hitting a specific goal.
        </p>
        <p>
          We create websites that can evolve along with your business. Your site
          will be good to go whenever you feel like updating the content, adding
          cool new features, or kicking off some online sales.
        </p>
        <h6>E-Commerce Website Development</h6>
        <p>
          It's not enough to just list things online if you want to sell them.
          You also need to make sure that buyers have a great buying experience.
          We help Idaho Falls businesses make great online stores that make
          sales go through the roof and keep customers happy. We make e-commerce
          sites that are safe, easy to use, and made to make more sales.
        </p>
        <p>
          We make sure that your store works well on all devices, making it easy
          to find your way around and quick to check out. It will be easy for
          customers to look around, put items in their shopping carts, and pay
          without any worries. Some cool things about our site are that you can
          handle your goods, create accounts for customers, sort products, and
          use safe payment methods.
        </p>
        <p>
          No matter how many items you want to sell or how few, we can help you
          set up an e-commerce site that works for you. With our help, you can
          kick back and run your business while your online store sells things
          all the time. We can help you with all of your e-commerce needs when
          it comes to web building in Idaho Falls.
        </p>
        <h6>Mobile-Friendly Website Design</h6>
        <p>
          There are a lot of people who check websites on their phones or
          computers these days. These reasons make having a style that looks
          good on phones not just a choice, but a must. As part of our web
          creation in Idaho Falls, we make websites that are adaptable. This
          makes sure that your website looks great on all devices and works
          perfectly.
        </p>
        <p>
          Our expert team designs mobile-friendly websites because they are
          interesting to read and look stunning on small screens. We make sure
          faster loading of websites and look adaptable on all screen sizes.
          Users may navigate the site without zooming in or searching.
        </p>
        <p>
          This makes visitors pleased and helps your site rank higher on Google,
          which likes mobile-friendly sites. Many people buy things, read, and
          meet people online on their phones, so this tool helps your business
          stand out. We can help you make a website that looks great on any
          device, no matter where you are in Idaho Falls or the surrounding
          area.
        </p>
        <h6>SEO-Friendly Web Development</h6>
        <p>
          Cool websites are useless if no one can discover them. Every Idaho
          Falls website we build is SEO-friendly. We develop attractive websites
          that rank highly in search engines and attract the correct people.
        </p>
        <p>
          We ensure your website has tidy code, loads fast, and includes the
          right tags for search engines to get it easily. We keep the site style
          super user-friendly so folks want to stick around longer. These little
          but mighty pieces really boost search rankings.
        </p>
        <p>
          To boost your SEO plan, our crew also tweaks stuff like headers,
          images, and internal links right on the page. Your site will not just
          look awesome, but it'll also be solidly built so folks can enjoy it
          for a long time. If you go with us, we'll create a website for your
          business that really gets the job done. You'll totally stand out from
          the crowd with our SEO-focused web design in Idaho Falls.
        </p>
        <h6>Website Maintenance & Support</h6>
        <p>
          It's not enough to just keep your website safe, fast, and up to date;
          it needs regular care. Well, that's why our web design services in
          Idaho Falls are here to help you with your site. Of course, you should
          check your website often, just like you would any other device.
        </p>
        <p>
          You don't have to worry about any of that since our staff will make
          modifications, check for security, back up, and address issues. If
          something goes wrong, please call us right away and we'll fix it. This
          keeps your customers pleased and your website current with what your
          company needs.
        </p>
        <p>
          No need to worry about tech issues as long as everything works fine.
          Do what you do best. We make our services fit your needs, whether you
          need repair help once a month or once a week. Don't worry, working
          with us will make your website look great. We can keep your Idaho
          Falls website up and running with our upkeep services if you need
          reliable web design.
        </p>
        <h6>CMS Development</h6>
        <p>
          It should be easy to run a website, even if you're not tech-savvy. CMS
          (Content Management Systems) are a big part of our web design services
          in Idaho Falls because of this.
        </p>
        <p>
          You don't need to learn coding at all; CMS systems help you with
          everything. You may alter the text, photographs, or add new blog
          articles to your goods with only a few clicks. You may know WordPress,
          Joomla, and Drupal as content management systems (CMS). We work with
          these and can change them to fit your needs. You or your staff will
          also be taught by our team how to use the system safely, so you stay
          in charge of your website.
        </p>
        <p>
          A CMS-powered site saves you time, money and gives your business more
          options. You will no longer need a writer for every little change.
          When we do CMS creation in Idaho Falls, we give you a website that is
          both powerful and easy to run. This keeps your business up to date and
          useful.
        </p>
        <h5>Why Should You Choose Our Web Development Services?</h5>
        <p>
          It's important to choose the right partner for your website. Your
          website is more than just an ad; it's how people find out about your
          business on the web. You need a staff that understands what you
          require and can provide you more than just a pretty website for this
          reason.
        </p>
        <p>
          We make sure that the websites we build for you look amazing, are easy
          to use, and get results because they are made just for you. We don't
          simply construct websites; we also make sure they load fast, are
          secure, and are ideal for search engines.
        </p>
        <p>
          No matter if you need a new site or just want to change the way the
          one you already have looks, our team will make sure that it stands for
          your brand perfectly online.
        </p>
        <p>
          We'll find you a partner you can trust, who is smart, and who wants
          you to do well. This is why it might be best for your business to hire
          our web building services.
        </p>
        <h6>Tailored Solutions for Your Business</h6>

        <p>
          Websites for businesses shouldn't be the same, since each one is
          unique. We work hard to make solutions that are just right for you,
          which is one of the best things about our web design services. When we
          make websites, we don't use a standard layout. Instead, we make them
          fit your goals, brand, and community.
        </p>

        <p>
          We start by getting to know your business. We check out what you
          offer, the people who buy it, and your online goals. Then we build a
          website that brings those ideas to life. The style and parts of your
          site were picked out with care so that it will stand out and do what
          you want it to do.
        </p>
        <p>
          A local restaurant might need an easy-to-use online menu and ordering
          system. An e-commerce business, on the other hand, might need a safe
          way to check out and look for products.
        </p>
        <p>
          Everything is made to meet your wants. That's not all you get when you
          work with us. We make a technology product that helps you do well.
        </p>
        <h6>Mobile-friendly and Easy-to-Use Design</h6>
        <p>
          Most people use their phones or computers to browse the web these
          days. That's why we make sure each website is mobile-friendly and
          simple to use. Your site will look great on any device if you hire us
          to create it.
        </p>
        <p>
          You need to make it easy for people to find what they need on your
          website as well as making it look good. Websites that are easy to use,
          have lots of choices, load fast, and look good keep people interested.
        </p>
        <p>
          This helps both your guests and your business. Click-through rates go
          up on sites that are easy to use and mobile-friendly, while bounce
          rates go down. In other words, more people will stay, look around, and
          then act.
        </p>
        <p>
          We think that everyone should be able to use your site, no matter what
          screen they're on. Whenever we work on a project, we make sure it
          looks good on phones and is easy for people to use.
        </p>

        <h6>SEO-Friendly Development</h6>
        <p>
          Your site is only gonna be helpful if folks can actually find it, no
          matter how awesome it looks. That's where our site's SEO-friendly vibe
          really stands out. We think about SEO from the very beginning when we
          build your website for you.
        </p>
        <p>
          Search engines will love your site if you give each page a good name,
          keep your code clean, and make sure your pictures are well-written.
          People will be able to find you more easily in the future. We only
          need to make sure that everything works well, looks great, and meets
          all the SEO requirements.
        </p>
        <p>
          Extra people looking for information, goods, or services are more
          likely to visit your site if it is SEO-friendly. This will bring in
          more people, leads, and business possibilities over time. We’ve got
          way more to offer than just a nice-looking website. We ensure the
          right people take a look at your business.
        </p>
        <h6>Dependable Maintenance and Support</h6>
        <p>
          After designing a website, we make sure it works well on all devices.
          When you hire us to make your website. We'll handle all the technical
          details. We keep your website in terrific form by making sure it
          always looks beautiful, is secure, is up, and operates correctly.
        </p>

        <p>
          We're ready to get in and deal with everything that comes our way
          straight now. You don't have to worry about computer difficulties
          getting in the way of your work. As your business grows, we'll assist
          you add new features, keep things on schedule, and make the site work
          even better. We don't only want to provide a service; we want to be a
          partner you can trust for a long time. You may rest knowing that we
          will take care of your website and make sure it works at its best.
        </p>

        <h6>Affordable and Transparent Pricing</h6>
        <p>
          It doesn't have to spend a lot of money to build a site. For good web
          building services, we think it's important to charge fair prices. That
          means there aren't any surprises or hidden costs. Just clear prices
          that are right for what you get.
        </p>
        <p>
          We can change our deals to fit your needs because we know that every
          business has a different budget. No matter what their needs are, we
          can make a system that works for both small and big businesses.
        </p>

        <p>
          We're different because we're honest. We have clear terms about what
          you pay for and what you get. You'll know for sure how much it will
          cost and how long it will take right away.
        </p>
        <p>
          The main thing we want to do is finish what we started today. Any kind
          of business can hire us to make a professional website because our
          prices are low and the work is good. When you buy something from us,
          you know you'll get a good deal.
        </p>
        <p>
          Web development in Idaho Falls is easy and doesn't stress you out when
          you work with our team. We'll make a website for you that works well
          and makes your business look great online. Just tell us what you have
          in mind.
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
