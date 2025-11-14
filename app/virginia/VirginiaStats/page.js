"use client";
import React from "react";
import "./Richstats.css";
import Link from "next/link";

export default function VirginiaStatsService() {
  const stats = [
    {
      icon: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1758883187/coding_1_ssl8nd_qm9ao4.png",
      // sub: "eCommerce",
      title: "Web Development Company in Virginia",
      discp:
        "If you want web development services in Virginia that are made particularly for your company, you're at the correct spot. People will remember your online business, spend more, and have a better time overall if you make things easy for them.",
      className: "card-blue",
      route: "/virginia/web-development-company-in-virginia",
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
          <h4>Web Development That Gives Your Brand a Voice</h4>
          <p>
            We work with skilled developers to build Shopify sites and online
            businesses. We're here to help you create a great online store that
            is easy to use and will help you sell more as your company grows or
            gets started. You may change it to fit your company's demands since
            it is quick, safe, simple to grow, good for SEO, and very fast. We
            want to help you flourish online by making Shopify stores and online
            stores that are exactly right for your company. No time wasted at
            all. Take a look at our great web development company in Virginia
            that will make your business stand out.
          </p>
        </section>
      </section>
    </>
  );
}
