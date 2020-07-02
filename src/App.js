import React from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import TodoList from "./components/TodoList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
