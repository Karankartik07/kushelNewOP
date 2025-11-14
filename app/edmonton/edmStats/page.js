"use client";
import React from "react";
import "./edmstats.css";
import Link from "next/link";

export default function EdmStatsService() {
  const stats = [
    {
      icon: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1758883187/coding_1_ssl8nd_qm9ao4.png",
      // sub: "eCommerce",
      title: "Website Development Edmonton",
      discp:
        "Check out web development options that are made to meet the needs of your business. It's simple to get more visitors, meet cool people, and make your online profile stronger.",
      className: "card-blue",
      route: "/edmonton/website-development-edmonton",
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
          <h4>Creating smart websites for businesses in Edmonton</h4>
          <p>
            As a trustworthy website development Edmonton, our skilled workers'
            main job is to make e-commerce sites.We can help you make an online
            store that looks good, works well, and sells more. It's easy to use,
            safe, quick, and SEO-friendly for our e-commerce sites, so your
            company can grow as much as it wants. Unique e-commerce sites that
            help you reach your goals and give you the tools you need to be
            successful online are what we do. There are no buzzwords or hype
            here, and there will be no spam. The site will only work for you.
            Let's make your online page look better and more useful!
          </p>
        </section>
      </section>
    </>
  );
}
