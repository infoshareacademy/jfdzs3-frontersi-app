import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../img/logo.png';
import lost from '../../img/Header/2.png';
import text from '../../img/Header/1.png';
import find from '../../img/Header/3.png';
import favourite from '../../img/Header/star_favourite.png';
import './navbar.css';
const logotype = {
  width: '20rem',
  paddingLeft:'5rem',
  pointerEvents: 'none'

}

class Navbar extends Component {
  render() {
    return (
  
        <div className="container d-flex fixed-top flex-column flex-wrap flex-lg-row align-items-center bg-white">
        <a href="#" className="my-1 mr-md-auto"><img style={logotype} src={Logo} className="header-logo" alt="logo"/></a>
        <nav className="my-2 my-md-0 mr-md-3">
        <div className="nav-wrapper">
        <Link className=" p-2 text-dark main-nav-size nav-item" to="/LostForm"><img className="img-width" src={lost} ></img></Link>
        <Link className="p-2 text-dark main-nav-size nav-item" to="/FindForm"><img className="img-width" src={find} ></img></Link>
        </div>
        <a className="p-2 text-dark main-nav-size nav-item nav-item-third"><img className="img-width" src={text} ></img></a>
      
        </nav>
        <Link className="btn orange-btn main-nav-size" to="/Favourite"><img className="img-fav-width" src={favourite} ></img></Link>
        </div>




       
    );
  }
}

export default Navbar;


