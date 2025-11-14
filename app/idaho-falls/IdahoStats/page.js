"use client";
import React from "react";
import "./dhabistats.css";
import Link from "next/link";

export default function IdahoStatsService() {
  const stats = [
    {
      icon: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1758883187/coding_1_ssl8nd_qm9ao4.png",
      // sub: "eCommerce",
      title: "Web Development in Idaho Falls",
      discp:
        "Making websites that are up-to-date and easy for people to use will help your business grow. It's professional, dependable, and made to fit your wants.",
      className: "card-blue",
      route: "/idaho-falls/web-development-in-idaho-falls",
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
          <h4>What Makes Our Web Development Services Special?</h4>
          <p>
            Our web development in Idaho Falls stands out because we make
            websites that do more than just look good. We make websites that
            help your business. We make each site from scratch, making sure it
            works well on mobile devices and is fast and search engine friendly.
            This means that your customers can easily find you online and have a
            great time looking on any device. We also take the time to learn
            about your goals so that your website fits with your brand and gets
            results. Our deals are easy for businesses of all kinds to buy and
            come with reliable help. This makes professional web creation
            simple, effective, and open to all.
          </p>
        </section>
      </section>
    </>
  );
}
