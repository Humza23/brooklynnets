import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'

const PlayerPages = (props) => {
const [playerStats, setPlayerStats] = useState([]);

  const { rosterData } = props
  const { playerId } = useParams();

  const player = rosterData.find(players => {
    return players.pid == playerId
  }) || {}

  const statsURL = `https://data.nba.com/data/v2015/json/mobile_teams/nba/2021/teams/nets/player_averages_02.json`

  useEffect(() => {
    axios
      .get(statsURL)
      .then((res) => {
        setPlayerStats(res.data.tpsts.pl);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const stats = playerStats.find(stats => {
    return stats.pid == playerId
  }) || {}

  const individualPlayerStats = stats.avg
  console.log(individualPlayerStats);

  
  return(
    <div className="details" style={{color: 'white'}}>
    <img className="rosterImg" src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player.pid}.png`} alt={player.fn} style={{width:'12rem', height: '7rem'}}/>

    <h1 > {player.fn} {player.ln}</h1>
    <h2> {stats.pos} #{player.num} </h2>
    {/* <p className='statBox'>
      PPG: {individualPlayerStats.pts} RPG: {individualPlayerStats.reb} APG: {individualPlayerStats.ast} STLS: {individualPlayerStats.stl} BLKS: {individualPlayerStats.blk}
    </p> */}

      </div>
      ); 
};

export default PlayerPages;
