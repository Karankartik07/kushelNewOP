import LosWebComponent from "./LosWebComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/los-angeles/web-design-company-los-angeles",
  },
  title: "Web Design Company Los Angeles | SEO & Mobile Friendly",
  description:
    "Our trusted web design company Los Angeles for SEO-optimized, mobile-responsive websites. Affordable, fully functional, and on-time free consultation today.",
  openGraph: {
    title: "Web Design Company Los Angeles | SEO & Mobile Friendly",
    description:
      "Our trusted web design company Los Angeles for SEO-optimized, mobile-responsive websites. Affordable, fully functional, and on-time free consultation today.",
    url: "https://www.kusheldigi.com/los-angeles/web-design-company-los-angeles",
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
  return <LosWebComponent />;
};

export default Page;
