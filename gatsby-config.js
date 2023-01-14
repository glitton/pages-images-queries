const path = require(`path`);

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  // Default Page Meta Data
  siteMetadata: {
    title: "Everything you are. In one simple link | Linktree",
    description:
      "Linktree is a tool to help you share everything you are, in one simple link – making your online content more discoverable, easier to manage and more likely to convert.",
    siteUrl: "https://linktr.ee/",
    image: "/images/linktree.svg",
    twitterUsername: "@Linktree_",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        downloadLocal: true,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
  ],
};
