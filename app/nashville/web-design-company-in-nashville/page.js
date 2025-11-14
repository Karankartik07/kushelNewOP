import NashWebComponent from "./NashWebComponent";


export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/nashville/web-design-company-in-nashville",
  },
  title: "Top-Rated Web Design Company in Nashville | Kushel Digi",
  description:
    "Drive business growth with Nashville top-rated web design company. We build high-converting, user-friendly websites that boost your brand and get you noticed.",
  openGraph: {
    title: "Top-Rated Web Design Company in Nashville | Kushel Digi",
    description:
      "Drive business growth with Nashville top-rated web design company. We build high-converting, user-friendly websites that boost your brand and get you noticed.",
    url: "https://www.kusheldigi.com/nashville/web-design-company-in-nashville",
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
  return <NashWebComponent />;
};

export default Page;
