import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navigation";
import Home from "./components/Home";
import "./App.css";

const App = () => {
  return (
    <section className="App">
      <Router>
        {/* <section className="container"> */}
        <Navbar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
        {/* </section> */}
      </Router>
    </section>
  );
};

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

const Footer = () => {
  return <p>Footer</p>;
}

export default App;
