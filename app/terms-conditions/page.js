import TermsComponent from "./TermsComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/terms-conditions",
  },
  title: "KushelDigi Solutions- Creative Graphic Design company",
  description:
    "The best graphic design company, Kushel Digi Solutionss offers a range of graphic design services, such as motion graphics, infographics, logos, and more.",
  openGraph: {
    title: "KushelDigi Solutions- Creative Graphic Design company",
    description:
      "The best graphic design company, Kushel Digi Solutionss offers a range of graphic design services, such as motion graphics, infographics, logos, and more.",
    url: "https://www.kusheldigi.com/terms-conditions",
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
  return <TermsComponent />;
};

export default Page;
