import React from 'react';
import './css/player.css';
import ship from './img/space.png';

const Player1 = ({vehicle1, timeP1, tripsP1}) => {
	return (
		<div className="playerCont">
			<h3 className="color1">Player 1</h3>
			<h4>{vehicle1.name}</h4>
			<p className="specie">{vehicle1.model}</p>
			
			<img src={ship} alt='ship' width='50px'/>
			<p className="shipSpeed">{vehicle1.max_atmosphering_speed} Kms/h</p>
			<p className="shipCapacity">{vehicle1.cargo_capacity} Kgs</p>
			<p className="color1 totHours">{timeP1} hours per trip</p>
			<p className=" color1 totTrips">{tripsP1} amount of trips</p>
		</div>
	);
};
export default Player1;