import React from 'react';

const CardBack = ({name, Functie, Raion, id, Retea, Magazin, Oras}) => {
		
		return (
				<div className='tc bg-light-gray dib br3 ma2 grow bw2 shadow-5 card w5 custom--o-95'>
						<div className="ma0 shadow-5 br2 br--top fw6 ">{Retea}</div>
						<img className='br-100 ma2 bw1 ba b--black-20 custom--b--primary bg-center cover bg-white w4 h4' alt='foto' src={`https://robohash.org/${id}?set=set5`}/>
						<div>
								<h3>{name}</h3>
								
								<p>{Oras}</p>
						</div>
				</div>
		);
}

export default CardBack;