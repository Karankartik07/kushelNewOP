import GreenComponent from "./GreenComponent";
export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/greensboro",
  },
  title: "Top Web Development in Greensboro | Quality & Trustable Service",
  description:
    "Discover top web development in Greensboro with quality service, on-time delivery, and affordable solutions. Get fully functional service from trustable local experts.",
  openGraph: {
    title: "Top Web Development in Greensboro | Quality & Trustable Service",
    description:
      "Discover top web development in Greensboro with quality service, on-time delivery, and affordable solutions. Get fully functional service from trustable local experts.",
    url: "https://www.kusheldigi.com/greensboro",
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
  return <GreenComponent />;
};

export default Page;
