import React from 'react';
import './css/score.css';
import Amount from '../components/Amount';
import Distance from '../components/Distance';

const Score = ({distance, amount, winner, scoreP1, scoreP2}) => {
	return (
		<div className="scoreCont">
			<h3 className="color3 winner">{winner}</h3>
			<h4>Vs</h4>
			<div className="puntuation">
			<h2 className="scoreP1 color1">{scoreP1}</h2>
			<p> - </p>
			<h2 className="scoreP1 color2">{scoreP2}</h2>
			</div>
			<Amount  amount={amount}/>
        	<Distance distance={distance}/>
		</div>
	);
};
export default Score;