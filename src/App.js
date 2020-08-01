import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Header } from './components/Header'
import  { Invoices } from './components/Invoices'
import  { CreateEditInvoice } from './components/Invoice/CreateEditInvoice'



function App() {
    const [invoices, setInvoices] = useState([]);

    const addInvoice = (invoice) => {
        // setInvoices([...invoices, invoice])
        setInvoices(invoices.concat(invoice))
    }

    return (
    <div className="App">
        <Header />
        <Router>
            <Switch>
            <Route path="/list-view">
                <h1>router list</h1>
                <Invoices invoices={invoices}/>
            </Route>    
            <Route path="/create">
                <CreateEditInvoice addInvoice={addInvoice}/>
            </Route>
            <Route path="/edit/:id">
                <CreateEditInvoice />
            </Route>
            <Route path="/">

            </Route>
            </Switch>
        </Router>
    </div>
    );
}

export default App;
