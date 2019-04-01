import React, { Component } from 'react';
import Header from './Header/header';
import Footer from './Footer/footer';


class Layout extends Component {
  render() {
    return (
      <div>
        <Header  />
        <div className="layout_content">
        {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Layout;