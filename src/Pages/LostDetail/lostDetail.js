import React, { Component } from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';

import pin from "../../img/pin.svg";
import cat from "../../img/Home/5.jpg";
import zagubione from "../../img/LastDetail/2.png";
import comeback from "../../img/FindDetail/2.png";

import './../FindDetail/lost_find.css';

import {Link} from 'react-router-dom';


const smallerPin = {
  width: '40px',
  background:'transparent', 
}
const btn={
  background: 'transparent',
  border: 'none',
  outline: 'none',
 
}
class LostDetail extends Component {
  state = { 
   
    lostItems: {},
    viewport: {
      width: 800,
      height: 400,
      latitude: 53.42894,
      longitude: 14.55302,
      zoom: 12,
      bearing: 0,
      pitch: 0
   }
  };
   
   componentDidMount(){
    fetch(`https://zgubionepl.firebaseio.com/lostItem.json`)
      .then(response => response.json())
      .then(result => {
      const params = new URLSearchParams(window.location.search);  
      const id = params.get("id");  

      this.setState({lostItems: result[id]})
          });
        }
     
  
  render() {
    console.log("COstam", this.state.lostItems);

    return (
      <div className="App">
        <img className='title' src={zagubione}></img>

        <div className='lost_detail_container'>
        
        <img className="lost-item-img" alt="" src={this.state.lostItems.url}></img>
        
        <div><h1>{this.state.lostItems.itemName}</h1></div>
        <div>Kategoria: {this.state.lostItems.category}</div>

        <div>Lokalizacja: {this.state.lostItems.location}</div>
        <div>Opis: {this.state.lostItems.description}</div>
        <div>Email: {this.state.lostItems.email}</div>
        <div>Numer telefonu: {this.state.lostItems.phoneNumber}</div>
        <div>
                        <ReactMapGL
                            {...this.state.viewport}
                            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
                            onViewportChange={(viewport) => this.setState({viewport})}>

                            {(this.state.lostItems.latitude && this.state.lostItems.longitude !== 'undefinded') && 
                            <Marker
                                latitude={this.state.lostItems.latitude}
                                longitude={this.state.lostItems.longitude}>
                                <button style={btn}>
                                <img style={smallerPin} src={pin} alt="here you are"/>
                                </button>
                            </Marker>}
                        </ReactMapGL>

                    </div>

        </div>
        <Link className="more" to="/"><img className='title' src={comeback}></img></Link>

      </div>
    );
  }
}

export default LostDetail;