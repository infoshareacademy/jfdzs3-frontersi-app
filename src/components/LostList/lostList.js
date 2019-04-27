import React, {Component} from 'react';
import ListItem from '../ListItem/listItem';
import '../list.css';
import zgubione from "../../img/Home/6.png";

class LostList extends Component {
  
    render() {
        const item = Object.keys(this.props.list);
        return (
            <div className="list">
                <img className="lead-find" src={zgubione}></img>
                {item.map(key => {
                    const i = this.props.list[key];
                    console.log(i.category)
                    console.log(this.props.list)
                    return(
                <div>
                <ListItem
                    link="/LostDetail"
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

export default LostList;