import React, { Component } from 'react';
import Navbar from '../../components/Navbar/navbar';
import './header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
  <Navbar />
  </div>
       
    );
  }
}

export default Header;