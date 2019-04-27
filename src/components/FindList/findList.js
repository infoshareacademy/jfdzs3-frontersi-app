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
        const item = Object.keys(this.props.list);

        return (
            <div className="findList">
            <img className="lead-find" src={znalezione}></img>
                {item.map(key => {
                        const i = this.props.list[key];
                        console.log(i.category)
                        console.log(this.props.list)
                        return (

                            <div>
                               
                                <ListItem
                                    link="/FindDetail"
                                    itemImg={i.url}
                                    itemName={i.itemName}
                                    hasz1={i.location}
                                    hasz2={i.category}/>
                                    </div>

                        )

                    })}
            </div>
        )
    };
}
export default FindList;