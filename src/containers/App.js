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
      winner: "",
      amount:0,
      timeP1:null,
      tripsP1:null,
      scoreP1:0,
      timeP2:null,
      tripsP2:null,
      scoreP2:0,
      vehicle1: [],
      vehicle2:  [],
    }
  }


  

chargePlayers = () => {
 fetch('https://swapi.co/api/vehicles')
    .then(response => response.json())
    .then(data =>  {
      this.setState({vehicle1:data.results[Math.floor(Math.random() * 9) ] });
      this.setState({vehicle2:data.results[Math.floor(Math.random() * 9) ] });
    });

     this.setState({distance: Math.floor(Math.random() * 10000) + 1000});

     this.setState({amount: Math.floor(Math.random() * 1000) + 100});

     this.setState({tripsP1: null});
     this.setState({timeP1: null});
     this.setState({tripsP2: null});
     this.setState({timeP2: null});
     this.setState({winner: ""});


}



componentDidMount () {
 fetch('https://swapi.co/api/vehicles')
    .then(response => response.json())
    .then(data =>  {
      this.setState({vehicle1:data.results[Math.floor(Math.random() * 9) ] });
      this.setState({vehicle2:data.results[Math.floor(Math.random() * 9) ] });
    });

     this.setState({distance: Math.floor(Math.random() * 10000) + 1000});

     this.setState({amount: Math.floor(Math.random() * 1000) + 100});


}

race = () => {
  const amountTripsP1 =  parseInt((this.state.amount*2)/this.state.vehicle1.cargo_capacity);
  this.setState({tripsP1: amountTripsP1});

  const timePerTripP1 =  parseInt(this.state.distance/this.state.vehicle1.max_atmosphering_speed);
   this.setState({timeP1: timePerTripP1});

  let totalTimeP1 = parseInt(amountTripsP1 * timePerTripP1);
  
  const amountTripsP2 =  parseInt((this.state.amount*2)/this.state.vehicle2.cargo_capacity);
  this.setState({tripsP2: amountTripsP2});

  const timePerTripP2 =  parseInt(this.state.distance/this.state.vehicle2.max_atmosphering_speed);
  this.setState({timeP2: timePerTripP2});

  let totalTimeP2 = parseInt(amountTripsP2 * timePerTripP2);


   if (totalTimeP1 > totalTimeP2) {
      this.setState({winner: "Player 2 Wins"});
      this.setState({scoreP2: this.state.scoreP2 +1})

   } else if (totalTimeP1 < totalTimeP2) {
      this.setState({winner: "Player 1 Wins"});
      this.setState({scoreP1:  this.state.scoreP1 +1})
  } else { this.setState({winner: "It's a draw"}) }



}



render () {

  const {distance, amount, vehicle1, vehicle2, winner, tripsP1, tripsP2, timeP1, timeP2, scoreP1, scoreP2 } = this.state;
  
    return /*!this.state.players.length ? <h1>Loading</h1> :*/  (
      <div className="back">
        <Player1 vehicle1={vehicle1}  tripsP1={tripsP1} timeP1={timeP1} />
        <Score distance={distance} amount={amount} scoreP1={scoreP1} scoreP2={scoreP2} winner={winner} />
        <Player2 vehicle2={vehicle2}  tripsP2={tripsP2} timeP2={timeP2} />       
        <Play race={this.race} />
        <Change chargePlayers={this.chargePlayers} />
      </div>
      );
  }
}

export default App;
