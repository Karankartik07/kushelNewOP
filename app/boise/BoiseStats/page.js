"use client";
import React from "react";
import "./dhabistats.css";
import Link from "next/link";

export default function BoiseStatsService() {
  const stats = [
    {
      icon: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1758883187/coding_1_ssl8nd_qm9ao4.png",
      // sub: "eCommerce",
      title: "Web Development in Boise",
      discp:
        "If you're looking for web development options in Boise tailored just for your business, you've come to the right place. If you keep things simple for folks, they'll remember your online store, buy more, and just have a better experience overall.",
      className: "card-blue",
      route: "/boise/web-development-in-boise",
    },
    // {
    //   icon: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1758883126/Group_1171281751_lgbsp9_vvktap.png",
    //   // sub: "BigCommerce",
    //   title: "BigCommerce Development Company in Dubai",
    //   discp:
    //     "You can customize BigCommerce solutions to meet the needs of your business. These solutions are built to help you sell more online and grow faster.",
    //   className: "card-yellow",
    //   route: "/dubai/bigcommerce-website-development-dubai",
    // },
    // {
    //     icon: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1758883134/Group_1171281753_eqcabi_tptr06.png",
    //     // sub: "Shopify",
    //     title: "Shopify Development in Dubai",
    //     discp:
    //         "Launch a stunning Shopify store tailored to your brand and goals. From custom themes to smart integrations, we turn clicks into customers.",
    //     className: "card-green center-item-noida ",
    //     route: "/dubai/shopify-web-development-services-dubai",
    // },
  ];
  return (
    <>
      <section className="main-stats-sec">
        <h3 className="service-heading">Our Services</h3>
        <section className="stats-section-dhabi">
          {stats.map((stat, index) => (
            <Link
              href={`${stat.route}`}
              key={index}
              className={`stat-card-noida ${stat.className}`}
            >
              <div className="stat-icon">
                <img src={stat.icon} alt="icon" />
              </div>
              <div className="service-title">
                <span>{stat.title}</span>
                {/* <h3>{stat.title}</h3> */}
              </div>
              <p className="ptag-service-dhabi">{stat.discp}</p>
              <Link href={`${stat.route}`}>
                {" "}
                <button className="btn-service-visit">View More</button>
              </Link>
            </Link>
          ))}
        </section>

        <section className="service-sec2">
          <h4>Professional Web Development can Change your Brand</h4>
          <p>
            We team up with talented coders to create web stores and Shopify
            storefronts. We’re here to help you create an awesome online store
            that’s super user-friendly and helps boost your sales as your
            business takes off or gets rolling. They can tweak it to match your
            business needs since it’s fast, secure, easy to scale, great for
            SEO, and super quick. We’re here to help you succeed online by
            creating Shopify shops and ecommerce sites tailored just for your
            business. No time wasted at all. The online business just wants to
            succeed. Check out our awesome web development in Boise that will
            help your brand shine.
          </p>
        </section>
      </section>
    </>
  );
}
