import VirginiaWebComponent from "./VirginiaWebComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/virginia/web-development-company-in-virginia",
  },
  title: "Web Development Company in Virginia | Innovative Solutions",
  description:
    "Hire a trusted web development company in Virginia to build custom, fast, and user-friendly websites that boost your online presence, Contact us today!",
  openGraph: {
    title: "Web Development Company in Virginia | Innovative Solutions",
    description:
      "Hire a trusted web development company in Virginia to build custom, fast, and user-friendly websites that boost your online presence, Contact us today!",
    url: "https://www.kusheldigi.com//virginia/web-development-company-in-virginia",
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
  return <VirginiaWebComponent />;
};

export default Page;
