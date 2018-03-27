import React, {Component} from 'react';
import {robots} from './members.js';
import SearchBox from './searchBox';
import CardList from './memberList.js';

class App extends Component {
	constructor(){
		super()
		this.state = {
			robots: robots,
			searchfield: ''
		}
	}
	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
	}
	render() {
		const searchResult = this.state.robots.filter((robots) =>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		return (
			<div className ='tc'>
			 <h1 className = 'f1'> FRIENDS</h1>
			 <SearchBox searchChange={this.onSearchChange}/>
			 <CardList robots = {searchResult}/>
			</div>
		);
	}
}

export default App;