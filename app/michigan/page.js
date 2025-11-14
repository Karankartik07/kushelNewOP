import MichiComponent from "./MichiComponent";
export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/michigan",
  },
  title: "Michigan’s Best Web Development Companies | Affordable Service",
  description:
    "Looking for web development companies in Michigan? Experience quality service, trustable experts, and fully functional service with on-time delivery every time.",
  openGraph: {
    title: "Michigan’s Best Web Development Companies | Affordable Service",
    description:
      "Looking for web development companies in Michigan? Experience quality service, trustable experts, and fully functional service with on-time delivery every time.",
    url: "https://www.kusheldigi.com/michigan",
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
  return <MichiComponent />;
};

export default Page;
