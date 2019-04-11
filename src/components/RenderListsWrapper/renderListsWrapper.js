import React, { Component } from 'react';
import SearchBar from '../SearchBar/searchBar';
import FindList from '../FindList/findList';
import LostList from '../LostList/lostList';
import FindForm from '../../Pages/FindForm/findForm';

class RenderListsWrapper extends Component {
  state = {
    searchTerm: '',
    searchCategory: '',
    searchArea: ''
    }
  onSearchSubmit = (term, category, area) => {
    this.setState({
      searchTerm: term,
      searchCategory: category,
      searchArea: area
    })
    console.log( this.state.searchCategory);
   
};

componentDidMount(){ 
  fetch("https://zgubionepl.firebaseio.com/foundItem/1554893074432.json")
  .then(response => response.json())
  .then(result => {
   console.log(result);
    });
 
}
  render() {
    return (
      <div>
      <SearchBar onSub={this.onSearchSubmit}/>
      <div className="RenderLists">
      <FindList/>
      <LostList/>
      </div>
      </div>
    );
  }
}

export default RenderListsWrapper;