import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import './style.css';
import Gallery from './components/Gallery';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/portfolio">
            <Gallery />
          </Route>
          <Route exact path="/">
            <h3>Chris Paradeise is leet.</h3>
          </Route>
        </Switch>
        <div className="bg-img"></div>
      </div>
    </Router>
  );
}

export default App;
