import React, {Component} from 'react';
import ListItem from '../ListItem/listItem';
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
            <div className="findList">
              <img className="lead-find" src={znalezione}></img>
                <ListItem link="/FindDetail" itemImg={dog} itemName="Pies" hasz1="pies" hasz2="sloneczne"/>
                <ListItem link="/FindDetail" itemImg={phone} itemName="GALAXY S9" hasz1="telefon" hasz2="podjuchy"/>
            </div>
        );
    }
}

export default FindList;