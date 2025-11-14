import UtahWebComponent from "./UtahWebComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/utah/web-development-company-in-utah",
  },
  title: "Best Web Development Company in Utah | Kushel Digi ",
  description:
    "Need a trusted web development company in Utah? Kushel Digi delivers sleek, responsive, and search-friendly websites that bring real results.",
  openGraph: {
    title: "Best Web Development Company in Utah | Kushel Digi ",
    description:
      "Need a trusted web development company in Utah? Kushel Digi delivers sleek, responsive, and search-friendly websites that bring real results.",
    url: "https://www.kusheldigi.com/utah/web-development-company-in-utah",
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
  return <UtahWebComponent />;
};

export default Page;
