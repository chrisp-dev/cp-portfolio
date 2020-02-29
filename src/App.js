import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import './style.css';
import AnimatedComponent from './components/Animated';

function App() {
  return (
    <Router>
      <div className="App">
        <AnimatedComponent />
        {/* <Switch>
          <Route exact path="/portfolio">
            <Gallery />
          </Route>
          <Route exact path="/">
          </Route>
        </Switch> */}
        <div className="bg-img"></div>
      </div>
    </Router>
  );
}

export default App;
