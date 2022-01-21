import './App.css';
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Navbar from './components/Navbar';
import HomeCarousel from './components/HomeCarousel'
import Roster from './components/Roster';
import PlayerStats from './components/PlayerStats';
import PlayerPages from './components/PlayerPages';
import Injuries from './components/Injuries';
import Schedule from './components/Schedule';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>

    <Routes>

      <Route path='/' element={<HomeCarousel />}/>
      <Route path='/roster' element={<Roster />}/>
      <Route path='/playerstats' element={<PlayerStats />}/>
      <Route path='/playerpages' element={<PlayerPages />}/>
      <Route path='/schedule' element={<Schedule />}/>
      <Route path='/injuries' element={<Injuries />}/>
      
    </Routes>

    </div>
  );
}

export default App;
