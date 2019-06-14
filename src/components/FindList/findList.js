import React, {Component} from 'react';
import ListItem from '../ListItem/listItem';
import '../list.css';
import znalezione from "../../img/Home/5.png";

class FindList extends Component {
    componentDidUpdate(){
        console.log(this.props.nameFilter);
    }

    render() {
        const item = Object.keys(this.props.list);
       
        return (
            <div className="listWrapper">
            <img className="lead-find" src={znalezione}></img>
            <div className="list">

                {item
                    .filter(key => {
                        const i = this.props.list[key];
                      
                        return (
                          i.itemName.includes(this.props.nameFilter) &&
                          i.category.includes(this.props.categoryFilter)&&
                          i.location.includes(this.props.areaFilter)
                        );
                      })
                    .map(key => {
                    const i = this.props.list[key];

                    return (

                        <div>

                            <ListItem
                                link= {"/FindDetail/?id=" + key}
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