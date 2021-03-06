import './App.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/'
import Footer from './components/Footer/';
import About  from './components/About';
import NavBar from './components/NavBar';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
const App=()=> {
  return (
    <Router>
      <div className="app">
      <NavBar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/timeline" component={Timeline} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer>

        </Footer>
      </div>
    </Router>

  );
}

export default App;
 