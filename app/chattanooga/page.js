import NogaComponent from "./NogaComponent";
export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/chattanooga",
  },
  title: "Professional Web Design Chattanooga | Affordable & Trusted",
  description:
    "Build your brand online with SEO-friendly, mobile-responsive web design in Chattanooga. Affordable pricing, quality service. Get a free consultation.",
  openGraph: {
    title: "Professional Web Design Chattanooga | Affordable & Trusted",
    description:
      "Build your brand online with SEO-friendly, mobile-responsive web design in Chattanooga. Affordable pricing, quality service. Get a free consultation.",
    url: "https://www.kusheldigi.com/chattanooga",
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
  return <NogaComponent />;
};

export default Page;
