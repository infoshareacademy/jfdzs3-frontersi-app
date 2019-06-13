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
  render() {
            
            (e) => {
            const storageRef = firebase.storage().ref("img/" + file.name);
            const task = storageRef.get(file);
            console.log(file);
            task.on(
              "state_changed",
              () => {
                storageRef.getDownloadURL().then(url => {
                  this.setState({
                    images: url
                  });
                });
              }
            );
            const file = e.target.files[0];}
            
    
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