import React, { Component } from 'react';
import './footer.css';
import {Link} from 'react-router-dom';
import img1 from '../../img/Footer/1.png';
class Footer extends Component {
  render() {
    return (
      <div className="footer">
      <div className="footer-container">
        <img  className="footer-img" src={img1}></img>
        <Link className="footer-link" to="/">Strona Główna |</Link>
        <Link className="footer-link" to="/LostForm">Zgłoś zagubienie |</Link>
        <Link className="footer-link" to="/FindForm">Zgłoś znalezienie |</Link>
        <Link className="footer-link" to="/Favourite">Moje ulubione |</Link>
        <Link className="footer-link" to="/Dashboard">Dashboard </Link>

        </div>
      </div>
    );
    
  }
}

export default Footer;