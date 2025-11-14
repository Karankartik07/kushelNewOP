import RichWebComponent from "./RichWebComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/richmond/web-design-services-in-richmond",
  },
  title: "Web Design Company in Richmond | Affordable Solutions",
  description:
    "Looking for a top web design company in Richmond? We create stunning, responsive, and user-friendly websites that help your business grow online. Contact us today!",
  openGraph: {
    title: "Web Design Company in Richmond | Affordable Solutions",
    description:
      "Looking for a top web design company in Richmond? We create stunning, responsive, and user-friendly websites that help your business grow online. Contact us today!",
    url: "https://www.kusheldigi.com//richmond/web-design-services-in-richmond",
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
  return <RichWebComponent />;
};

export default Page;
