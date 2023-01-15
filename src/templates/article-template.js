import React from "react";
import { graphql } from "gatsby";

const ArticleTemplate = ({ data }) => {
  // console.log("this are data props", data);
  const articles = data.allContentfulArticles.nodes;
  return (
    <main className="page">
      <h2>something goes here</h2>
      <div className="tag-recipes"></div>
    </main>
  );
};

export const query = graphql`
  query GetArticleById($id: String) {
    allContentfulArticles(
      sort: { publishDate: ASC }
      filter: { id: { eq: $id } }
    ) {
      nodes {
        title
        id
        body {
          raw
        }
        author {
          name
          title
          createdAt(formatString: "MMMM DD, YYYY")
        }
        heroImage {
          gatsbyImage(
            formats: AUTO
            placeholder: DOMINANT_COLOR
            width: 500
            layout: CONSTRAINED
          )
        }
      }
    }
  }
`;
export default ArticleTemplate;
