"use client";
import React from "react";
import "./omahastats.css";
import Link from "next/link";

export default function OmahaStatsService() {
  const stats = [
    {
      icon: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1758883199/coding_2_lmrkvr_kswldj.png",
      // sub: "eCommerce",
      title: "Web Design in Omaha",
      discp:
        "You're at the right place if you need web design services in Omaha that are customized just for your business. If you make things simple for people, they will remember your online company, spend more, and have a better experience overall.",
      className: "card-blue",
      route: "/omaha/web-design-in-omaha",
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
          <h4>Web Design That Lets Your Brand Speak</h4>
          <p>
            Our staff of professional developers helps us build websites and
            operate businesses online. With our aid, your online store will be
            fantastic, easy to use, and valuable for everyone. This can help you
            sell more when your business expands or starts off. It's quick,
            safe, easy to build, great for SEO, and very fast, so you can change
            it to fit your business. We want to help your online business grow
            by giving you the best Shopify store and site. There was truly no
            time lost. We offer great web design in Omaha that can make your
            business stand out.
          </p>
        </section>
      </section>
    </>
  );
}
