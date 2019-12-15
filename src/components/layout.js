import React from "react"
import PropTypes from "prop-types"

const { useState } = React;

const Layout = ({ children }) => {
  const [isActive, setActive] = useState(false);
  if (typeof window !== 'undefined') { window.document.body.style.paddingTop = '3.25rem'; }
  let klass = isActive ? ' is-active' : '';

  return (
    <>      
      <nav className="navbar is-spaced is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28" />
          </a>
          <a role="button" className={'navbar-burger' + klass} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={() => setActive(!isActive)}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarBasicExample" className={'navbar-menu' + klass}>
          <div className="navbar-end">            
            <a className="navbar-item">Categories</a>
            <a className="navbar-item">Notification</a>
            <a className="navbar-item">Login / Sign up</a>
            <a className="navbar-item">Help</a>
          </div>
        </div>                      
      </nav>
      <div
        style={{
          margin: `0 auto`,
          minWidth: 500,
          maxWidth: 1200,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >        
        <main>{children}</main>
      </div>
    </>
  );  
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
