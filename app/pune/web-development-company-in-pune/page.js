import PuneWebComponent from "./PuneWebComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/pune/web-development-company-in-pune",
  },
  title: "Web Development Company in Pune | SEO Optimized & Affordable",
  description:
    "Get a high-performance web development company in Pune. SEO optimized, responsive, and reliable service with on-time delivery. Contact us for a free consultation.",
  openGraph: {
    title: "Web Development Company in Pune | SEO Optimized & Affordable",
    description:
      "Get a high-performance web development company in Pune. SEO optimized, responsive, and reliable service with on-time delivery. Contact us for a free consultation.",
    url: "https://www.kusheldigi.com/pune/web-development-company-in-pune",
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
  return <PuneWebComponent />;
};

export default Page;
