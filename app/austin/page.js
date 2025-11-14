import AustinComponent from "./AustinComponent";
export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/austin",
  },
  title: "Austin’s Trusted Website Design Company | Quality Service Team ",
  description:
    "Austin businesses choose us for quality service, affordable rates, and on-time delivery. Get a fully functional, trustable website designed to impress.",
  openGraph: {
    title: "Austin’s Trusted Website Design Company | Quality Service Team ",
    description:
      "Austin businesses choose us for quality service, affordable rates, and on-time delivery. Get a fully functional, trustable website designed to impress.",
    url: "https://www.kusheldigi.com/austin",
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
  return <AustinComponent />;
};

export default Page;
