import MadisonComponent from "./MadisonComponent";
export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/madison",
  },
  title: "Expert Web Development Madison | Affordable Services",
  description:
    "Build a stunning website with SEO optimized web development in Madison. We offer trustworthy, on-time delivery and free consultation. Call us today.",
  openGraph: {
    title: "Expert Web Development Madison | Affordable Services",
    description:
      "Build a stunning website with SEO optimized web development in Madison. We offer trustworthy, on-time delivery and free consultation. Call us today.",
    url: "https://www.kusheldigi.com/madison",
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
  return <MadisonComponent />;
};

export default Page;
