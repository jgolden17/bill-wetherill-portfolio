import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export const pageQuery = graphql`
  query WorkBySlug($slug: String!) {
    contentfulWork(slug: { eq: $slug }) {
      id
      image {
        description
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      isSold
      price
      title
    }
  }
`;

const WorkTemplate = ({ data }) => {
  const { title, image } = data.contentfulWork;

  return (
    <Layout>
      <SEO
        title={title}
        description={image.description}
        image={`http:${image.fluid.src}`}
      />
      <div className="container">
        <div className="content">
          <Img alt={image.description} fluid={image.fluid} />
          <h1 className="title is-3">{title}</h1>
        </div>
      </div>
    </Layout>
  );
};

export default WorkTemplate;
