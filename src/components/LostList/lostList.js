import React, {Component} from 'react';
import ListItem from '../ListItem/listItem';
import '../list.css';
import zgubione from "../../img/Home/6.png";

class LostList extends Component {
  
    render() {
        const item = Object.keys(this.props.list);
        return (

            // item..filter(key => {
            //     const i = item[key];
            //     return (
            //       i.name.includes(item.nameFilter) &&
            //       i.phone.includes(this.state.phoneFilter)
            //     );
            //   })
            //   .map(key => {
            //     const item = this.state.items[key];
            //     return <Item key={key} id={key} item={item} />;
            //   })}
            <div className="listWrapper">
            <img className="lead-find" src={zgubione}></img>
            <div className="list">
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
</div>
 

   
    )
};
}

export default LostList;