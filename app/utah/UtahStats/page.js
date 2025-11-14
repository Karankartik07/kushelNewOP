"use client";
import React from "react";
import "./dhabistats.css";
import Link from "next/link";

export default function UtahStatsService() {
  const stats = [
    {
      icon: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1758883134/Group_1171281752_as3wvy_oiwjvj.png",
      // sub: "eCommerce",
      title: "Ecommerce Development Company in Utah",
      discp:
        "A Full-Fledged ecommerce development company in Utah - Specializing in offering expertly crafted online stores that align with your brand identity to attract your ideal customers",
      className: "card-blue",
      route: "/utah/ecommerce-development-company-in-utah",
    },
    {
      icon: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1758883187/coding_1_ssl8nd_qm9ao4.png",
      // sub: "BigCommerce",
      title: "Web Development Company in Utah",
      discp:
        "You can customize BigCommerce solutions to meet the needs of your business. These solutions are built to help you sell more online and grow faster.",
      className: "card-yellow",
      route: "/utah/web-development-company-in-utah",
    },
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
          <h4>Why Choose Our Web Development Services in Utah?</h4>
          <p>
            The first place they visit to find out about your business is your
            website. An attractive web page can make you earn trust, increase
            clientele, and expand more quickly. At Kushel Digi Solutions, we
            create websites that are user-friendly on mobile phones and search
            engine-friendly. Starting with basic business websites to
            tailor-made solutions that meet your requirements, we design them.
          </p>
          <p>
            We ensure that your site appears contemporary, is fast loading, and
            functions well across any and every device. We plan to provide your
            business with a powerful online presence and enable you to be
            noticed in the competitive market of Utah.
          </p>
        </section>
      </section>
    </>
  );
}
