import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import "../styles/main.css";

const IndexPage = () => {
  return (
    <main>
      <h1>Welcome Linktree</h1>
      <p>
        We are here to learn about creating pages progrmatically, adding images,
        and using graphQL in Gatsby
      </p>
      <div className="logos">
        <StaticImage
          src="../images/linktree.png"
          alt="linktree logo"
          placeholder="blurred"
          loading="eager"
        />
      </div>
    </main>
  );
};

export default IndexPage;
