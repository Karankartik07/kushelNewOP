"use client";
import React from "react";
import "./losstats.css";
import Link from "next/link";

export default function LosStatsService() {
  const stats = [
    {
      icon: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1758883199/coding_2_lmrkvr_kswldj.png",
      // sub: "eCommerce",
      title: "Web Design Company Los Angeles",
      discp:
        "You should get web design services that are made to fit your wants. It is easy to build your business, make more money, and give your customers a better experience online.",
      className: "card-blue",
      route: "/los-angeles/web-design-company-los-angeles",
    },
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
          <h4>Build Your Brand Stronger with Smart Web Design</h4>
          <p>
            Our team is comprised of specialists whose primary responsibility is
            to create websites for customers who are in business. We are able to
            assist you in developing an online shop that not only looks
            beautiful but also functions better and generates more revenue for
            you, regardless of the kind of company that you operate. They work
            quickly, safely, easily, and are good for SEO. They can also grow
            with your business. Our main goal is to make a great website that
            works well for you so that your business can do well online. We
            would love to help you make your online business stand out. We are
            the best web design company Los Angeles.
          </p>
        </section>
      </section>
    </>
  );
}
