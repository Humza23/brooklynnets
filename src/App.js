import './App.css';
import React, {useState, useEffect} from 'react';
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Navbar from './components/Navbar';
import HomeCarousel from './components/HomeCarousel'
import Roster from './components/Roster';
import PlayerStats from './components/PlayerStats';
import PlayerPages from './components/PlayerPages';
import Injuries from './components/Injuries';
import Schedule from './components/Schedule';
import axios from 'axios'



function App() {

  const [rosterData, setRosterData] = useState([])
  const rosterURL = "https://data.nba.com/data/5s/v2015/json/mobile_teams/nba/2021/teams/nets_roster.json"

  
  useEffect(() => {
      axios
        .get(rosterURL)
        .then((res) => {
          setRosterData(res.data.t.pl);
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
      <Route path='/playerstats' element={<PlayerStats />}/>
      <Route path='/playerpages' element={<PlayerPages />}/>
      <Route path='/schedule' element={<Schedule />}/>
      <Route path='/injuries' element={<Injuries />}/>
      
    </Routes>

    </div>
  );
}

export default App;
