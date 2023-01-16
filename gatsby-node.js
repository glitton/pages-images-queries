const path = require(`path`);

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const articleTemplate = path.resolve(`./src/templates/article-template.js`);

  const result = await graphql(`
    query getArticles {
      allContentfulArticles(sort: { createdAt: ASC }) {
        nodes {
          id
          slug
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your articles`,
      result.errors
    );
    return;
  }

  const articles = result.data.allContentfulArticles.nodes;

  if (articles.length > 0) {
    articles.forEach((article, index) => {
      const previousArticleId = index === 0 ? null : articles[index - 1].id;
      const nextArticleId =
        index === articles.length - 1 ? null : articles[index + 1].id;

      createPage({
        path: `articles/${article.slug}`,
        component: articleTemplate,
        context: {
          id: article.id,
          previousArticleId,
          nextArticleId,
        },
      });
    });
  }
};
