import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import AboutUs from './pages/aboutUs/AboutUs';
import AllPlants from './pages/allPlants/AllPlants';
import LangContextProvider from "./context/LangContextProvider";

function App() {
  return (
    <LangContextProvider>
    <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about-us">
            <AboutUs />
          </Route>
          <Route path="/all-plants">
            <AllPlants />
          </Route>
        </Switch>
    </Router>
    </LangContextProvider>
  );
}

export default App;
