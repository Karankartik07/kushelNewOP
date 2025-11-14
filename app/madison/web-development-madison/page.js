import MadisonWebComponent from "./MadisonWebComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/madison/web-development-madison",
  },
  title: "Web Development Madison | SEO Optimized & Quality Service",
  description:
    "Grow your business with web development Madison. Fully SEO optimized, responsive, affordable, and quality service. Free consultation, contact our team today.",
  openGraph: {
    title: "Web Development Madison | SEO Optimized & Quality Service",
    description:
      "Grow your business with web development Madison. Fully SEO optimized, responsive, affordable, and quality service. Free consultation, contact our team today.",
    url: "https://www.kusheldigi.com/madison/web-development-madison",
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
  return <MadisonWebComponent />;
};

export default Page;
