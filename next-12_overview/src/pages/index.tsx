import ArticlesList from "@/Components/ArticlesList";

export interface Datas {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Articles {
  articles: Datas[];
}

const index = ({ articles }: Articles) => {
  console.log(articles);
  return (
    <div>
      {articles.map((article: Datas): JSX.Element => {
        return <ArticlesList key={article.id} {...article} />;
      })}
    </div>
  );
};

export default index;

// Data fetching in Next JS !

// export const getStaticProps = async (): Promise<any> => {
//   try {
//     const response = await fetch(
//       `https://jsonplaceholder.typicode.com/posts?_limit=6`
//     );
//     const articles = await response.json();

//     return {
//       props: {
//         articles,
//       },
//     };
//   } catch (err: any) {
//     console.log(err);
//     throw new Error(err);
//   }
// };

// Data fetching with our own api !

export const getStaticProps = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/articles");
    const articles = await response.json();

    return {
      props: {
        articles,
      },
    };
  } catch (err: any) {
    console.log(err);
    throw new Error(err);
  }
};
