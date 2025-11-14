import CinWebComponent from "./CinWebComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/cincinnati/web-development-in-cincinnati",
  },
  title: "Web Development in Cincinnati | 8+ Years of Proven Expertise",
  description:
    "Our proven web development in Cincinnati helps brands stand out online. From custom design to technical optimization, we deliver websites that truly perform.",
  openGraph: {
    title: "Web Development in Cincinnati | 8+ Years of Proven Expertise",
    description:
      "Our proven web development in Cincinnati helps brands stand out online. From custom design to technical optimization, we deliver websites that truly perform.",
    url: "https://www.kusheldigi.com/cincinnati/web-development-in-cincinnati",
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
  return <CinWebComponent />;
};

export default Page;
