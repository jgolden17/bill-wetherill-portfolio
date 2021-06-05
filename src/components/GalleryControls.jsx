import React from 'react';

const GalleryControls = () => (
  <nav className="navbar is-transparent py-4 mr-5 has-background-white-ter" style={{ border: 'none' }}>
    <div id="navbarExampleTransparentExample" className="navbar-menu">
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="field is-grouped">
            <p className="control">
              <a className="button is-info is-outlined" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms" rel="noreferrer">
                <span>
                  All
                </span>
              </a>
            </p>
            <p className="control">
              <a className="button is-outlined" href="https://github.com/jgthms/bulma/releases/download/0.9.2/bulma-0.9.2.zip">
                <span>Available</span>
              </a>
            </p>
            <p className="control">
              <a className="button is-outlined" href="https://github.com/jgthms/bulma/releases/download/0.9.2/bulma-0.9.2.zip">
                <span>Sold</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default GalleryControls;
