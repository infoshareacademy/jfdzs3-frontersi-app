import React, { Component } from 'react';
import Header from './Header/header';
import Footer from './Footer/footer';


class Layout extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p> Layout </p>
        <Footer />
      </div>
    );
  }
}

export default Layout;s