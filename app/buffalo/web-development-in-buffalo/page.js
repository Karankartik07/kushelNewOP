import BuffaloWebComponent from "./BuffaloWebComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/buffalo/web-development-in-buffalo",
  },
  title: "Get Web Development In Buffalo | Kushel Digi",
  description:
    "Professional web development in Buffalo made simple with Kushel Digi. Build modern, SEO-focused, and high-performing websites today.",
  openGraph: {
    title: "Get Web Development In Buffalo | Kushel Digi",
    description:
      "Professional web development in Buffalo made simple with Kushel Digi. Build modern, SEO-focused, and high-performing websites today.",
    url: "https://www.kusheldigi.com/buffalo/web-development-in-buffalo",
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
  return <BuffaloWebComponent />;
};

export default Page;
