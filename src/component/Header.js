import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="navbar">
          <div className="container-fluid">
              <a className="navbar-brand">Title</a>
              <ul className="nav navbar-nav">
                  <li className="active">
                      <a>Home</a>
                  </li>
                  <li>
                      <a>Link</a>
                  </li>
              </ul>
          </div>
      </div>
      </div>
    );
  }
}

export default Header;
