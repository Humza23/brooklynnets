import React from 'react';
import { Link, Route, Routes } from 'react-router-dom'


const Navbar = () => {
  return(
  <div id='navbar'>
    <li>
      <Link to="/roster">Roster</Link>
    </li>
    <li>
      <Link to="/playerstats">Player Stats</Link>
    </li>
    <li>
      <Link to="/playerpages">Player Pages</Link>
    </li>
    <li>
      <Link to="/schedule">Schedule</Link>
    </li>
    <li>
      <Link to="/injuries">Injuries</Link>
    </li>

  </div>
  );
};

export default Navbar;
