import OhioWebComponent from "./OhioWebComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/ohio/web-design-columbus-ohio",
  },
  title: "Web Design Columbus Ohio | Fully SEO Optimized Websites",
  description:
    "Get mobile-responsive, SEO-optimized web design Columbus Ohio. We deliver quality service, fully functional websites, and on-time project completion.",
  openGraph: {
    title: "Web Design Columbus Ohio | Fully SEO Optimized Websites",
    description:
      "Get mobile-responsive, SEO-optimized web design Columbus Ohio. We deliver quality service, fully functional websites, and on-time project completion.",
    url: "https://www.kusheldigi.com/ohio/web-design-columbus-ohio",
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
  return <OhioWebComponent />;
};

export default Page;
