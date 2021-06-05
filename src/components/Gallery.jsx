import React from 'react';
import { Link } from 'gatsby';
import Masonry from 'react-masonry-component';
import Img from 'gatsby-image';
import ImageModal from './ImageModal';
import useHashBangFragment from '../hooks/useHashBangFragment';

const Gallery = ({ works }) => {
  const { fragment, onNavigateFrom } = useHashBangFragment();

  return (
    <Masonry className="showcase">
      {works.map((work) => {
        const {
          title,
          slug,
          price,
          isSold,
          image,
          id,
        } = work;

        return (
          <div key={id} className="showcase__item">
            {fragment === slug && (
              <ImageModal image={image} onClose={onNavigateFrom} />
            )}
            <div className="card">
              <div className="card-image">
                <figure className="image">
                  {image && (
                    <a href={`/paintings/#!${slug}`} className="card__image">
                      <Img alt={image.description} fluid={image.fluid} />
                    </a>
                  )}
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-6">
                      <Link className="has-text-black" to={`/work/${slug}`}>{title}</Link>
                    </p>
                    <p className="subtitle is-6">
                      {`$${price}`}
                    </p>
                  </div>
                  {isSold && (
                    <span className="button is-info is-outlined is-small">
                      Sold
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Masonry>
  );
};

export default Gallery;
