import React, { useState } from 'react';
import { Link } from "react-router-dom";



export const Invoice = () => {
    const [invoice, setInvoice] = useState({name: 'initial', email: 'initial', descriptions: []});

    const createInvoice = (e) => {
        e.preventDefault();
        console.log('invoice', invoice)
    }

    return (
        <div className='invoice-container'>
            <form>
                <div className="input-section">
                    <label>Name:</label>
                    <input type="text" placeholder="enter name" className="name" onChange={(e) => {setInvoice({...invoice, name: e.target.value})}}/>
                </div>
                <div className="input-section">
                    <label>Email:</label>
                    <input type="text" placeholder="enter email" className="name" onChange={(e) => {setInvoice({...invoice, email:  e.target.value})}}/>
                </div>
                <div className="invoice-footer">
                    <Link to="/list-view">BACK</Link>
                    <button onClick={createInvoice}>CREATE</button>
                </div>
            </form>
            
        </div>
    )
}