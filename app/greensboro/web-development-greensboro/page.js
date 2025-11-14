import GreenWebComponent from "./GreenWebComponent";


export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/greensboro/web-development-greensboro",
  },
  title: "Web Development Greensboro | Affordable & On-Time Delivery",
  description:
    "Get professional web development in Greensboro with quality service, trustable experts, and fully functional websites—delivered on time at affordable pricing.",
  openGraph: {
    title: "Web Development Greensboro | Affordable & On-Time Delivery",
    description:
      "Get professional web development in Greensboro with quality service, trustable experts, and fully functional websites—delivered on time at affordable pricing.",
    url: "https://www.kusheldigi.com/greensboro/web-development-greensboro",
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
  return <GreenWebComponent />;
};

export default Page;
