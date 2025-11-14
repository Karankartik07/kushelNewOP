import BirminWebComponent from "./BirminWebComponent";


export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/birmingham/website-design-birmingham",
  },
  title: "Affordable Website Design Birmingham | Kushel Digi ",
  description:
    "Get a professional, high-quality website without the huge price tag. We offer affordable website design in Birmingham for startups and SMEs, Get Free Consultation .",
  openGraph: {
    title: "Affordable Website Design Birmingham | Kushel Digi ",
    description:
      "Get a professional, high-quality website without the huge price tag. We offer affordable website design in Birmingham for startups and SMEs, Get Free Consultation .",
    url: "https://www.kusheldigi.com/birmingham/website-design-birmingham",
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
  return <BirminWebComponent />;
};

export default Page;
