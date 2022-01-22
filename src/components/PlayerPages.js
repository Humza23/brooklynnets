import React from 'react';
import { useParams } from 'react-router-dom';

const PlayerPages = (props) => {

  const {playerStats} = props
  
  const { rosterData } = props
  const { playerId } = useParams();
  
  const player = rosterData.find(players => {
    return players.pid == playerId
  }) || {}

  const stats = playerStats.find(stats => {
    return stats.pid == playerId
  }) || {}
  
  return(
    <div className="details" style={{color: 'white'}}>
    <img className="rosterImg" src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player.pid}.png`} alt={player.fn} style={{width:'12rem', height: '7rem'}}/>

    <h1 > {player.fn} {player.ln}</h1>
    <h2> {stats.pos} #{player.num} </h2>
    <p> PPG: {stats.avg.pts} </p>
    <p> RPG: {stats.avg.reb} </p>
    <p> APG: {stats.avg.ast} </p>

      </div>
      ); 
};

export default PlayerPages;
