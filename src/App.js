import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import './style.css';
import AnimatedComponent from './components/Animated';
import './styles/tailwind.css';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header transparent className="w-full text-white text-left" />
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
