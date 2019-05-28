import React from 'react';


const Change = ({chargePlayers}) => {
	return (
			<div className="changeCont">
			<button type="button" onClick={chargePlayers} className="change">Change Players</button>
			</div>
	);
};
export default Change;