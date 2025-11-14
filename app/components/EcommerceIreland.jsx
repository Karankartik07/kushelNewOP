"use client";
import { useEffect } from "react";
import Footer from "../COMMON/Footer";
import Navbar from "../COMMON/Navbar";
import Cutting1Section from "../ecommerce-development-in-ireland/CuttingEdge/page";
import IrelandBanner from "../ecommerce-development-in-ireland/IrelandBanner/page";
import LogoSlider from "../ecommerce-development-in-ireland/LogoSlider/page";
import StatsSection from "../ecommerce-development-in-ireland/StatsSection/page";
import "../globals.css";

// import BlogSection from "../ecommerce-development-in-ireland/BlogSection/BlogSection";
import CallToAction from "../ecommerce-development-in-ireland/CtaBelgium/page";
import DesignDevelopment from "../ecommerce-development-in-ireland/DesignDev/page";
import EcommerceFeatures from "../ecommerce-development-in-ireland/Features/page";
import IrelandBanner3 from "../ecommerce-development-in-ireland/IrelandBanner3/Page";
import IrelandCardSection from "../ecommerce-development-in-ireland/IrelandCardSection/page";
import IrelandCustomBenefitsSection from "../ecommerce-development-in-ireland/IrelandCustomBenefitsSection/page";
import IrelandEcomServ from "../ecommerce-development-in-ireland/IrelandEcomServ/page";
import IrelandFAQ from "../ecommerce-development-in-ireland/IrelandFAQ/page";
import IndustryTabs from "../ecommerce-development-in-ireland/IrelandIndustry/page";
import IrelandMakeUs from "../ecommerce-development-in-ireland/IrelandMakeUs/page";
import IrelandSec12 from "../ecommerce-development-in-ireland/IrelandSec12/page";
import IrelandShop from "../ecommerce-development-in-ireland/IrelandShop/page";
import WhyChooseIreland from "../ecommerce-development-in-ireland/WhyChooseIreland/page";
// import IrelandSecSlider from '../ecommerce-development-in-ireland/IrelandSecSlider/page';
import BulgariaSecSlider from "../ecommerce-development-in-bulgaria/BulgariaSecSlider/page";
import Website2 from "./Home/HomeForm2";
import BlogSection from "../COMMON/BlogSection/BlogSection";

const phoneNumber = "9045301702";

const whatAppHandler = () => {
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  window.open(whatsappUrl, "_blank");
};
const callHandler = () => {
  const callUrl = `tel:+15855662070`;
  window.open(callUrl, "_blank");
};
function EcommerceIreland() {
  const generateMetadata = ({ params }) => {
    return {
      title: "eCommerce Website Development Company in Ireland",
      description:
        "Get expert ecommerce website development in Ireland. Kushel Digi offers scalable, secure, and tailored ecommerce solutions for your business growth.",
      metadataBase: new URL(`https://www.kusheldigi.com/`),
    };
  };

  useEffect(() => {
    const { title, description } = generateMetadata({ params: {} });
    document.title = title;
    let metaDescription = document.querySelector('meta[name="description"]');

    metaDescription
      ? (metaDescription.content = description)
      : document.head.insertAdjacentHTML(
          "beforeend",
          `<meta name="description" content="${description}">`
        );
  }, []);

  return (
    <div>
      <div className="ser-main"></div>

      <Navbar />
      <IrelandBanner />
      <LogoSlider />
      <StatsSection />
      <Cutting1Section />
      <IrelandEcomServ />
      {/* <IrelandSecSlider/> */}
      <BulgariaSecSlider />
      <CallToAction />
      <WhyChooseIreland />
      <DesignDevelopment />
      <IrelandShop />
      <IrelandMakeUs />
      <IndustryTabs />
      <EcommerceFeatures />
      <IrelandCardSection />
      <IrelandSec12 />
      <IrelandCustomBenefitsSection />
      <IrelandBanner3 />
      <BlogSection page="eCommerce" />
      <IrelandFAQ />
      <Website2 />

      <Footer />

      <div className="whtsApBtns">
        <button onClick={whatAppHandler}>
          <img
            className="what-image-universal"
            src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1738990311/whatsapp_eohddq.png"
            alt="whatsApp-kusheldigi"
            title="whatsApp-kusheldigi"
          />
        </button>
        <button onClick={callHandler}>
          <img
            src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740480725/telephone_h8clxy.png"
            alt="call-icon"
            title="call-icon"
          />
        </button>
      </div>
    </div>
  );
}

export default EcommerceIreland;
