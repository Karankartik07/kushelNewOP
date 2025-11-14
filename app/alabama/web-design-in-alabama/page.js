import BamaWebComponent from "./BamaWebComponent";


export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/alabama/web-design-in-alabama",
  },
  title: "Web Design in Alabama | Affordable & Scalable Services ",
  description:
    "Looking for affordable web design in Alabama? Our team builds unique, SEO-ready websites that attract visitors and grow your business.",
  openGraph: {
    title: "Web Design in Alabama | Affordable & Scalable Services ",
    description:
      "Looking for affordable web design in Alabama? Our team builds unique, SEO-ready websites that attract visitors and grow your business.",
    url: "https://www.kusheldigi.com//alabama/web-design-in-alabama",
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
  return <BamaWebComponent />;
};

export default Page;
