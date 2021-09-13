import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "../components/Home/Home";
import MenFashion from "../components/MenFashion/MenFashion";

const Routing = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/menfashion" component={MenFashion} />
    </Router>
  );
};
export default Routing;
