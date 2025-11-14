import BirminComponent from "./BirminComponent";
export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/birmingham",
  },
  title: "Professional Website Design Birmingham Services | Kushel Digi ",
  description:
    "Our Birmingham web design services include UX/UI, development, and maintenance. We handle every step to deliver a website you love, Get free consultation.",
  openGraph: {
    title: "Professional Website Design Birmingham Services | Kushel Digi ",
    description:
      "Our Birmingham web design services include UX/UI, development, and maintenance. We handle every step to deliver a website you love, Get free consultation.",
    url: "https://www.kusheldigi.com/birmingham",
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
  return <BirminComponent />;
};

export default Page;
