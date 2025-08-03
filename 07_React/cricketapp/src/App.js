import React from 'react';
import ListofPlayers from './components/ListofPlayers';
import Scorebelow70 from './components/Scorebelow70';
import OddPlayers from './components/OddPlayers';
import EvenPlayers from './components/EvenPlayers';
import ListofIndianPlayers from './components/ListOfIndianPlayers'

const T20Players = ['First Player', 'Second Player', 'Third Player'];
const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];
export const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers];

export default function App() {
  const players = [
    { name: 'Virat', score: 85 },
    { name: 'Rohit', score: 92 },
    { name: 'Rahul', score: 65 },
    { name: 'Shreyas', score: 45 },
    { name: 'Pant', score: 79 },
    { name: 'Jadeja', score: 70 },
    { name: 'Hardik', score: 88 },
    { name: 'Ashwin', score: 55 },
    { name: 'Bumrah', score: 90 },
    { name: 'Shami', score: 68 },
    { name: 'Kuldeep', score: 72 }
  ];

  const flag = true;

  const IndianTeam = players; 


  if (flag === true) {
    return (
      <div>
        <h1>List of Players</h1>
        <ListofPlayers players={players} />
        <hr />
        <h1>List of Players having Scores Less than 70</h1>
        <Scorebelow70 players={players} />
      </div>
    );
  } else {
    return (
      <div>
        <h1>Indian Team</h1>
        <div>
          <h1>Odd Players</h1>
          <OddPlayers IndianTeam={IndianTeam} />
          <hr />
          <h1>Even Players</h1>
          <EvenPlayers IndianTeam={IndianTeam} />
        </div>
        <hr />
        <div>
          <h1>List of Indian Players Merged:</h1>
          <ListofIndianPlayers IndianPlayers={IndianPlayers} />
        </div>
      </div>
    );
  }
}
