import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import "../styles/main.css";

const ArticleList = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulArticles(sort: { createdAt: ASC }) {
        nodes {
          title
          author {
            name
            title
          }
          id
          slug
        }
      }
    }
  `);

  const articleList = data.allContentfulArticles.nodes;
  // console.log(articleList);
  return (
    <main className="page">
      <h4>Articles</h4>
      {articleList.map((node) => {
        const { title, author, id, slug } = node;
        return (
          <main className="page">
            <Link key={id} to={`/${slug}`}>
              <h4>{title}</h4>
            </Link>
            <p>
              {author.name} {author.title}
            </p>
          </main>
        );
      })}
    </main>
  );
};
export default ArticleList;
