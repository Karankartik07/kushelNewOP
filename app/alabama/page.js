import AlabamaComponent from "./AlabamaComponent";
export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/alabama",
  },
  title: "Best Web Design in Alabama | Custom Business Solutions",
  description:
    "Get the best web design in Alabama with custom, mobile-friendly, and fast websites that help your brand stand out online. Contact us today!",
  openGraph: {
    title: "Best Web Design in Alabama | Custom Business Solutions",
    description:
      "Get the best web design in Alabama with custom, mobile-friendly, and fast websites that help your brand stand out online. Contact us today!",
    url: "https://www.kusheldigi.com/alabama",
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
  return <AlabamaComponent />;
};

export default Page;
