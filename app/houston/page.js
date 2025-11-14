import HoustonComponent from "./HoustonComponent";
export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/virginia",
  },
  title: "Web Design Houston | Trusted, Affordable & Fast Service",
  description:
    "Get top-notch web design Houston with quality service, on-time delivery, and fully functional websites built by trustable, affordable designers.",
  openGraph: {
    title: "Web Design Houston | Trusted, Affordable & Fast Service",
    description:
      "Get top-notch web design Houston with quality service, on-time delivery, and fully functional websites built by trustable, affordable designers.",
    url: "https://www.kusheldigi.com/virginia",
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
  return <HoustonComponent />;
};

export default Page;
