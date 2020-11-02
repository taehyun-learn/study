import React from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Header from "components/Header";
import Home from "routes/Home";
import BestHorrorScenes from "routes/StudyCSS/BestHorrorScenes";


const AppRouter = () =>{
    return (
        <Router>
            <>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/studycss/bhs">
                        <BestHorrorScenes />
                    </Route>
                </Switch>
            </>
        </Router>
    )
}

export default AppRouter;