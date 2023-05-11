import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
const article = ({ article }: any) => {
  const router = useRouter();

  return (
    <div>
      <h2>This is an article {article.id}</h2>
      <p>{article.body}</p>
      <br />

      <Link href="/">Go Back </Link>
    </div>
  );
};

export default article;

// Data fetching methods in Next JS fro dynamic Pages !

export const getStaticProps = async (context: any) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${context?.params.id}`
    );

    const article = await response.json();

    return {
      props: {
        article,
      },
    };
  } catch (err: any) {
    console.log(err);
    throw new Error(err);
  }
};

export const getStaticPaths = async () => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);

    const articles = await response.json();

    const ids = articles.map((ar: any) => ar.id);

    const paths = ids.map((id: any) => ({ params: { id: id.toString() } }));

    return {
      paths,
      fallback: true,
    };
  } catch (err: any) {
    console.log(err);
    throw new Error(err);
  }
};
