import React, {Component} from 'react';

import './lostList.css';
import znalezione from "../../img/Home/5.png";
import zgubione from "../../img/Home/6.png";
import favouritePale from "../../img/Home/1.png";
import favourite from "../../img/Home/2.png";
import more from "../../img/Home/3.png";

import phone from "../../img/Home/2.jpg";
import dog from "../../img/Home/3.jpg";
import tablet from "../../img/Home/4.jpg";
import cat from "../../img/Home/5.jpg";

class LostList extends Component {
    render() {
        return (
            <div className="findList">
                <img className="lead-lost" src={zgubione}></img>
                <div className="list-item-wrapper">
                    <img className="list-item-img" src={cat}></img>
                    <div className="list-item-text-container">
                        <img className="favourite-pale" src={favouritePale}></img>
                        <p className="list-item-name">Kot</p>
                        <div className="list-item-hash-wrapper">
                            <p className="list-item-hash">#niebuszewo</p>
                            <p className="list-item-hash">#kot</p>
                        </div>
                        <img className="more" src={more}></img>
                    </div>

                </div>
                <div className="list-item-wrapper">
                <img className="list-item-img" src={phone}></img>
                <div className="list-item-text-container">
                    <img className="favourite-pale" src={favouritePale}></img>
                    <p className="list-item-name">Galaxy s9+</p>
                    <div className="list-item-hash-wrapper">
                        <p className="list-item-hash">#centrum</p>
                        <p className="list-item-hash">#telefony</p>
                    </div>
                    <img className="more" src={more}></img>
                </div>

            </div>

            </div>
        );
    }
}

export default LostList;