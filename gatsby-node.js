const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const { data, errors } = await graphql(`
    {
      allContentfulPage {
        nodes {
          title
          slug
          content {
            raw
          }
        }
      }
      allContentfulWork {
        nodes {
          slug
          title
        }
      }
    }
  `);

  if (errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return;
  }

  data.allContentfulPage.nodes.forEach((node) => {
    const { slug } = node;

    createPage({
      path: slug,
      component: path.resolve('src/templates/content.jsx'),
      context: {
        slug,
      },
    });
  });
};
