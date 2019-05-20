import React, { Component } from 'react';
import Player1 from '../components/Player1';
import Score from '../components/Score';
import Player2 from '../components/Player2';
import Play from '../components/Play';
import Change from '../components/Change';
import './css/App.css';
/*import hourglass from './img/hourglass.png';*/



class App extends Component {
  constructor () {
    super()
    this.state = {
      distance:0,
      amount:0,
      scoreP1:0,
      scoreP2:0,
      vehicles:[],
      vehicle1: [],
      vehicle2: []
    }
  }





componentDidMount () {

  const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}


  this.setState({distance: getRndInteger (1000, 99999)});

 
  this.setState({amount: getRndInteger (100, 9999)});


  fetch('https://swapi.co/api/vehicles')
    .then(response => response.json())
    .then(data => this.setState({vehicles:data.results}));




  this.setState({vehicle1: this.state.vehicles[getRndInteger (0, 9)]});
  console.log(this.state.vehicle1);
}

render () {

  const {distance, amount, vehicle1, vehicle2 } = this.state;
  
  if (this.state.vehicles.length > 0) {
      console.log(vehicle1);
  }
  

    return /*!this.state.players.length ? <h1>Loading</h1> :*/  (
      <div className="back">
        <Player1 vehicle1={vehicle1} />
        <Score distance={distance} amount={amount}/>
        <Player2 vehicle2={vehicle2} />       
        <Play />
        <Change />
      </div>
      );
  }
}

export default App;
