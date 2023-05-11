import Head from "next/head";

interface Meta_Elements {
  title: string;
  keyword: string;
  description: string;
}

const Meta = ({ title, keyword, description }: Meta_Elements) => {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width,
            initial-scale=1
            "
      />
      <meta name="keywords" content={keyword} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "WebDev News",
  keyword: "Web Development, programming !",
  description: "Get the latest news",
};

export default Meta;
