import React, { Component } from 'react';
import SearchBar from '../SearchBar/searchBar';
import FindList from '../FindList/findList';
import LostList from '../LostList/lostList';


class RenderListsWrapper extends Component {
  state = {
    foundItems: {},
    lostItems: {}
    }
  

componentDidMount(){ 
  fetch("https://zgubionepl.firebaseio.com/foundItem.json")
  .then(response => response.json())
  .then(result => {
   console.log(result);
   this.setState({ foundItems: result})
    });

    fetch("https://zgubionepl.firebaseio.com/lostItem.json")
    .then(response => response.json())
    .then(result => {
     console.log(result);
     this.setState({ lostItems: result})
      });
}
  render() {

    
    return (
      <div>
      <SearchBar/>
      <div className="RenderLists">
      <FindList/>
      <LostList/>
      </div>
      </div>
    );
  }
}

export default RenderListsWrapper;