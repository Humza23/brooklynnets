import './App.css';
import React, {useState, useEffect} from 'react';
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Navbar from './components/Navbar';
import HomeCarousel from './components/HomeCarousel'
import Roster from './components/Roster';
import PlayerStats from './components/PlayerStats';
import PlayerPages from './components/PlayerPages';
import axios from 'axios'



function App() {

  const [rosterData, setRosterData] = useState([])
  const [teamStats, setTeamStats] = useState([]);
  const rosterURL = "https://data.nba.com/data/5s/v2015/json/mobile_teams/nba/2021/teams/nets_roster.json"


  const [playerStats, setPlayerStats] = useState([]);
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
  
  
  useEffect(() => {
      axios
        .get(rosterURL)
        .then((res) => {
          console.log(res.data.t.pl);
          setRosterData(res.data.t.pl);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);




  
  const teamStatsURL = "https://data.nba.com/data/v2015/json/mobile_teams/nba/2021/teams/nets/player_averages_02.json"

  useEffect(() => {
      axios
        .get(teamStatsURL)
        .then((res) => {
          console.log('team', res.data.tpsts.pl);
          setTeamStats(res.data.tpsts.pl);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);


  return (
    <div className="App">
      <Header/>
      <Navbar/>

    <Routes>

      <Route path='/' element={<HomeCarousel />}/>
      <Route path='/roster' element={<Roster rosterData={rosterData} />} />
      <Route path='/playerstats' element={<PlayerStats teamStats={teamStats}/>}/>
      <Route path='/roster/:playerId' element={<PlayerPages playerStats={playerStats} rosterData={rosterData}/>}/>
      
    </Routes>

    </div>
  );
}

export default App;
