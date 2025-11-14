"use client";
import React from "react";
import "./huststats.css";
import Link from "next/link";

export default function HustStatsSrvice() {
  const stats = [
    {
      icon: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1758883199/coding_2_lmrkvr_kswldj.png",
      // sub: "eCommerce",
      title: "Web Design Houston",
      discp:
        "Looking for a reliable web design service in Houston? You are in the right spot. We design custom websites for your business.  It's better for everyone if your online store is easy to use. People will remember it, buy more, and also have more fun.",
      className: "card-blue",
      route: "/houston/web-design-houston",
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
          <h4>
            Build, Design, and Grow with Houston’s Trusted Web Design Company
          </h4>
          <p>
            We work with a skilled team to make web stores and Shopify sites. We
            can help you make a great online store that people will love and
            that will help your sales grow as your business does. It's quick,
            safe, easy to scale, great for SEO, and quick, so we can change it
            to fit your business. When you work with us, we'll make Shopify
            stores and shopping sites that work great for your business. We
            didn't waste any time. The online company only wants to do well.
            Check out our great web design Houston that will make your brand
            stand out.
          </p>
        </section>
      </section>
    </>
  );
}
