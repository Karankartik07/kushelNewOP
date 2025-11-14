import EDMWebComponent from "./EDMWebComponent";


export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/edmonton/website-development-edmonton",
  },
  title: "Website Development Edmonton | Affordable & SEO Optimized",
  description:
    "Our trusted web development Edmonton builds stunning, fully functional websites. SEO optimized, mobile-friendly, and delivered on time. Book your free consultation today.",
  openGraph: {
    title: "Website Development Edmonton | Affordable & SEO Optimized",
    description:
      "Our trusted web development Edmonton builds stunning, fully functional websites. SEO optimized, mobile-friendly, and delivered on time. Book your free consultation today.",
    url: "https://www.kusheldigi.com/edmonton/website-development-edmonton",
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
  return <EDMWebComponent />;
};

export default Page;
