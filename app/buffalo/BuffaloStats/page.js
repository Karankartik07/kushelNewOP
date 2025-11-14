"use client";
import React from "react";
import "./buffalostats.css";
import Link from "next/link";

export default function BuffaloStatsService() {
  const stats = [
    {
      icon: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1758883187/coding_1_ssl8nd_qm9ao4.png",
      // sub: "eCommerce",
      title: "Web Development in Buffalo",
      discp:
        "Check out web development solutions that are designed to fit your business needs. It's easy to connect with more visitors, meet awesome people, and boost your online presence.",
      className: "card-blue",
      route: "/buffalo/web-development-in-buffalo",
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
          <h4>Professional Web Development can Change your Brand</h4>
          <p>
            As a reliable web development in Buffalo, our skilled developers
            build e-commerce websites as their main job. We can help you build
            an online shop that looks good, performs well, and sells more. Your
            business may grow as much as it wants since our e-commerce sites are
            quick, safe, simple to use, flexible, and fantastic for SEO. We
            build unique ecommerce sites that help you attain your objectives
            and provide you with the tools you need to succeed online.
          </p>
          <p>
            No buzzwords, no stress—No spam here, and the site’s going to run
            just for you. Let's boost your online profile and make it super
            helpful!
          </p>
        </section>
      </section>
    </>
  );
}
