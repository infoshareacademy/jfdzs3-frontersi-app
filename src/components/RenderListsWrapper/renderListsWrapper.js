import React, { Component } from 'react';
import SearchBar from '../SearchBar/searchBar';
import FindList from '../FindList/findList';
import LostList from '../LostList/lostList';
import { db } from '../../firebase';

const pStyle = {
  fontSize: '55px',
  textAlign: 'center'
};
class RenderListsWrapper extends Component {
  state = {
    foundItems: {},
    lostItems: {},
    loading: true
    }
  

componentDidMount(){ 
  fetch("https://zgubionepl.firebaseio.com/foundItem.json")
  .then(response => response.json())
  .then(result => {
   console.log(result);
   this.setState({ foundItems: result,
  loading : false})
    });
    fetch("https://zgubionepl.firebaseio.com/lostItem.json")
    .then(response => response.json())
    .then(result => {
    //  console.log(result);
     this.setState({ lostItems: result, loading:false})
      });
}
  render() {
    console.log(this.state.lostItems)
    const { loading } = this.state;
    if(loading){
      return(
      <div style={pStyle}> CZEKAMY CZEKAMY</div>
      )}else{
    return (
      <div>
      <SearchBar/>
      <div className="RenderLists">

      <FindList list={this.state.foundItems}/>
      <LostList list={this.state.lostItems}/>
      </div>
      </div>
    )};
  }
}

export default RenderListsWrapper;