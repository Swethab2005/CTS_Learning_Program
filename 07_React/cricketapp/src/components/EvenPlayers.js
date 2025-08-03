import React from 'react';

export default function EvenPlayers({ IndianTeam }) {
  const [, second, , fourth, , sixth] = IndianTeam;

  return (
    <div>
      <li>Second: {second.name} - {second.score}</li>
      <li>Fourth: {fourth.name} - {fourth.score}</li>
      <li>Sixth: {sixth.name} - {sixth.score}</li>
    </div>
  );
}
