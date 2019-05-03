import React, {Component} from 'react';
import ListItem from '../ListItem/listItem';
import '../list.css';
import znalezione from "../../img/Home/5.png";

class FindList extends Component {

    render() {
        const item = Object.keys(this.props.list);

        return (
            <div className="listWrapper">
            <img className="lead-find" src={znalezione}></img>
            <div className="list">

                {item.map(key => {
                    const i = this.props.list[key];

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
            </div>
            
        )
    };
}
export default FindList;