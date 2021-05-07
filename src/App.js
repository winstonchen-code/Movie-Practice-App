import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Components/Header';
import Layout from './Layout'
import "./App.css";

function App() {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <Layout/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App
