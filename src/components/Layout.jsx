import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import NavBar from './NavBar';
import SideNav from './SideNav';
import '../styles/index.sass';

const Layout = ({ children }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          location
        }
      }
    }
  `);

  return (
    <main>
      <div id="view-container" className="container-fluid has-background-white-ter">
        <NavBar className="is-hidden-desktop" title={site.siteMetadata.title} />
        <div className="columns is-desktop pt-6">
          <div className="column is-one-quarter-desktop pl-6 is-hidden-touch">
            <h1 className="title">{site.siteMetadata.title}</h1>
            <SideNav />
          </div>
          <div className="column">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Layout;
