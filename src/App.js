import React from "react";
import Home from "./components/Home/Home";
import Login from "./components/Home/Login";
import Signup from "./components/Home/Signup";
import TodoList from "./components/Lists/TodoList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/styles.css";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/registrar" exact component={Signup} />
        <Route path="/listas" exact component={TodoList} />
      </Switch>
    </Router>
  );
}
