import React, { Component } from 'react';
import Logo from '../../img/logo.png';

const logotype = {
  width: '20rem',
  paddingLeft:'5rem',
  pointerEvents: 'none'

}

class Navbar extends Component {
  render() {
    return (
  
        <div className="d-flex fixed-top flex-column flex-wrap flex-md-row align-items-center p-1 px-md-3 mb-7 bg-white border-0">
        <a href="#" className="my-1 mr-md-auto"><img style={logotype} src={Logo} class="header-logo" alt="logo"/></a>
        <nav className="my-2 my-md-0 mr-md-3">
        <a className=" p-2 text-dark main-nav-size">Zgłoś zagubienie</a>
        <a className="p-2 text-dark main-nav-size">Zgłoś znalezienie</a>
        </nav>
        <a className="btn orange-btn main-nav-size">Moje ulubione</a>
        </div>




       
    );
  }
}

export default Navbar;


