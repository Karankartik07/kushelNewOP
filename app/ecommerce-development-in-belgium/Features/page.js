"use client";
import React from "react";
import "./features.css";

const features = [
  {
    icon: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1758883071/Mask_group_3_hwmlft_jqdjbo.png",
    title: "Fully Mobile Responsive",
    description:
      "We understand most of your customers shop through mobile phones, so we create mobile-friendly websites. Customers can shop and browse from smartphones, tablets, or desktops.",
  },
  {
    icon: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1758883070/Mask_group_2_gnsaxz_n52abi.png",
    title: "Safe Gateway Payment Integration",
    description:
      "We pay special attention to integrating payment gateways for your online stores. It helps in fast online transactions with SSL Encryption for security.",
  },
  {
    icon: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1758883082/Mask_group_5_uiwfvr_b0zdm7.png",
    title: "Improved Product Filters",
    description:
      "We add smart filters within the categories. It helps users to locate what they need, thus improving navigation within the store.",
  },
  {
    icon: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1758883086/Mask_group_6_cnmwbw_ubhkqk.png",
    title: "Exceptional Speed Performance",
    description:
      "Exceptional speeds not only enhance user experience but greatly assist SEO performance by reducing load times and bounce rates, all of which optimize ecommerce platforms.",
  },
  {
    icon: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1758883077/Mask_group_4_ow3m5y_km0fij.png",
    title: "Architecture Friendly With SEO",
    border: "true",
    description:
      "Our experts design ecommerce websites using clean code, meta tags, and URL structures, thus following SEO best practices. It allows a website to rank higher on search engines, resulting in a traffic increase. ",
  },
  {
    icon: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1758883078/Mask_group_4_sw3jfz_os8dox.png",
    title: "Easy Inventory & Order Management",
    description:
      "Enables automated order alert control alongside real-time inventory engagement, streamlining SKU management, extending control over feature edits through backend levels, and simplifying operations for the online store.",
  },
];

export default function EcommerceFeatures() {
  return (
    <section className="featuresstop1-section">
      <h2 className="featuresstop1-heading">
        What Makes Our E-Commerce Websites Stand Out?
      </h2>
      <div className="featuresstop1-grid">
        {features.map((item, index) => (
          <div
            key={index}
            className={`featuresstop1-box ${item.border ? "border-box" : ""}`}
          >
            <img src={item.icon} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
