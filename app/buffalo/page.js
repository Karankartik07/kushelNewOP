import BuffaloComponent from "./BuffaloComponent";
export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/buffalo",
  },
  title: "Top Website Desgin Services in Buffalo | Kushel Digi",
  description:
    "Kushel Digi is your trusted partner for top website design services in Buffalo. Create SEO-friendly, modern websites that drive results.",
  openGraph: {
    title: "Top Website Desgin Services in Buffalo | Kushel Digi",
    description:
      "Kushel Digi is your trusted partner for top website design services in Buffalo. Create SEO-friendly, modern websites that drive results.",
    url: "https://www.kusheldigi.com/buffalo",
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
  return <BuffaloComponent />;
};

export default Page;
