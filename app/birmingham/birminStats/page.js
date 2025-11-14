"use client";
import React from "react";
import "./birminstats.css";
import Link from "next/link";

export default function BirminStatsService() {
  const stats = [
    {
      icon: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1758883199/coding_2_lmrkvr_kswldj.png",
      // sub: "eCommerce",
      title: "Website Design Birmingham",
      discp:
        "Your company will develop if you make websites that are current and simple to use. It's reliable, professional, and designed just for you.",
      className: "card-blue",
      route: "/birmingham/website-design-birmingham",
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
          <h4>What Sets Our Website Design Services Apart?</h4>
          <p>
            Our Website Design Birhimgham is different because we design
            websites that do more than simply look beautiful. We build websites
            that are good for your company. We build each site from the ground
            up, ensuring it performs well on mobile devices, loads quickly, and
            is easy for search engines to find. This implies that it's easy for
            your consumers to locate you online and have a good experience doing
            so on any device. We also take the time to learn about your
            objectives so that we can make sure your website matches with your
            brand and produces results. Businesses of all types may easily
            acquire our offers, and they come with dependable support. This
            makes it easy, useful, and available to everyone to develop
            professional websites.
          </p>
        </section>
      </section>
    </>
  );
}
