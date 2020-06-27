import React from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import HomePage from "./routes/home";
import MainPage from "./routes/main";
import "./App.scss";

function App() {
    return (
        <React.Fragment>
            <Switch>
                <Route path="/home" component={HomePage} />
                <Route path="/main" component={MainPage} />
                <Redirect to="/home" />
            </Switch>
        </React.Fragment>
    );
}

export default App;
