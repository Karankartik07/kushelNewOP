"use client";
import React from "react";
import "./auststats.css";
import Link from "next/link";

export default function AustStatsService() {
  const stats = [
    {
      icon: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1758883199/coding_2_lmrkvr_kswldj.png",
      // sub: "eCommerce",
      title: "Website Design Austin",
      discp:
        "Looking for a website designer to create unique websites for your business. You are in a right spot. New sites that are easy to use will help your business grow. It works well, looks good, and was made just for you. ",
      className: "card-blue",
      route: "/austin/austin-website-design",
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
          <h4>What's Different About How We Build Websites?</h4>
          <p>
            We stand out because our Website Design Austin does more than just
            look good. Our sites are good for your business. Every site is made
            from scratch, and we make sure it loads quickly, looks good on
            phones, and is easy for search engines to find. This means that your
            customers can easily and on any device find you online. To make sure
            your website works for your business, we also take the time to learn
            about your goals. Our deals are easy for any business to get, and
            they come with good help. Anyone can use this to make stylish
            websites that are simple to put together and useful.
          </p>
        </section>
      </section>
    </>
  );
}
