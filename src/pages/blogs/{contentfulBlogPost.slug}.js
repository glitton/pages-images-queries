import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogPostTemplate = ({ data }) => {
  const { author, publishDate, title, body, heroImage } =
    data.contentfulBlogPost;
  console.log(data);
  const image = getImage(heroImage);

  return (
    <main>
      <section>
        <GatsbyImage image={image} alt={title} />
      </section>
      <article>
        <h2>{title}</h2>
        <h4>
          Author: {author} | Published: {publishDate}
        </h4>
        <p>{body.raw}</p>
      </article>
    </main>
  );
};

export const query = graphql`
  query getSingleBlogPost($id: String) {
    contentfulBlogPost(id: { eq: $id }) {
      slug
      title
      body {
        raw
      }
      heroImage {
        gatsbyImage(
          formats: AUTO
          placeholder: BLURRED
          width: 500
          layout: CONSTRAINED
        )
      }
      publishDate(formatString: "MMMM DD, YYYY")
    }
  }
`;

export default BlogPostTemplate;
