import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import DashBoard from "../components/DashBoard/DashBoard";
import NavBar from "../components/NavBar/NavBar";
import NoMatch from "../components/NoMatch";

function Router() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={App} exact={true} />
                <Route path='*' component={NoMatch} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;