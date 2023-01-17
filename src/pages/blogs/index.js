import React from "react";
import { graphql, Link } from "gatsby";

const Blogs = ({ data }) => {
  const blogList = data.allContentfulBlogPost.nodes;
  // console.log(blogList);
  return (
    <main className="page">
      <h2>All Blogs</h2>
      {blogList.map((blog) => {
        const {
          title,
          author: { name },
          publishDate,
          id,
          slug,
        } = blog;
        return (
          <main className="page">
            <Link key={id} to={`${slug}`}>
              <h3>{title}</h3>
            </Link>
            <p>{name}</p>
            <p>Published: {publishDate}</p>
          </main>
        );
      })}
    </main>
  );
};

export const query = graphql`
  {
    allContentfulBlogPost(sort: { publishDate: DESC }) {
      nodes {
        title
        author {
          name
        }
        publishDate(formatString: "MMMM DD, YYYY")
        id
        slug
      }
    }
  }
`;

export default Blogs;
