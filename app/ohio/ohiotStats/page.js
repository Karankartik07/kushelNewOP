"use client";
import React from "react";
import "./ohiostats.css";
import Link from "next/link";

export default function OhioStatsService() {
  const stats = [
    {
      icon: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1758883199/coding_2_lmrkvr_kswldj.png",
      // sub: "eCommerce",
      title: "Web Design Columbus Ohio",
      discp:
        "We build tailor-made websites that suit your business objectives and contribute to your networking to the right people through the web.",
      className: "card-blue",
      route: "/ohio/web-design-columbus-ohio",
    },
    // {
    //   icon: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1758883199/coding_2_lmrkvr_kswldj.png",
    //   // sub: "eCommerce",
    //   title: "Ecommerce Development Ohio",
    //   discp:
    //     "We build tailor-made websites that suit your business objectives and contribute to your networking to the right people through the web.",
    //   className: "card-blue",
    //   route: "/ohio/ecommerce-development-ohio",
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
          <h4>Why Choose Our Web Development Services in Ohio?</h4>
          <p>
            Kushel Digi Solutions designs websites and online environments that
            are better than mere visual aesthetics—they bear the power of
            engaging with your customers, climbing your rung on the brand
            hierarchy, and delivering tangible, measurable outcomes to your
            enterprise. If you are a startup in need of the initial mark on an
            online website or desire to elevate a current stand-alone business,
            our specialists stir up facilitating creativity with technology to
            bring your dream to life. Choosing a web design Columbus Ohio
            company like us ensures that your online presence is strategically
            built for success, growth, and lasting impact.
          </p>
        </section>
      </section>
    </>
  );
}
