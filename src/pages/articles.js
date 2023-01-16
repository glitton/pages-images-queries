import React from "react";
import { graphql, Link } from "gatsby";
// import ArticleList from "../components/article-list";

const Articles = ({ data }) => {
  const articleList = data.allContentfulArticles.nodes;
  return (
    <main className="page">
      <h4>All Articles</h4>
      {articleList.map((node) => {
        const { title, author, id, slug } = node;
        return (
          <main className="page">
            <Link key={id} to={`${slug}`}>
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

export const query = graphql`
  {
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
`;
export default Articles;
