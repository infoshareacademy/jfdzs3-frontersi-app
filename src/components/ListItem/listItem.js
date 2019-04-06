import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import favouritePale from "../../img/Home/1.png";
import znalezione from "../../img/Home/5.png";
import favourite from "../../img/Home/2.png";
import more from "../../img/Home/3.png";
import '../FindList/findList.css';

class ListItem extends Component {
  render() {
    return (
  
          
                <div className="list-item-wrapper">
                    <img className="list-item-img" src={this.props.itemImg}></img>
                    <div className="list-item-text-container">
                        <img className="favourite-pale" src={favouritePale}></img>
                        <p className="list-item-name">{this.props.itemName}</p>
                        <div className="list-item-hash-wrapper">
                            <p className="list-item-hash">#{this.props.hasz1}</p>
                            <p className="list-item-hash">#{this.props.hasz2}</p>
                        </div>
                        <Link className="more" to={this.props.link}><img className="more" src={more}></img></Link>

                       
                    </div>
</div>

       
    );
  }
}

export default ListItem;
