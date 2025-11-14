import OhioComponent from "./OhioComponent";
export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/ohio",
  },
  title: "Columbus Ohio Web Design | Mobile Responsive & Affordable",
  description:
    "Build a modern, fully SEO-optimized website in Columbus Ohio. Trusted for on-time delivery, quality designs, and affordable services that convert visitors.",
  openGraph: {
    title: "Columbus Ohio Web Design | Mobile Responsive & Affordable",
    description:
      "Build a modern, fully SEO-optimized website in Columbus Ohio. Trusted for on-time delivery, quality designs, and affordable services that convert visitors.",
    url: "https://www.kusheldigi.com/ohio",
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
  return <OhioComponent />;
};

export default Page;
