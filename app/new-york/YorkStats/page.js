"use client";
import React from "react";
import "./Yorkstats.css";
import Link from "next/link";

export default function YorkStatsService() {
  const stats = [
    {
      icon: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1758883199/coding_2_lmrkvr_kswldj.png",
      // sub: "eCommerce",
      title: "Web Design Company in New York",
      discp:
        "Get web design services that are tailored to your needs. Building your brand, increasing revenue, and giving clients a better experience are all easy to do online.",
      className: "card-blue",
      route: "/new-york/web-design-company-in-new-york",
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
          <h4>Smart Website Design Services for Brands That Want to Grow</h4>
          <p>
            We have a collection of experts whose primary task is to build
            websites for companies. We can help you build an online shop that
            looks amazing, operates well, and earns you more money, no matter
            what sort of company you have. They are quick, safe, simple to use,
            scalable, adaptable, good for SEO, and can expand with your company.
            Our primary objective is to develop a great site that performs
            effectively for you so that your company may do well online. We are
            the top web design company in New York, and we want to help you make
            your online business outstanding.
          </p>
        </section>
      </section>
    </>
  );
}
