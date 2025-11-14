import YorkWebComponent from "./YorkWebComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/new-york/web-design-company-in-new-york",
  },
  title: "Web Design Company in New York | Kushel Digi",
  description:
    "Looking for a top web design company in New York? Kushel Digi delivers modern, responsive, SEO-friendly websites to help your brand stand out and grow online.",
  openGraph: {
    title: "Web Design Company in New York | Kushel Digi",
    description:
      "Looking for a top web design company in New York? Kushel Digi delivers modern, responsive, SEO-friendly websites to help your brand stand out and grow online.",
    url: "https://www.kusheldigi.com//new-york/web-design-company-in-new-york",
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
  return <YorkWebComponent />;
};

export default Page;
