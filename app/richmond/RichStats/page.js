"use client";
import React from "react";
import "./Richstats.css";
import Link from "next/link";

export default function RichStatsService() {
  const stats = [
    {
      icon: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1758883199/coding_2_lmrkvr_kswldj.png",
      // sub: "eCommerce",
      title: "Web Design Services in Richmond",
      discp:
        "Websites that are up-to-date and easy for people to use will help your business grow. It's made just for you, looks good, and works well.",
      className: "card-blue",
      route: "/richmond/web-design-services-in-richmond",
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
          <h4>What's Unique About Our Website Services?</h4>
          <p>
            Our web design services Richmond are unique because we create
            websites that do more than simply look beautiful. We make sites that
            can help your company. For every site we make, we make sure it works
            well on phones, loads quickly, and is good for search engines. That
            means it's easy for people to find you online and fun to look at
            online on any device. We learn about your goals as well, so your
            website fits with your brand and gets things done. No matter what
            kind of business you run, our deals are easy to buy and come with
            good help. This makes it easy, quick, and free for anyone to make a
            business website.
          </p>
        </section>
      </section>
    </>
  );
}
