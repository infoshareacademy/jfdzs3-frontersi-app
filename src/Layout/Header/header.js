import React, { Component } from 'react';
import Navbar from '../../components/Navbar/navbar';
import SearchBar from '../../components/SearchBar/searchBar';
import './header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
  <Navbar />
  <SearchBar />
  </div>
       
    );
  }
}

export default Header;