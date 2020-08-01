import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Header } from './components/Header'
import  { Invoices } from './components/Invoices'
import  { Invoice } from './components/Invoice'

function App() {
    return (
    <div className="App">
        <Header />
        <Router>
            <Switch>
            <Route path="/list-view">
                <h1>router list</h1>
                <Invoices />
            </Route>    
            <Route path="/create">
                <Invoice />
            </Route>
            <Route path="/edit/:id">
                <Invoice />
            </Route>
            <Route path="/">

            </Route>
            </Switch>
        </Router>
    </div>
    );
}

export default App;
