import React from 'react';
// import './App.css';
import Countdown from './components/countdown';
import CountdownWithLibrary from './components/countDownWithLibrary'

function App() {
  return (
    <div className="App">
      <header className="App-header">
     <Countdown/>
     <CountdownWithLibrary/>
      </header>
    </div>
  );
}

export default App;
