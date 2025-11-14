import NogaWebComponent from "./NogaWebComponent";


export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/chattanooga/web-design-chattanooga",
  },
  title: "Web Design Chattanooga | Mobile Friendly & SEO Optimized",
  description:
    "Our Chattanooga web design service offers affordable, fully functional sites with fast delivery. Contact us today for a free web design consultation.",
  openGraph: {
    title: "Web Design Chattanooga | Mobile Friendly & SEO Optimized",
    description:
      "Our Chattanooga web design service offers affordable, fully functional sites with fast delivery. Contact us today for a free web design consultation.",
    url: "https://www.kusheldigi.com/chattanooga/web-design-chattanooga",
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
  return <NogaWebComponent />;
};

export default Page;
