import React, {Component} from 'react';

import './findList.css';
import znalezione from "../../img/Home/5.png";
import favouritePale from "../../img/Home/1.png";
import favourite from "../../img/Home/2.png";
import more from "../../img/Home/3.png";

import phone from "../../img/Home/2.jpg";
import dog from "../../img/Home/3.jpg";
import tablet from "../../img/Home/4.jpg";
import cat from "../../img/Home/5.jpg";

class FindList extends Component {
    render() {
        return (
            <div className="lostList">
                <img className="lead-find" src={znalezione}></img>
                <div className="list-item-wrapper">
                    <img className="list-item-img" src={tablet}></img>
                    <div className="list-item-text-container">
                        <img className="favourite-pale" src={favouritePale}></img>
                        <p className="list-item-name">Ipad</p>
                        <div className="list-item-hash-wrapper">
                            <p className="list-item-hash">#sloneczne</p>
                            <p className="list-item-hash">#ipad</p>
                        </div>
                        <img className="more" src={more}></img>
                    </div>

                </div>
                <div className="list-item-wrapper">
                <img className="list-item-img" src={dog}></img>
                <div className="list-item-text-container">
                    <img className="favourite-pale" src={favouritePale}></img>
                    <p className="list-item-name">Pies</p>
                    <div className="list-item-hash-wrapper">
                        <p className="list-item-hash">#pogodno</p>
                        <p className="list-item-hash">#zwierzeta</p>
                    </div>
                    <img className="more" src={more}></img>
                </div>

            </div>

            </div>
        );
    }
}

export default FindList;