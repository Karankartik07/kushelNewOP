import IdahoComponent from "./IdahoComponent";
export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/idaho-falls",
  },
  title: "Best Web Design Services in Idaho Falls | Kushel Digi",
  description:
    "Discover the best web design services in Idaho Falls with Kushel Digi. We create modern eCommerce and BigCommerce websites to grow your online business today.",
  openGraph: {
    title: "Best Web Design Services in Idaho Falls | Kushel Digi",
    description:
      "Discover the best web design services in Idaho Falls with Kushel Digi. We create modern eCommerce and BigCommerce websites to grow your online business today.",
    url: "https://www.kusheldigi.com/idaho-falls",
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
  return <IdahoComponent />;
};

export default Page;
