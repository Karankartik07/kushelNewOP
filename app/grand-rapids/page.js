import RapidComponent from "./RapidComponent";
export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/grand-rapids",
  },
  title: "Your Partner in Grand Rapids Web Development",
  description:
    "We don't just build websites; we build partnerships. Our collaborative Grand Rapids web development process ensures your voice is heard and your goals are met.",
  openGraph: {
    title: "Your Partner in Grand Rapids Web Development",
    description:
      "We don't just build websites; we build partnerships. Our collaborative Grand Rapids web development process ensures your voice is heard and your goals are met.",
    url: "https://www.kusheldigi.com/grand-rapids",
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
  return <RapidComponent />;
};

export default Page;
