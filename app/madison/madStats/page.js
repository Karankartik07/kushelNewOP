"use client";
import React from "react";
import "./madstats.css";
import Link from "next/link";

export default function MadStatsService() {
  const stats = [
    {
     
      icon: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1758883187/coding_1_ssl8nd_qm9ao4.png",
      // sub: "eCommerce",
      title: "Web Development Madison WI",
      discp:
        "Websites that are new and simple to use will help your company grow. It looks good, works well, and was made just for you.",
      className: "card-blue",
      route: "/madison/web-development-madison",
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
          <h4>What's Different About Our Website Development?</h4>
          <p>
            Our Web Development Madison WI does more than just look good, which
            makes us stand out. Our websites are good for your company. We start
            from scratch with every site and make sure it works fast, looks good
            on phones, and is simple for search engines to find. This means that
            it's easy for your customers to find you online and that they can do
            it on any device. We also take the time to learn about your goals so
            that we can make sure your website works for your business. Any kind
            of business can easily get our deals, and they come with good help.
            Anyone can use this to make professional websites that are easy to
            make and useful.
          </p>
        </section>
      </section>
    </>
  );
}
