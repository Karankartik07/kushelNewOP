import RichComponent from "./RichComponent";
export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/richmond",
  },
  title: "Custom Website Development in Richmond | Kushel Digi",
  description:
    "Looking for custom website development in Richmond? We design and build unique, responsive, and user-friendly websites tailored to your business needs.",
  openGraph: {
    title: "Custom Website Development in Richmond | Kushel Digi",
    description:
      "Looking for custom website development in Richmond? We design and build unique, responsive, and user-friendly websites tailored to your business needs.",
    url: "https://www.kusheldigi.com/richmond",
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
  return <RichComponent />;
};

export default Page;
