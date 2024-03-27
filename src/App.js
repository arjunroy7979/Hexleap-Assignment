import { useEffect, useState } from 'react';
import './App.css';
import Collection from './components/Collection';
import PlayerList from './components/PlayerList';

function App() {
  const [theme, setTheme] = useState("light-theme");
  const toggleTheme = () => {
    theme === "dark-theme" ? setTheme("light-theme") : setTheme("dark-theme");
  }
  useEffect(() => {
    document.body.className = theme;
  }, [theme])
  return (
    <div className='p-4'>
      <PlayerList />
      <Collection />
      <div className='container-fluid'>
        <button className='btn btn-sm btn-primary --btn' onClick={() => toggleTheme()} >M</button>
      </div>
    </div>
  );
}

export default App;
