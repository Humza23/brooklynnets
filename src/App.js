import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import HomeCarousel from "./components/HomeCarousel";
import Roster from "./components/Roster";
import PlayerStats from "./components/PlayerStats";
import PlayerPages from "./components/PlayerPages";
import LoadingPage from "./components/LoadingPage";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(false);
  const [rosterData, setRosterData] = useState([]);
  const [teamStats, setTeamStats] = useState([]);
  const [playerStats, setPlayerStats] = useState([]);

  const rosterURL =
    "https://data.nba.com/data/5s/v2015/json/mobile_teams/nba/2021/teams/nets_roster.json";
  const statsURL = `https://data.nba.com/data/v2015/json/mobile_teams/nba/2021/teams/nets/player_averages_02.json`;
  const teamStatsURL =
    "https://data.nba.com/data/v2015/json/mobile_teams/nba/2021/teams/nets/player_averages_02.json";

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

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
        setRosterData(res.data.t.pl);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(teamStatsURL)
      .then((res) => {
        setTeamStats(res.data.tpsts.pl);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <div>
          <LoadingPage />
        </div>
      ) : (
        <div className="App">
          <Header />
          <Navbar />

          <Routes>
            <Route path="/" element={<HomeCarousel />} />
            <Route
              path="/roster"
              element={<Roster rosterData={rosterData} />}
            />
            <Route
              path="/playerstats"
              element={<PlayerStats teamStats={teamStats} />}
            />
            <Route
              path="/roster/:playerId"
              element={
                <PlayerPages
                  playerStats={playerStats}
                  rosterData={rosterData}
                />
              }
            />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
