import React from 'react';
import Card from './Card.js';

const CardList = ({rsp})=>{
		const cardComponent = rsp.map((user,i) => {
				return (
						<Card 
						key={i} 
						id={rsp[i].id} 
						name={rsp[i].name} 
						Functie={rsp[i].Functie}
						Raion={rsp[i].Raion}
						Retea={rsp[i].Retea}
						Magazin={rsp[i].Magazin}
						Oras={rsp[i].Oras}
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