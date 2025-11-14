import WebGurgaonComponent from "./WebGurgaonComponent";
export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/gurgaon/website-designing-company-in-gurgaon",
  },
  title: "Website Designing Company in Gurgaon | SEO & Quality Services ",
  description:
    "Grow your business with our trusted website designing company in Gurgaon. SEO-friendly, affordable, and responsive websites. Free consultation, contact us today.",
  openGraph: {
    title: "Website Designing Company in Gurgaon | SEO & Quality Services ",
    description:
      "Grow your business with our trusted website designing company in Gurgaon. SEO-friendly, affordable, and responsive websites. Free consultation, contact us today.",
    url: "https://www.kusheldigi.com/gurgaon/website-designing-company-in-gurgaon",
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
  return <WebGurgaonComponent />;
};

export default Page;
