import React, { useState } from 'react';
import { Link } from "react-router-dom";

export const CreateEditInvoice = ({cb, invoices=[], index, deleteInvoiceCb}) => {
    const initialState = {id: '', name: '', email: '', dueDate: '', descriptions: []}
    const loadState = () => {
        if(invoices.length) {
            // load up the saved invoice
            return invoices[index];
        } else {
            return initialState;
        }
    }
    const [invoice, setInvoice] = useState(loadState());

    const createInvoice = (e) => {
        e.preventDefault();
        cb(invoice, index)
        // TODO - clear out fields after submit
        setInvoice({...initialState, initialState})
    }

    const deleteInvoice = (e) => {
        e.preventDefault();
        deleteInvoiceCb(invoices,index)
    }

    const RenderFooter = () => {
        if(invoices.length) {
        
            return (
                <div className="invoice-footer">
                    <Link to="/list-view">BACK</Link>
                    <button onClick={deleteInvoice}>DELETE</button>
                    <button onClick={createInvoice}>SAVE</button>
                </div> 
            )
                
                
        } else {
            return (
                <div className="invoice-footer">
                    <Link to="/list-view">BACK</Link>
                    <button onClick={createInvoice}>CREATE</button>
                </div> 
            )  
        }
    }

    return (
        <div className='invoice-container'>
            <form>
                <div className="input-section">
                    <label>Name:</label>
                    <input 
                        type="text" 
                        placeholder="enter name" 
                        className="input-field" 
                        onChange={(e) => {setInvoice({...invoice, name: e.target.value})}}
                        value={invoice.name}
                    />
                </div>
                <div className="input-section">
                    <label>Email:</label>
                    <input 
                        type="text"
                        placeholder="enter email"
                        className="input-field" 
                        onChange={(e) => {setInvoice({...invoice, email:  e.target.value})}}
                        value={invoice.email}
                    />
                </div>
                <div className="input-section">
                    <label>Due Date:</label>
                    <input 
                        type="text"
                        placeholder="enter email"
                        className="input-field" 
                        onChange={(e) => {setInvoice({...invoice, dueDate:  e.target.value})}}
                        value={invoice.dueDate}
                    />
                </div>
                
                <RenderFooter />
                
            </form>
            
        </div>
    )
}