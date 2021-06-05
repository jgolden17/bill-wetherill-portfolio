import React from 'react';
import Img from 'gatsby-image';

const ImageModal = ({ image, onClose }) => (
  <div className="modal is-active">
    <div className="modal-background" />
    <div className="modal-content">
      <p className="image">
        <Img alt={image.description} fluid={image.fluid} />
      </p>
    </div>
    <button
      type="button"
      className="modal-close is-large"
      aria-label="close"
      onClick={onClose}
    />
  </div>
);

export default ImageModal;
