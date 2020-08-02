import React, { useState } from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Header } from './components/Header'
import  { Invoices } from './components/Invoices'
import  { CreateEditInvoice } from './components/Invoice/CreateEditInvoice'

function App() {
    const initial = [
        {
            name: 'Jeff',
            email: 'jtakaki1@gmail.com',
            dueDate: '12/21/2020',
            lineItems: [
                {description: 'Window installation', price: 550.00}
            ],
            total: 500.00
        },
        {
            name: 'Frank L',
            email: 'jtakaki1+02@gmail.com',
            dueDate: '1/1/2021',
            lineItems: [
                {description: 'Plumbing fix', price: 49.99},
                {description: 'Window installation', price: 550.00}
            ],
            total: 599.99
        }
    ]
    const [invoices, setInvoices] = useState(initial);

    const addInvoice = (invoice) => {
        setInvoices(invoices.concat(invoice))
    }

    const editInvoice = (invoice, index) => {
        let newArray = [...invoices]
        newArray[index] = invoice
        setInvoices(newArray)
    }

    const deleteInvoice = (invoices, index) => {
        let newArray = [...invoices]
        newArray.splice(index, 1)
        setInvoices(newArray)
    }

    return (
    <div className="App">
        <Header />
        <Router>
            <Switch>
                <Route path="/list-view">
                    <Invoices invoices={invoices}/>
                </Route>    
                <Route path="/create">
                    <CreateEditInvoice cb={addInvoice} />
                </Route>
                <Route path="/edit/:id" render={props => {
                    const index = props.match.params.id;
                    return <CreateEditInvoice cb={editInvoice} deleteInvoiceCb={deleteInvoice} invoices={invoices} index={index} />
                }} />
                <Route path="/">

                </Route>
            </Switch>
        </Router>
    </div>
    );
}

export default App;
