import VirginiaComponent from "./VirginiaComponent";
export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/virginia",
  },
  title: "#1 Website Development Company in Virginia | Kushel Digi ",
  description:
    "Kushel Digi is the #1 website development company in Virginia, creating custom, responsive, and high-performing websites that help your business succeed online.",
  openGraph: {
    title: "#1 Website Development Company in Virginia | Kushel Digi ",
    description:
      "Kushel Digi is the #1 website development company in Virginia, creating custom, responsive, and high-performing websites that help your business succeed online.",
    url: "https://www.kusheldigi.com/virginia",
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
  return <VirginiaComponent />;
};

export default Page;
