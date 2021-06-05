import React from 'react';
import { BLOCKS } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

export const pageQuery = graphql`
  query ContentBySlug($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      content {
        raw
      }
    }
  }
`;

const options = {
  renderNode: {
    [BLOCKS.HEADING_2]: (node, children) => <h2 className="subtitle">{children}</h2>,
  },
};

const ContentTemplate = ({ data }) => {
  const { title, content } = data.contentfulPage;

  return (
    <Layout>
      <div className="container">
        <div className="content">
          <h1 className="title">{title}</h1>
          <div>
            {renderRichText(content, options)}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContentTemplate;
