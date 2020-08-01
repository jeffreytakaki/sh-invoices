import React, { useState } from 'react';
import { Link } from "react-router-dom";

export const CreateEditInvoice = ({addInvoice}) => {
    const initialState = {id: '', name: 'initial', email: 'initial', dueDate: '', descriptions: []}
    const [invoice, setInvoice] = useState(initialState);

    const createInvoice = (e) => {
        e.preventDefault();
        addInvoice(invoice)
        // TODO - clear out fields after submit
        setInvoice({...initialState, initialState})
        // console.log('invoice', invoice)
    }

    return (
        <div className='invoice-container'>
            <form>
                <div className="input-section">
                    <label>Name:</label>
                    <input type="text" placeholder="enter name" className="input-field" onChange={(e) => {setInvoice({...invoice, name: e.target.value})}}/>
                </div>
                <div className="input-section">
                    <label>Email:</label>
                    <input type="text" placeholder="enter email" className="input-field" onChange={(e) => {setInvoice({...invoice, email:  e.target.value})}}/>
                </div>
                <div className="input-section">
                    <label>Due Date:</label>
                    <input type="text" placeholder="enter email" className="input-field" onChange={(e) => {setInvoice({...invoice, dueDate:  e.target.value})}}/>
                </div>
                <div className="invoice-footer">
                    <Link to="/list-view">BACK</Link>
                    <button onClick={createInvoice}>CREATE</button>
                </div>
            </form>
            
        </div>
    )
}