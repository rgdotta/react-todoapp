import React from "react";
import Home from "./components/Home/Home";
import TodoList from "./components/Lists/Todo/TodoList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/global.css";
import "./css/mediaQuery.css";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/listas" exact component={TodoList} />
      </Switch>
    </Router>
  );
}
