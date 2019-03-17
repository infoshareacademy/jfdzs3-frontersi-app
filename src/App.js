import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from './Layout/Header/header';
import RenderListsWrapper from './components/RenderListsWrapper/renderListsWrapper';
import Footer from './Layout/Footer/footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p> FRONTERSI </p>
        <Header />
        <RenderListsWrapper />
        <Footer />
        <Link to="/LostForm">Lost Form</Link>
        <Link to="/FindForm">Find Form</Link>
        <Link to="/LostDetail">Lost Detail</Link>
        <Link to="/FindDetail">Find Detail</Link>
        <Link to="/Dashboard">Dashboard</Link>
        <Link to="/Favourite">Favourite</Link>
        </div>        
    );
  }
}

export default App;
