import React, {Component} from 'react';
import { robots } from '../members.js';
import SearchBox from '../components/searchBox';
import CardList from '../components/memberList.js';
import Scroll from '../components/Scroll';
import './App.css';

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
		//const {robots, searchfield} = this.state
		// If we can use this line. Then we can delete all the (this.state)
		const searchResult = this.state.robots.filter(robot =>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})

		return !robots.length ? 
			<h1 className='tc'> Loading.... </h1> :
			(
				<div className ='tc'>
				 	<h1 className = 'f1'> FRIENDS</h1>
					 <SearchBox searchChange={this.onSearchChange}/>
				 	<Scroll>
				 		<CardList robots = {searchResult}/>
					</Scroll>
				</div>
			);
	}
}

export default App;