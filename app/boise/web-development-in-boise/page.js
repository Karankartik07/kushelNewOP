import BoiseWebComponent from "./BoiseWebComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/boise/web-development-in-boise",
  },
  title: "Experts Web Development Services in Boise | Kushel Digi",
  description:
    "Boost your brand with expert web development in Boise. Kushel Digi delivers custom, SEO-friendly websites designed to attract customers and drive growth.",
  openGraph: {
    title: "Experts Web Development Services in Boise | Kushel Digi",
    description:
      "Boost your brand with expert web development in Boise. Kushel Digi delivers custom, SEO-friendly websites designed to attract customers and drive growth.",
    url: "https://www.kusheldigi.com/boise/web-development-in-boise",
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
  return <BoiseWebComponent />;
};

export default Page;
