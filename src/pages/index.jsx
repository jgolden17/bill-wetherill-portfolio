import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Gallery from '../components/Gallery';
import SEO from '../components/SEO';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO />
    <Gallery works={data.allContentfulWork.nodes} />
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    allContentfulWork {
      nodes {
        title
        slug
        price
        isSold
        image {
          description
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        contentful_id: id
      }
    }
  }
`;
