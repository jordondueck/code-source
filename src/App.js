import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navigation";
import Dashboard from "./components/Dashboard";
import Projects from "./components/Projects";
import "./App.css";

const App = () => {
  return (
    <section className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </section>
  );
};

function Profile() {
  return <h2>Profile</h2>;
}

function Settings() {
  return <h2>Settings</h2>;
}

export default App;
