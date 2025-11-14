import OmahaWebComponent from "./OmahaWebComponent";


export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/omaha/web-design-in-omaha",
  },
  title: "Web Design in Omaha | Quality & Affordable Service Experts",
  description:
    "Get top-notch web design in Omaha with quality service, on-time delivery, affordable pricing, trustable experts, and fully functional service for every business.",
  openGraph: {
    title: "Web Design in Omaha | Quality & Affordable Service Experts",
    description:
      "Get top-notch web design in Omaha with quality service, on-time delivery, affordable pricing, trustable experts, and fully functional service for every business.",
    url: "https://www.kusheldigi.com/omaha/web-design-company-omaha",
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
  return <OmahaWebComponent />;
};

export default Page;
