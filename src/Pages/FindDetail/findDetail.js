import React, { Component } from 'react';
import cat from "../../img/Home/5.jpg";
import './lost_find.css';
import znalezione from "../../img/Home/5.png";
import comeback from "../../img/FindDetail/2.png";
import {Link} from 'react-router-dom';
import { storage, db } from '../../firebase';


class FindDetail extends Component {
  state = { 
    foundItems: {},
    lostItems: {},
    itemName: '',
    email: '',
    phoneNumber: '',
    location: '',
    category: '',
    description: '',
    image: [],
   };
   
   componentDidMount(){
    fetch(`https://zgubionepl.firebaseio.com/foundItem.json`)
      .then(response => response.json())
      .then(result => {
        const itemKey = Object.keys(result)[0];
        const params = new URLSearchParams(window.location.search);  
        const id = params.get("id");  
        console.log("TEST", id);

        let index = 0;
        for (let i = 0; i < Object.keys(result).length; i++) {
          if (Object.keys(result)[i] == id) {
            index = i;
            break;
          }
        }
        this.setState({foundItems: result[index]})
            });
          }
     
  
  render() {
    console.log("COstam"+this.state.foundItems.itemName)
    return (
      <div className="App">
        <img className='title' src={znalezione}></img>

        <div className='lost_detail_container'>
        
        <img className="lost-item-img" alt="" src={this.state.images}></img>
        
        <div>{this.state.foundItems}</div>
        <div>{this.state.email}</div>
        <div>{this.state.phoneNumber}</div>
        <div>{this.state.location}</div>
        <div>{this.state.category}</div>
        <div>{this.state.description}</div>

        </div>
        <Link className="more" to="/"><img className='title' src={comeback}></img></Link>

      </div>
    );
  }
}

export default FindDetail;