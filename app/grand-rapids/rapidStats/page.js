"use client";
import React from "react";
import "./rapidstats.css";
import Link from "next/link";

export default function RapidStatsService() {
  const stats = [
    {
      icon: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1758883187/coding_1_ssl8nd_qm9ao4.png",
      // sub: "eCommerce",
      title: "Grand Rapids Website Development",
      discp:
        "Your business will grow if you make websites that are up-to-date and simple to use. It looks good, works well, and was made just for you.",
      className: "card-blue",
      route: "/grand-rapids/grand-rapids-website-development",
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
          <h4>What Makes Our Website Development Services Different?</h4>
          <p>
            We're different at Grand Rapids website development because our
            websites do more than just look good. We make sites that are good
            for your business. We start from scratch with every site, making
            sure it works well on phones, loads fast, and is simple for search
            engines to find. This means that your customers can easily find you
            online and have a good time doing so on any device. Also, we take
            the time to learn about your goals so that we can make sure your
            website fits with your business and gets results. Our deals are easy
            for all kinds of businesses to get, and they come with reliable
            help. This makes building professional websites simple, useful, and
            open to everyone.
          </p>
        </section>
      </section>
    </>
  );
}
