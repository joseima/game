import React from 'react';
import './css/player.css';
import ship from './img/space.png';

const Player2 = () => {
	return (
		<div className="playerCont">
			<h3 className="color2">Player 2</h3>
			<h4>"Pepe geres"</h4>
			<p className="specie">Human</p>
			
			<img src={ship} alt='ship' width='50px'/>
			<h4 className="color1 totHours">5664566 hours</h4>
			<h4 className=" color1 totTrips">5664566 trips</h4>
			<p className="shipName">"Nave espacial"</p>
			<p className="shipSpeed">200 Kms/h</p>
			<p className="shipCapacity">"Nave espacial"</p>
		</div>
	);
};
export default Player2;