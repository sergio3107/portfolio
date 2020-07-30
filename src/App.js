import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./pages/About";
import Home from "./pages/home";
import Contacts from "./pages/contacts";
import Testimonials from "./pages/testimonials";
import Projects from "./pages/projects";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Home />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contacts" component={Contacts} />
            <Route exact path="/testimonials" component={Testimonials} />
            <Route exact path="/projects" component={Projects} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
