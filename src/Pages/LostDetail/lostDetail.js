import React, { Component } from 'react';
import cat from "../../img/Home/5.jpg";
import './../FindDetail/lost_find.css';
import zagubione from "../../img/LastDetail/2.png";
import comeback from "../../img/FindDetail/2.png";
import {Link} from 'react-router-dom';

class FindDetail extends Component {
  render() {
    return (
      <div className="App">
        <img className='title' src={zagubione}></img>

        <div className='lost_detail_container'>
        
        <img className="lost-item-img" src={cat}></img>
        
        <div>ZGUBA</div>
        <div>OPIS</div>
        <div>KONTAKT</div>
        </div>
        <Link className="more" to="/"><img className='title' src={comeback}></img></Link>

        

      </div>
    );
  }
}

export default FindDetail;