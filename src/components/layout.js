import * as React from "react";
import NavBar from "./navbar";
import { useStaticQuery, graphql } from "gatsby";
import { container, heading, siteTitle } from "./layout.module.css";

const getData = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const Layout = ({ pageTitle, children }) => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(getData);
  return (
    <div className={container}>
      <NavBar />
      <title>
        {pageTitle} | {title}
      </title>
      <header className={siteTitle}>{title}</header>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
