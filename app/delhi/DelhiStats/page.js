"use client";
import React from "react";
import "./noidastats.css";
import Link from "next/link";

export default function DelhiStatsService() {
  const stats = [
    {
      icon: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1758883134/Group_1171281752_as3wvy_oiwjvj.png",
      // sub: "eCommerce",
      title: "E-Commerce Development Company in Delhi",
      discp:
        "We make custom e-commerce sites that are easy for people to use and help your business grow by getting more customers and more online sales.",
      className: "card-blue",
      route: "/delhi/ecommerce-development-company-in-delhi",
    },
    {
      icon: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1758883126/Group_1171281751_lgbsp9_vvktap.png",
      // sub: "BigCommerce",
      title: "BigCommerce Development Company in Delhi",
      discp:
        "You can customize BigCommerce solutions to meet the needs of your business. These solutions are built to help you sell more online and grow faster.",
      className: "card-yellow",
      route: "/delhi/bigcommerce-development-company-in-delhi",
    },
    {
        icon: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1758883199/coding_2_lmrkvr_kswldj.png",
        // sub: "Shopify",
        title: "Website Designing Company in Delhi",
        discp:
            "If you hire web designers, it will be easier for you to get the site up and running. It is much easier to grow your business, make more money, and give better service to your customers when you start your business online.",
        className: "card-green center-item-noida ",
        route: "/delhi/website-designing-company-in-delhi",
    },
  ];
  return (
    <>
      <section className="main-stats-sec">
        <h3 className="service-heading">Our Services</h3>
        <section className="stats-section-delhi">
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
              <p className="ptag-service">{stat.discp}</p>
              <Link href={`${stat.route}`}>
                {" "}
                <button className="btn-service-visit">View More</button>
              </Link>
            </Link>
          ))}
        </section>

        <section className="service-sec2">
          <h4>How Do We Specialize in E-Commerce Development Services?</h4>
          <p>
            In today's digital world, a great e-commerce website is no longer a
            luxury; it's a need. An online shop may help you get more consumers
            and expand quicker, whether you're a little company or a well-known
            brand. That's when Kushel Digi Solutions comes in. We don't simply
            make websites; we help your business develop online. We can create
            unique web storefronts for your company using platforms like
            Shopify, WooCommerce, and BigCommerce. We want our website to be
            easy to use, load quickly, have a safe checkout, and make buying
            easy. Kushel Digi gives you more than just a website; it gives you a
            robust e-commerce solution that can help your company grow.
          </p>
        </section>
      </section>
    </>
  );
}
