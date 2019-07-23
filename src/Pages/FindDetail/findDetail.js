import React, {Component} from 'react';
import {Link} from 'react-router-dom';


import ReactMapGL, {Marker} from 'react-map-gl';

import cat from "../../img/Home/5.jpg";
import pin from "../../img/pin.svg";
import './lost_find.css';
import znalezione from "../../img/Home/5.png";
import comeback from "../../img/FindDetail/2.png";

const smallerPin = {
  width: '40px',
  background:'transparent', 
}
const btn={
  background: 'transparent',
  border: 'none',
  outline: 'none',
 
}
class FindDetail extends Component {
    state = {
        foundItems: {},
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

    componentDidMount() {
        fetch(`https://zgubionepl.firebaseio.com/foundItem.json`)
            .then(response => response.json())
            .then(result => {
                const params = new URLSearchParams(window.location.search);
                const id = params.get("id");

                this.setState({foundItems: result[id]})
            });
    }

    render() {
        console.log(this.state.foundItems)

        return (
            <div className="App">
                <img className='title' src={znalezione}></img>

                <div className='lost_detail_container'>

                    <img className="lost-item-img" alt="" src={this.state.foundItems.url}></img>

                    <div>
                        <h1>{this.state.foundItems.itemName}</h1>
                    </div>
                    <div>Kategoria: {this.state.foundItems.category}</div>

                    <div>Lokalizacja: {this.state.foundItems.location}</div>
                    <div>Opis: {this.state.foundItems.description}</div>
                    <div>Email: {this.state.foundItems.email}</div>
                    <div>Numer telefonu: {this.state.foundItems.phoneNumber}</div>
                    <div>
                        <ReactMapGL
                            {...this.state.viewport}
                            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
                            onViewportChange={(viewport) => this.setState({viewport})}>

                            {(this.state.foundItems.latitude && this.state.foundItems.longitude !== 'undefinded') && 
                            <Marker
                                latitude={this.state.foundItems.latitude}
                                longitude={this.state.foundItems.longitude}>
                                <button style={btn}>
                                <img style={smallerPin} src={pin} alt="here you are"/>
                                </button>
                            </Marker>}
                        </ReactMapGL>

                    </div>
                </div>

                <Link className="more" to="/">
                    <img className='title' src={comeback}></img>
                </Link>

            </div>
        );
    }
}

export default FindDetail;