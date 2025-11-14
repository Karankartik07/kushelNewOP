import BoiseComponent from "./BoiseComponent";
export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/boise",
  },
  title: "Best Web Design Services in Boise | Kushel Digi",
  description:
    "Looking for the best web design services in Boise? Kushel Digi delivers responsive, SEO-friendly, and modern websites tailored to your business needs.",
  openGraph: {
    title: "Best Web Design Services in Boise | Kushel Digi",
    description:
      "Looking for the best web design services in Boise? Kushel Digi delivers responsive, SEO-friendly, and modern websites tailored to your business needs.",
    url: "https://www.kusheldigi.com/boise",
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
  return <BoiseComponent />;
};

export default Page;
