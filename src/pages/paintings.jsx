import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Gallery from '../components/Gallery';
import SEO from '../components/SEO';

const Paintings = ({ data }) => (
  <Layout>
    <SEO />
    <Gallery works={data.allContentfulWork.nodes} />
  </Layout>
);

export default Paintings;

export const query = graphql`
  query PaintingsQuery {
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
