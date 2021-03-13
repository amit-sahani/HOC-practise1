import './App.css';
import React from 'react';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';

class App extends React.Component {
  render(){
    return (
        <div className="App">
          <header className="App-header">
            <ClickCounter />
            <HoverCounter />
          </header>
        </div>
  )}
}

export default App;
