import React, { Component } from 'react';
import cat from "../../img/Home/5.jpg";
import './../FindDetail/lost_find.css';
import zagubione from "../../img/LastDetail/2.png";
import comeback from "../../img/FindDetail/2.png";
import {Link} from 'react-router-dom';

class LostDetail extends Component {
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
    fetch(`https://zgubionepl.firebaseio.com/lostItem.json`)
      .then(response => response.json())
      .then(result => {
      const params = new URLSearchParams(window.location.search);  
      const id = params.get("id");  

      this.setState({foundItems: result[id]})
          });
        }
     
  
  render() {
    //console.log("COstam", this.state.foundItems);

    return (
      <div className="App">
        <img className='title' src={zagubione}></img>

        <div className='lost_detail_container'>
        
        <img className="lost-item-img" alt="" src={this.state.foundItems.url}></img>
        
        <div><h1>{this.state.foundItems.itemName}</h1></div>
        <div>Kategoria: {this.state.foundItems.category}</div>

        <div>Lokalizacja: {this.state.foundItems.location}</div>
        <div>Opis: {this.state.foundItems.description}</div>
        <div>Email: {this.state.foundItems.email}</div>
        <div>Numer telefonu: {this.state.foundItems.phoneNumber}</div>

        </div>
        <Link className="more" to="/"><img className='title' src={comeback}></img></Link>

      </div>
    );
  }
}

export default LostDetail;