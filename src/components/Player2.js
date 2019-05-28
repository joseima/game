import React from 'react';
import './css/player.css';
import ship from './img/space.png';

const Player2 = ({vehicle2, timeP2, tripsP2}) => {
	return (
<div className="playerCont">
			<h3 className="color2">Player 2</h3>
			<h4>{vehicle2.name}</h4>
			<p className="specie">{vehicle2.model}</p>
			
			<img src={ship} alt='ship' width='50px'/>
			<p className="shipSpeed">{vehicle2.max_atmosphering_speed} Kms/h</p>
			<p className="shipCapacity">{vehicle2.cargo_capacity} Kgs</p>
			<p className="color1 totHours">{timeP2} hours per trip</p>
			<p className=" color1 totTrips">{tripsP2} amount of trips</p>
		</div>
	);
};
export default Player2;