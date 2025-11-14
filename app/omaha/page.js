import OmahaComponent from "./OmahaComponent";
export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/omaha",
  },
  title: "Top Digital & Web Design Services in Omaha | Trustable Experts",
  description:
    "Explore Omaha’s most trusted agency for quality service, on-time delivery, and affordable digital solutions. Get fully functional service for your growing business today.",
  openGraph: {
    title: "Top Digital & Web Design Services in Omaha | Trustable Experts",
    description:
      "Explore Omaha’s most trusted agency for quality service, on-time delivery, and affordable digital solutions. Get fully functional service for your growing business today.",
    url: "https://www.kusheldigi.com/omaha",
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
  return <OmahaComponent />;
};

export default Page;
