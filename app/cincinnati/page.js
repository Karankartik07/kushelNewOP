import CincinatiComponent from "./CincinatiComponent";
export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/cincinnati",
  },
  title: "Web Desgin Services in Cinciannati | Kushel Digi",
  description:
    "Get professional web design services in Cincinnati with Kushel Digi. We craft modern, responsive, and SEO-friendly websites that boost your online growth.",
  openGraph: {
    title: "Web Desgin Services in Cinciannati | Kushel Digi",
    description:
      "Get professional web design services in Cincinnati with Kushel Digi. We craft modern, responsive, and SEO-friendly websites that boost your online growth.",
    url: "https://www.kusheldigi.com/cincinnati",
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
  return <CincinatiComponent />;
};

export default Page;
