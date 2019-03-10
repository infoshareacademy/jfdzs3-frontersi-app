import React, { Component } from 'react';
import Header from './Layout/header/header';
import SearchBar from './Components/searchBar/searchBar';
import LostList from './Components/LostList/lostList';
import FindList from './Components/FindList/findList';
import Footer from './Layout/footer/footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p> FRONTERSI </p>
        <Header />
        
        <SearchBar />
        <LostList/>
        <FindList/>
        
        <Footer />

      </div>
    );
  }
}

export default App;
