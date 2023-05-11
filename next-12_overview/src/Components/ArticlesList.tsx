import React from "react";
import { Datas } from "@/pages";
import ArticleStyle from "../styles/Article.module.css";
import Link from "next/link";

const ArticlesList = ({ userId, id, title, body }: Datas) => {
  return (
    <div className={ArticleStyle.grid}>
      <Link
        href="/article/[id]"
        as={`/article/${id}`}
        className={ArticleStyle.card}
      >
        <h3>{title} &rarr;</h3>
        <p>{body}</p>
      </Link>
    </div>
  );
};

export default ArticlesList;
