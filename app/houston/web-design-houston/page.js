import HustWebComponent from "./HustWebComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/houston/web-design-houston",
  },
  title: "Web Design Houston | SEO-Friendly & Fully Functional Websites",
  description:
    "Hire Houston’s web design team for quality service, affordable pricing, on-time delivery, and trustable, SEO-ready websites that drive real business growth.",
  openGraph: {
    title: "Web Design Houston | SEO-Friendly & Fully Functional Websites",
    description:
      "Hire Houston’s web design team for quality service, affordable pricing, on-time delivery, and trustable, SEO-ready websites that drive real business growth.",
    url: "https://www.kusheldigi.com/houston/web-design-houston",
    images: [
      {
        url: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1759210988/logo_zckmvw_axxbcz.png",
        width: 800,
        height: 600,
        alt: "Kushel Digi Logo",
      },
    ],
  },
};
const Page = () => {
  return <HustWebComponent />;
};

export default Page;
