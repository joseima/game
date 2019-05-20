import React from 'react';
import gold from './img/gold.png';


const Amount = ({amount}) => {
	return (
			<div className="amountCont">
			<img src={gold} alt='distance' width='80px'/>
			<p className="distance">{amount} Kgs</p>
			</div>
	);
};
export default Amount;