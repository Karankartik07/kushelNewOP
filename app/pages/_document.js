import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          {/* Open Graph (OG) Meta Tags */}
          <meta
            property="og:title"
            content="Kushel Digi | Expert eCommerce Development Services"
          />
          <meta
            property="og:description"
            content="We offer professional website development, eCommerce solutions, and SEO services, bigcommerce development."
          />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/dd9tagtiw/image/upload/v1759210988/logo_zckmvw_axxbcz.png"
          />
          <meta property="og:url" content="https://www.kusheldigi.com/" />
          <meta property="og:type" content="website" />

          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Kushel Digi | Expert eCommerce Development Services"
          />
          <meta
            name="twitter:description"
            content="We offer professional website development, eCommerce solutions, and SEO services, bigcommerce development."
          />
          <meta
            name="twitter:image"
            content="https://res.cloudinary.com/dd9tagtiw/image/upload/v1759210988/logo_zckmvw_axxbcz.png"
          />
          <meta name="twitter:url" content="https://www.kusheldigi.com/" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
