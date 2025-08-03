import React from 'react';

export default function OddPlayers({ IndianTeam }) {
  const [first, , third, , fifth] = IndianTeam;

  return (
    <div>
      <li>First: {first.name} - {first.score}</li>
      <li>Third: {third.name} - {third.score}</li>
      <li>Fifth: {fifth.name} - {fifth.score}</li>
    </div>
  );
}
