import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Layout from './Layout'
import "./App.css";
import MainHeader from './Components/MainHeader/MainHeader';

function App() {
    return (
        <Router>
            <MainHeader/>
            <Switch>
                <Route exact path="/">
                    <Layout/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App
