import React, {Component} from 'react';
import SearchBar from '../SearchBar/searchBar';
import FindList from '../FindList/findList';
import LostList from '../LostList/lostList';
import {db} from '../../firebase';

const renderLists = {

    marginTop: 0,
    padding: 0
}
const pStyle = {
    fontSize: '55px',
    textAlign: 'center'
};
const spinner = {
    width: '35rem',
    height: '35rem',
    backgroundColor: 'orange'
}
class RenderListsWrapper extends Component {
    state = {
        foundItems: {},
        lostItems: {},
        loading: true,
        nameFilter: '',
        categoryFilter: '',
        areaFilter: ''
    };

    onNameSearch = (val) => {
        this.setState({nameFilter: val})
    };
    onCategorySearch = (val) => {
        this.setState({categoryFilter: val})
    };
    onAreaSearch = (val) => {
        this.setState({areaFilter: val});

    };

    componentDidMount() {

        fetch("https://zgubionepl.firebaseio.com/foundItem.json")
            .then(response => response.json())
            .then(result => {
                this.setState({foundItems: result, loading: false})
            });
        fetch("https://zgubionepl.firebaseio.com/lostItem.json")
            .then(response => response.json())
            .then(result => {
                this.setState({lostItems: result, loading: false})
            });

    }
    componentDidUpdate() {
        console.log(this.state.areaFilter);
        console.log(this.state.categoryFilter);
        console.log(this.state.nameFilter);

    }
    render() {

        const {loading} = this.state;
        if (loading) {
            return (
                <div className="spinner-grow text-warning" style={spinner} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            )
        } else {
            return (
                <div>
                    <SearchBar
                        onNameSearch={this.onNameSearch}
                        onCategorySearch={this.onCategorySearch}
                        onAreaSearch={this.onAreaSearch}/>
                    <div style={renderLists}>
                        <FindList
                            nameFilter={this.state.nameFilter}
                            categoryFilter={this.state.categoryFilter}
                            areaFilter={this.state.areaFilter}
                            list={this.state.foundItems}/>
                        <LostList
                            nameFilter={this.state.nameFilter}
                            categoryFilter={this.state.categoryFilter}
                            areaFilter={this.state.areaFilter}
                            list={this.state.lostItems}/>
                    </div>
                </div>
            )
        };
    }
}

export default RenderListsWrapper;