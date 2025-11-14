import RapidWebComponent from "./RapidWebComponent";


export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/grand-rapids/grand-rapids-website-development",
  },
  title: "Grand Rapids Web Development Agency | Kushel Digi",
  description:
    "We're a Grand Rapids web development agency that builds more than just websites. We create strategic online platforms that drive real business growth. Contact us today.",
  openGraph: {
    title: "Grand Rapids Web Development Agency | Kushel Digi",
    description:
      "We're a Grand Rapids web development agency that builds more than just websites. We create strategic online platforms that drive real business growth. Contact us today.",
    url: "https://www.kusheldigi.com/grand-rapids/grand-rapids-website-development",
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
  return <RapidWebComponent />;
};

export default Page;
