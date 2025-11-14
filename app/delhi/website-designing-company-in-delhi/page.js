import WebDelhiComponent from "./WebDelhiComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/delhi/website-designing-company-in-delhi",
  },
  title: "Website Designing Company in Delhi | SEO & Mobile Friendly",
  description:
    "Our trusted website designing company in Delhi builds SEO-ready, mobile-responsive websites that deliver results. Get free consultation today.",
  openGraph: {
    title: "Website Designing Company in Delhi | SEO & Mobile Friendly",
    description:
      "Our trusted website designing company in Delhi builds SEO-ready, mobile-responsive websites that deliver results. Get free consultation today.",
    url: "https://www.kusheldigi.com/delhi/website-designing-company-in-delhi",
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
  return <WebDelhiComponent />;
};

export default Page;
