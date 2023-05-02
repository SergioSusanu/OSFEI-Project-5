import React from 'react';
import logo from './logo.svg';
import './App.css';
import Favorites from './features/favorites/Favorites';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Favorites /> 
      </header>
    </div>
  );
}

export default App;
