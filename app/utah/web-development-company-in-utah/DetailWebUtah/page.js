"use client";
import React, { useEffect, useRef, useState } from "react";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { toast } from "react-toastify";
import "./details.css";

import { useRouter } from "next/navigation";
import FormUSA from "@/app/COMMON/FormUSA";

export default function DetailWebUtah() {
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
          Web Development Company in Utah – Where Innovation Meets Performance
        </h4>
        <p>
          Are you in search of a personalized web development company in Utah to
          represent your business? At Kushel Digi Solutions, we don't only
          create websites; we create brands too through our expertise. We
          provide solutions for startups, emerging companies, and established
          businesses; in essence, we solve many problems by designing digital
          experiences that symbolize your true self and most importantly deliver
          real results.
        </p>
        <p>
          From site design to possessing models with bespoke e-commerce
          websites, our solutions are tailored in our inner walls; from chic
          corporate websites to heavy eCommerce platforms, it talks genuinely
          about business objectives, customer population, and a persona all its
          own — thus completely tailored solutions. Of course, be it basic full
          responsive sites or performance-oriented feature-rich sites, the team
          has scalability, performance and conversions, on the number one list.
        </p>
        <p>
          It is performance optimized and designed to provide a smooth and slick
          experience on desktops, tablets, and even smartphones. Websites that
          we create build a solid foundation which makes for a secure and
          easy-to-manage environment. Payment integration, updating the
          content-It is all an end-to-end solution that not only assists in
          operations but also customer satisfaction. It, therefore, supplements
          what we do post-launch support, maintenance, and updates. Periodic
          updates and revisions keep on refining your site in order to keep your
          business at the forefront of the competitive, cutthroat market. With-8
          years of experience as a business partner for most industries-Kushel
          Digi Solutions has established itself in the market with a legacy of
          feathered successful projects. They use the correct technology and
          merge it with the flair required to drive your digital expansion.
        </p>
        <p>
          Let's create a site that your customers will want and your competitors
          will be jealous of. Contact us today!
        </p>
        <img
          src="https://res.cloudinary.com/dxlykgx6w/image/upload/v1758713394/web-development-company-in-utah_bf40sd.jpg"
          alt="web development company in utah"
        />

        <h5>How Are You Going to Benefit with Our Web Development Services</h5>
        <p>
          As the best web development agency in Utah, we don't just build
          websites. We are offering full digital solutions that ensure success
          of your online business. You need nothing but what our services offer:
          the hassle-free operations.
        </p>
        <p>
          Whether it is in beautiful designs or secure forms of payment, we have
          got it in web development. Our websites are simple to operate, SEO
          optimized, and built with your growth- whether it is via more traffic,
          engagement, or conversions.
        </p>
        <p>Our Web Development Services Include:</p>

        <h6>Custom Website Design</h6>
        <p>
          Your website should voice your brand and you. We create distinctive
          websites, focused on conversions and customized to your customer
          requirements and goals. From the structure of web pages to
          call-to-action buttons -all designed to get you results. Little by
          little.
        </p>
        <h6>E-Commerce Development</h6>
        <p>
          From payment to product catalogs, we build solid online stores to
          simplify your management and drive your sales to the max. Our
          eCommerce solution is designed with scalability, velocity, and
          user-friendly customer experiences in mind.
        </p>
        <h6>Mobile-Responsive Platforms</h6>
        <p>
          Rest assured, each site is mobile responsive and it is optimized
          across all devices, so navigation becomes easy whether the customer is
          sitting in front of a desktop, on tablet or smart phone.
        </p>

        <h6>SEO-Friendly Structure</h6>
        <p>
          Constructing a site in the optimum SEO best practices, expanded
          visibility would provide the scope for your business that would
          attract a greater number of qualified customers.
        </p>
        <h6>Continuation in Support and Maintenance.</h6>
        <p>
          Besides the simple launching, we also offer updates, performance
          updates as well as technical support frequently to ensure that your
          site is incredibly fast, secure, and future-proof.
        </p>
        <h6>Our Web Development Services</h6>
        <p>
          At Kushel Digi Solutions, we know that your website is, in fact, much
          more than a set of web pages; it is your firm in cyberspace, a digital
          introduction that greets the world on your behalf. In a bustling and
          competitive business market like Utah, a company's website can
          virtually make or break it. A good, working website, and an optimized
          one, has ceased to be a luxury but rather the name of a game nowadays.
        </p>
        <p>
          Therefore, we are a team that is vigorously engaged in providing
          end-to-end web development solutions interspersed with creativity,
          technology, and business strategies. From highly customized websites
          that fit your branding to flexible e-commerce solutions with secure
          payment gateways and long-term maintenance, we build websites that not
          only look awesome but also have measurable returns.{" "}
        </p>
        <h6>Custom Website Design</h6>
        <p>
          A cookie-cutter site constructed from a mass-produced template will
          not accurately convey your brand's personality. At Kushel Digi
          Solutions, we make sure that we take time to design customized
          websites that will have your own vision, values and goals.
        </p>
        <p>
          We begin by taking an in-depth discovery of your brand. We do consumer
          research on your target audience, competitive analysis and get to know
          the emotional triggers that motivate customers. Based on these
          results, our designers will create a unique online experience that
          will attract your visitors.
        </p>
        <ul>
          We focus on:
          <li>
            Beautiful, contemporary designs that attract visitors and engage
            them.
          </li>
          <li>Logical navigation patterns that minimize bounce rates.</li>
        </ul>
        <p>
          Our solutions may vary depending on whether you are a startup needing
          lean and efficient design or an established corporation needing a
          multi-layered site with complex functionality. For example, a single
          restaurant in Utah might need a plain and simple online presence with
          a reservation system, while a health care facility might need some
          sort of patient portal and secure data forms to go along with it.
        </p>

        <h6>E-Commerce Development</h6>
        <p>
          E-commerce is not a choice anymore, it is a business in future. The
          manner in which customers are shopping has entirely changed and
          customers today are demanding instant, secure and uncomplicated online
          transactions at all stages of the process. A business that lacks an
          effective e-commerce face is at a risk of being sidelined in an
          environment where convenience and credibility are the deciding
          process. We help businesses at Kushel Digi Solutions to make that,
          intuitive, reliable, and scalable digital shopping platforms, a
          reality.
        </p>
        <p>
          Our e-commerce solutions will be tailored in such a way that they will
          be usable, satisfy customers and generate revenue. We do not simply
          establish an online store, we build digital ecosystems to foster
          repeat business as well as to build brand loyalty.
        </p>
        <h6>Some of the products that we are offering are:</h6>
        <p>
          Easy wishes without issue product catalogs that allow companies to
          add, edit or update stock within a flash even to non-technologically
          minded users.
        </p>
        <ul className="list-disc px-5">
          <li>
            Safe and customizable payment connections with mainstream gateways
            such as PayPal, Stripe, Razorpay, UPI, electronic wallets and net
            banking provide secure and convenient checkout to consumers.
          </li>
          <li>
            Streamlined checkout processes that reduce resistance and cart
            abandonment, offering the user a faster and smoother path to the
            buy.
          </li>
          <li>
            You can easily scale up your business using popular online commerce
            platforms like Shopify, WooCommerce, Magento, and BigCommerce with
            the help of offers.
          </li>
        </ul>
        <p>
          Besides these advantages, speed, stability, and friendliness to mobile
          are all that we extend optimization to in all our e-commerce
          storefronts to ensure that our clients have a smooth experience as
          they browse and conduct business on any device.
        </p>
        <p>
          Recently, we assisted a start-up in the apparel sector from Utah in
          setting up a Shopify store coupled with a feature of automatically
          tracking their inventories. This has been able to cut down almost 60%
          of their workload, thus freeing their minds to strategize on growth
          planning. Within just six months, sales for the startup increased up
          to 40%, showing that a good e-commerce setup indeed does miracles.
        </p>
        <h6>Mobile-Responsive Platforms</h6>
        <p>
          Kushel Digi Solutions recognizes that establishing business online is
          not an end in itself but to also give them scalable solutions so that
          they can stay competitive even in a digital-first economy.
        </p>
        <p>
          A mobile-responsive platform. Since over 70% of internet traffic is
          sourced from mobile devices, having a successful performance on site
          from mobile makes the site completely functional. Kushel Digital
          Solutions operates from a mobile-first design and development
          approach, equipping itself so that the entire site is functional with
          smartphones, tablets, and desktops.
        </p>
        <ul className="list-disc px-5">
          Some advantages include:
          <li>
            Higher speeds, which are very useful for mobile users with a
            low-speed network.
          </li>
          <li>Touch-friendly interface with big buttons and easy fill-outs.</li>
        </ul>

        <p>
          Imagine a customer looking for either your services while on the
          road-if your site is not mobile-friendly, you will lose that lead. Our
          responsive Websites will ensure that the surf is smooth, which may
          lead to better customer satisfaction and ultimately more conversions.
        </p>
        <h6> SEO Friendly Web Architecture </h6>
        <p>
          A website that looks good is of no use if no one sees it. This is why
          we embed the best practices of SEO in our development.
        </p>
        <p>We developed the sites with:</p>
        <ul className="list-disc px-5">
          Clean and keyword rich as far as URL structures;
          <li>Meta tags, Title and Schema markup are all optimized.</li>
          <li>
            Super-fast loading pages-users and search engines alike love them.
          </li>
          <li>Mobile friendly designs continue to Google ranking algorithm.</li>
        </ul>
        <p>
          SEO-empower intelligent designs, then, it would further buttresses
          your site on searches, quality traffic, and increased
          cross-selling-with the example of Salt Lake City law firm increasing
          its organic lead by 120% after we redesigned their site architecture
          led by SEO.
        </p>
        <h6>Secure Payment Integration </h6>
        <p>
          Trust is a dollar's worth, but commerce weighs less than a grain. Only
          then will the users spend when they are convinced that their financial
          and personal details are safe. Therefore, we offer secure and also
          flexible payment gateways on which users feel a bit ease.
        </p>
        <ul className="list-disc px-5">
          Our offers are as follows:
          <li>
            SSL certification and encryption for securing sensitive data;{" "}
          </li>
          <li>Contained within your code are fraud prevention mechanisms; </li>
          <li>
            Proper PayPal, Stripe, Razorpay, UPI, Wallets and net banking, etc.
          </li>
        </ul>
        <p>One-page fast checkout for managing the order. </p>
        <p>
          For example, by using our simple yet secure payment process, the
          online jewellery brand we partnered with saw their completion rates
          climb by 35%.
        </p>
        <h6>Product & Inventory Management </h6>

        <p>
          Inventory Management shouldn't be an everyday nightmare. We have
          designed our product management tools to work for you.
        </p>
        <p>
          Some features include: Simple dashboards for adding or editing items.
          Multiple product photos, prices, and variances allow for flexibility.
          Automated low-stock notifications signal to you that it's time to
          restock. Intelligent tagging and categorization improve user searches.
          Integrate with actual ERP and Accounting systems, thereby
          synchronizing real-time Finance, Inventory, and Sales. For instance, a
          Utah electronics retailer reduced errors by 75% in inventories once we
          embedded automatic product synchronization with his ERP system.
        </p>
        <h6>Update and Migration Services </h6>
        <p>
          In fact, things are fast-changing in the technology world; hence, the
          site should keep pace with it. We can upgrade and migrate as per
          requirements if the current platform is slow, outdated, or somewhat
          restrictive.{" "}
        </p>
        <ul className="list-disc px-5">
          Our procedure includes:
          <li>
            Client information and product data, transforming completely,
            without loss.
          </li>
          <li>
            Maintain SEO so that rankings from search engines are preserved
            through migration.
          </li>
          <li>Theme duplication or adaptations for a new look.</li>
          <li>
            No or minimal downtime hence no interference with business
            operation.
          </li>
        </ul>
        <p>
          WooCommerce to Shopify Migration or Magenta to BigCommerce Upgrading,
          we do it easily. Countless Utah companies trust us to give their
          modern facelift to online platforms without destroying their identity.
        </p>
        <h6>Post-Launch Support & Maintenance </h6>
        <p>
          The life of a site begins once it is launched. Post launch, we offer
          complete support. For the security, speed and competitiveness in the
          site, all of these forms part of the post-launch offer.
        </p>
        <ul className="list-disc px-5">
          Our super post-launch maintenance includes:
          <li>Regular backups and fixes for bugs</li>
          <li>Regular security scans </li>
          <li>Constant monitoring of security </li>
          <li>Speed optimization and testing of performance </li>
        </ul>
        <p>
          Content updating seasonal offering and implementations of new
          features.
        </p>
        <p>
          That proactive support would mean there is never downtime or old
          plugins. You would find in us a long-term digital business partner
          ensuring the growth of the website along your business.
        </p>
        <h6>
          Why Kushel Digi Solutions For Your Utah web development company.{" "}
        </h6>
        <p>
          Everlasting success comes from choosing the right web development
          company in Utah. Nevertheless, the Utah businesses prefer to bleed
          profusely with us due to:
        </p>
        <ul>
          <li>
            {" "}
            <strong>Tailor-Made Solutions-</strong> One size does not fit all;
            each will be uniquely different.{" "}
          </li>
          <li>
            {" "}
            <strong>Mobile-First Development-</strong> Excellent user experience
            on every device.{" "}
          </li>
          <li>
            {" "}
            <strong>SEO Optimized Builds-</strong> Sites rank higher with better
            leads.{" "}
          </li>
          <li>
            {" "}
            <strong>Secure & Scalable Platforms-</strong> The future is rosy
            phases ahead in growth.
          </li>
          <li>
            {" "}
            <strong>Clear in Processes-</strong> Transparent communication,
            communicated timelines, and no surprises.
          </li>
          <li>
            {" "}
            <strong>Long-Term Partnership-</strong> Ongoing support and upgrades
            after the initial launch
          </li>
        </ul>
        <p>
          Unlike most of the other agencies, we keep our doors open even after
          the first launch of the site. We're there with you the whole way.
        </p>

        <h6>Now Let's Build Your Digital Future </h6>
        <p>
          Your digital anchor is your website. In this very competitive business
          climate of Utah, speed, security, and ease are what clients want. Even
          the best business will run behind the others without it.
        </p>

        <p>
          Kushel Digi Solutions blends creativity with technical know-how and a
          business graph to develop websites which are aesthetically appealing
          and technically sound and meant for purposes of business. Whether you
          are starting with a first website or are building high-end solutions
          for an established corporate entity, as the best web development
          company in Utah, we turn your ideas into reality.
        </p>

        <p>
          Contact Kushel Digi Solutions today and start building your digital
          future.
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
