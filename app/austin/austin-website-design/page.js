import AustinWebComponent from "./AustinWebComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/austin/austin-website-design",
  },
  title: "Website Design Austin | Quality Design at Affordable Cost",
  description:
    "Get professional website design Austin services with quality service, on-time delivery, trustable experts, and fully functional websites built to boost your business.",
  openGraph: {
    title: "Website Design Austin | Quality Design at Affordable Cost",
    description:
      "Get professional website design Austin services with quality service, on-time delivery, trustable experts, and fully functional websites built to boost your business.",
    url: "https://www.kusheldigi.com/austin/austin-website-design",
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
  return <AustinWebComponent />;
};

export default Page;
