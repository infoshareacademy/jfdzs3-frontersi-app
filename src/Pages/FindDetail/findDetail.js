import React, { Component } from 'react';
import cat from "../../img/Home/5.jpg";
import './lost_find.css';
import znalezione from "../../img/Home/5.png";
import comeback from "../../img/FindDetail/2.png";
import {Link} from 'react-router-dom';
import { storage, db } from '../../firebase';


class FindDetail extends Component {
  state = { 
    images: [],
    itemName: '',
    email: '',
    phoneNumber: '',
    location: '',
    category: '',
    description: '',
   };
   
   componentDidMount(){
    fetch(`https://zgubionepl.firebaseio.com/foundItem/-LdUIiasjBzkCQuI2dNS.json/${this.props.match.params.id}`)
    .then(response => response.json())
    .then(itemName => {
        this.setState({
            itemName
        })
    })
}
  render() {
            
           
            
    
    return (
      <div className="App">
        <img className='title' src={znalezione}></img>

        <div className='lost_detail_container'>
        
        <img className="lost-item-img" alt="" src={this.state.images}></img>
        
        
        <div>{this.state.itemName}</div>
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