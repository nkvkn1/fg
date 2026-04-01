import Head from "next/head";

export function Seo({
  title,
  description,
  path = "/",
  image = "/images/IMG_4296-1024x1536.webp",
}) {
  const siteTitle = title ? `${title} | Fotogracia` : "Fotogracia";
  const url = `https://fotogracia.com${path}`;

  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="theme-color" content="#0d0d0d" />
    </Head>
  );
}
