import React from 'react';
import Card from '../components/Card.js';

const CardList = (props)=>{
		const cardComponent = props.rsp.map(({id,...otherProps}) => {
				return (
						<Card
						key={id}
						id = {id}
						{...otherProps} 
						/>
						);
		})
		return (
				<div>
						{cardComponent}
				</div> 
		)
}

export default CardList;