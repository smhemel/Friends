import React from 'react';

const Card  = (props) => {
	var { id, name, email} = props;
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt="Robot" src={`http://robohash.org/${id}?200*200`}/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;