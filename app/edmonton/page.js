import EDMComponent from "./EDMComponent";
export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/edmonton",
  },
  title: "Professional Website Development Edmonton | Fast & SEO Friendly",
  description:
    "Our trusted website development Edmonton design, SEO-optimized, mobile-responsive. Fast delivery, flawless design, and a free consultation to get started. ",
  openGraph: {
    title: "Professional Website Development Edmonton | Fast & SEO Friendly",
    description:
      "Our trusted website development Edmonton design, SEO-optimized, mobile-responsive. Fast delivery, flawless design, and a free consultation to get started. ",
    url: "https://www.kusheldigi.com/edmonton",
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
  return <EDMComponent />;
};

export default Page;
