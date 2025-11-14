"use client";
import React from "react";
import "./michistats.css";
import Link from "next/link";

export default function MichiStatsService() {
  const stats = [
    {
      icon: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1758883187/coding_1_ssl8nd_qm9ao4.png",
      // sub: "eCommerce",
      title: "Web Development Companies in Michigan",
      discp:
        "We can make a website just for your business in Michigan, so you've come to the right place. People will remember your online business, spend more, and have a better time in general if you make things easy for them.",
      className: "card-blue",
      route: "/michigan/web-development-companies-in-michigan",
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
          <h4>Turning Your Brand’s Vision into Stunning Web Design</h4>
          <p>
            We have an expert team that helps us run our online businesses and
            make websites. We can help you make your online store great, easy
            for everyone to use, and fun. Our sites are safe, quick, and simple
            to make. They also work great for SEO and are a great fit for your
            business. It's easy to change. We want your small business to grow,
            so we'll give you the best Shopify store and site. We are one of the
            top Web Development Companies in Michigan that can help your
            business stand out with great web designs.
          </p>
        </section>
      </section>
    </>
  );
}
