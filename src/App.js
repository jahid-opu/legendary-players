import logo from './logo.svg';
import './App.css';
import playersData from './fakeData/data.json';
import { useEffect, useState } from 'react';
import Players from './components/Players/Players';
import Budget from './components/Budget/Budget';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [players,setPlayers] = useState(playersData);
  const [budget,setBudget] =  useState([]);
  const handleAddPlayer = (player)=>{
    const newBudget = [...budget,player];
    setBudget(newBudget);
  }

  return (
    <div>
    <div className="player">
      {
       
        players.map(player => <Players player={player} handleAddPlayer={handleAddPlayer}></Players>)
      }
    </div>
    <div className="budget-page">
     <Budget budget={budget}></Budget>
    </div>
    </div>
  );
}

export default App;
