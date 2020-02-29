import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import './style.css';
import AnimatedComponent from './components/Animated';
import './styles/tailwind.css';
import Header from './components/Header';
import Resume from './components/Resume';

function App() {
  return (
    <Router>
      <div className="App">
        <Header transparent className="w-full text-white text-left" />
        {/* <Resume /> */}
        <Switch>
          <Route exact path="/portfolio">
            <AnimatedComponent />
            {/* <Gallery /> */}
          </Route>
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/">
            <AnimatedComponent />
          </Route>
        </Switch>
        <div className="bg-img"></div>
      </div>
    </Router>
  );
}

export default App;
