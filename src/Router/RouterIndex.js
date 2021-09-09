import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "../components/Home/Home"

const Routing = () => {
    return (
        <Router>
            <Route exact path="/" component={Home}/>
        </Router>
    )
}
export default Routing