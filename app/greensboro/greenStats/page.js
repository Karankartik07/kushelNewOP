"use client";
import React from "react";
import "./greenstats.css";
import Link from "next/link";

export default function GreenStatsService() {
  const stats = [
    {
      icon: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1758883187/coding_1_ssl8nd_qm9ao4.png",
      // sub: "eCommerce",
      title: "Web Development Greensboro",
      discp:
        "Look into web development options that are made to meet the demands of your business. Getting new users, meeting interesting individuals, and making your online presence stronger is easy.",
      className: "card-blue",
      route: "/greensboro/web-development-greensboro",
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
          <h4>Smart Web Development for Greensboro Businesses</h4>
          <p>
            As a reliable web development Greensboro, our professional workers'
            primary duty is to build online stores. We can help you make your
            online store look good, work effectively, and sell more. Our
            ecommerce sites are quick, secure, simple to use, and customizable.
            They are also wonderful for SEO, which means your company may expand
            as much as it wants. We build unique online stores that help you
            realize your objectives and provide you with the tools you need to
            succeed online. There won't be any spam or buzzwords here. The site
            will only function for you. Let's make your website better so it
            appears nicer and is more useful!
          </p>
        </section>
      </section>
    </>
  );
}
