import LosComponent from "./LosComponent";
export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/los-angeles",
  },
  title: "Los Angeles Web Design Experts | Quality Services",
  description:
    "Get a mobile-responsive, SEO-optimized website from Los Angeles web design company. Free consultation & on-time delivery guaranteed. Contact us now ",
  openGraph: {
    title: "Los Angeles Web Design Experts | Quality Services",
    description:
      "Get a mobile-responsive, SEO-optimized website from Los Angeles web design company. Free consultation & on-time delivery guaranteed. Contact us now ",
    url: "https://www.kusheldigi.com/los-angeles",
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
  return <LosComponent />;
};

export default Page;
