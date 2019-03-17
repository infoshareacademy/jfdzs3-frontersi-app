import React, { Component } from 'react';
import SearchBar from '../SearchBar/searchBar';
import FindList from '../FindList/findList';
import LostList from '../LostList/lostList';
class RenderListsWrapper extends Component {
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