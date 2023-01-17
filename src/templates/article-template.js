import React from "react";
// import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ArticleTemplate = ({ data }) => {
  // console.log(data);
  const articles = data.allContentfulArticles.nodes;
  return (
    <main className="page">
      {articles.map((article) => {
        const { title, author, body, heroImage } = article;
        const image = getImage(heroImage);
        return (
          <main className="page">
            <h3>{title}</h3>
            <GatsbyImage image={image} alt={author} />
            <h4>
              {author.name}, {author.title} {author.createdAt}
            </h4>
            {/* <p>{documentToPlainTextString(body.raw)}</p>
             */}
            <p>{body.raw}</p>
            {/* <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0,
              }}
            >
              <li>
                {previous && (
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul> */}
          </main>
        );
      })}
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
        slug
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
