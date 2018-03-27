import React from 'react';

const SearchBox = ({searchChange}) => {
	return (
		<div className='pa2'>
		<input style = {{width: 250, textAlign: 'center'}} className = 'pa3 ba b--green bg-lightest-blue wd5'
		type='search' placeholder='Search Your Robo Face'
		onChange  = {searchChange}
		/>
		</div>
	);
}
export default SearchBox;