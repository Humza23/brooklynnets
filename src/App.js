import './App.css';
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>



      {/* <Routes>
        <Route path='/roster'>
          <Item items={stock} />
        </Route>
        <Route path='/playerstats'>
          <ItemsList items={stock} />
        </Route>
        <Route path='/playerpages'>
          <ItemsList items={stock} />
        </Route>
        <Route path='/schedule'>
          <ItemsList items={stock} />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Routes> */}
    </div>
  );
}

export default App;
