import NashComponent from "./NashComponent";
export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/nashville",
  },
  title: "Nashville Web Design & Development for Business Success",
  description:
    "Your search for a professional web design company in Nashville ends here. We create custom, SEO-optimized websites that turn visitors into customers and deliver real ROI.",
  openGraph: {
    title: "Nashville Web Design & Development for Business Success",
    description:
      "Your search for a professional web design company in Nashville ends here. We create custom, SEO-optimized websites that turn visitors into customers and deliver real ROI.",
    url: "https://www.kusheldigi.com/nashville",
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
  return <NashComponent />;
};

export default Page;
