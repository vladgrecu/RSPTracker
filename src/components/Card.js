import React from 'react';

const Card = ({name, Functie, Raion, id, Retea, Magazin, Oras}) => {
		let reteaSwitch = (Retea) =>{
				switch(Retea){
						case 'eMag':
								return 'bg-blue';
						case 'Media Galaxy':
								return 'bg-green'
						case 'Altex':
								return 'bg-yellow'
						default:
								return 'bg-red'
				}
		}
		return (
				<div className='tc bg-light-gray dib br3 ma2 grow bw2 shadow-5 card w5 z-1 custom--o-95'>
						<div className={"ma0 shadow-5 br2 br--top fw6 " + reteaSwitch(Retea)}>{Retea}</div>
						<img className='br-100 ma2 bw1 ba b--black-20 custom--b--primary bg-center cover bg-white w4 h4' alt='foto' src={`https://robohash.org/${id}?set=set5`}/>
						<div>
								<h3>{name}</h3>
								<p>{Functie}-{Raion}</p>
								<p>{Magazin}</p>
								<p>{Oras}</p>
								<div className="inline-flex items-center">
										<a className="f6 br2 link dim ph3 pv2 mb2 dib white bg-black ma1" href="#0">Details</a>
										<a className="f5 br2 link dim ph3 pv2 mb2 dib white bg-black ma1 items-center inline-flex" href={`https://facebook.com/search/people/?q=${name}&epa=SEARCH_BOX`}>
												<svg className="dib h1 w1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"  clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.476-1.195 1.176v1.54h2.39l-.31 2.416h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0"/></svg>
												<span className="f7 ml3 pr2">AddToEZ Group</span>
										</a>
								</div>
						</div>
				</div>
		);
}

export default Card;

