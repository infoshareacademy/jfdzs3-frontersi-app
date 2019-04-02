import React, { Component } from 'react';
import cat from "../../img/Home/5.jpg";
import './lost_find.css';
import znalezione from "../../img/Home/5.png";
import comeback from "../../img/FindDetail/2.png";
import {Link} from 'react-router-dom';

class FindDetail extends Component {
  render() {
    return (
      <div className="App">
        <img className='title' src={znalezione}></img>

        <div className='lost_detail_container'>
        <div>
        <img className="lost-item-img" src={cat}></img>
        </div>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer urna nibh, dapibus eget tellus vitae, volutpat laoreet neque. Maecenas nec orci cursus, tristique ex eget, vehicula lorem. Fusce consectetur, dolor in placerat viverra, dolor ex accumsan urna, in tempor metus ligula sed dui. Sed condimentum pharetra augue eget laoreet. In et magna a lectus ornare tempus. Duis eleifend, augue in commodo ullamcorper, nibh ligula pretium felis, vel mattis lacus augue sit amet arcu. Phasellus vel lectus nibh. Duis porta sem eget quam tempus luctus. Cras imperdiet enim et dui pulvinar mollis. Vestibulum euismod sodales nisi ultrices tincidunt. Sed eget elementum leo. Integer et est leo. Vestibulum semper lectus eu nulla consectetur porttitor. </div>
        </div>
        <Link className="more" to="/"><img className='title' src={comeback}></img></Link>

        

      </div>
    );
  }
}

export default FindDetail;