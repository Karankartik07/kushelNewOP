import IdahoWebComponent from "./IdahoWebComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/idaho-falls/web-development-in-idaho-falls",
  },
  title: "Trusted Web Development in Idaho Falls | Kushel Digi",
  description:
    "Get expert web development in Idaho Falls with Kushel Digi. We build modern, SEO-friendly, and responsive websites that help your business grow online. ",
  openGraph: {
    title: "Trusted Web Development in Idaho Falls | Kushel Digi",
    description:
      "Get expert web development in Idaho Falls with Kushel Digi. We build modern, SEO-friendly, and responsive websites that help your business grow online. ",
    url: "https://www.kusheldigi.com/idaho-falls/web-development-in-idaho-falls",
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
  return <IdahoWebComponent />;
};

export default Page;
