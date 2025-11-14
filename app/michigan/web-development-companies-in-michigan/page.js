import MichiWebComponent from "./MichiWebComponent";


export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/michigan/web-development-companies-in-michigan",
  },
  title: "Web Development Companies in Michigan | Quality service ",
  description:
    "Build your online success with Michigan’s top web development companies offering affordable, on-time delivery, quality service, and fully functional digital solutions.",
  openGraph: {
    title: "Web Development Companies in Michigan | Quality service ",
    description:
      "Build your online success with Michigan’s top web development companies offering affordable, on-time delivery, quality service, and fully functional digital solutions.",
    url: "https://www.kusheldigi.com/michigan/web-development-companies-in-michigan",
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
  return <MichiWebComponent />;
};

export default Page;
