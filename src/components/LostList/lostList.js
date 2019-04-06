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
import {Link} from 'react-router-dom';
import ListItem from '../ListItem/listItem';

class LostList extends Component {
    render() {
        return (
            <div className="findList">
              <img className="lead-find" src={zgubione}></img>
                <ListItem link="/LostDetail"itemImg={cat} itemName="Kot" hasz1="kot" hasz2="pomorzany"/>
                <ListItem link="/LostDetail" itemImg={phone} itemName="Iphone X" hasz1="telefon" hasz2="kijewo"/>
            </div>
        );
    }
}


export default LostList;