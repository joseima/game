import React from 'react';


const Play = ({race}) => {
	return (
			<div className="amountCont">
			<button type="button" onClick={race} className="play">Race!!</button>
			</div>
	);
};
export default Play;