import React from 'react';
import distanceIcon from './img/distance.png';

const Distance = ({distance}) => {
	return (
			<div className="distanceCont">
			<img src={distanceIcon} alt='distance' width='80px' height='80px'/>
			<p className="distance">{distance} Kms</p>
			</div>
	);
};
export default Distance;