import NewYorkComponent from "./NewYorkComponent";
export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/new-york",
  },
  title: "Custom Web Development Company New York | Kushel Digi",
  description:
    "Get custom web solutions with Kushel Digi, a reliable web development company in New York. We design and develop websites that engage and convert.",
  openGraph: {
    title: "Custom Web Development Company New York | Kushel Digi",
    description:
      "Get custom web solutions with Kushel Digi, a reliable web development company in New York. We design and develop websites that engage and convert.",
    url: "https://www.kusheldigi.com/new-york",
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
  return <NewYorkComponent />;
};

export default Page;
