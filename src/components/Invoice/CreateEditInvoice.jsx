import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import {LineItem} from './LineItem';

export const CreateEditInvoice = ({cb, invoices=[], index, deleteInvoiceCb}) => {
    const history = useHistory();
    const initialState = {id: '', name: '', email: '', dueDate: '', lineItems: []}
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
        setInvoice({...initialState, initialState})
        history.push('/list-view')
    }

    const deleteInvoice = (e) => {
        e.preventDefault();
        deleteInvoiceCb(invoices,index)
        history.push('/list-view')
    }

    const saveLineItem = (lineItem, index) => {
        let newArray = [...invoice.lineItems]
        newArray[index] = lineItem
        setInvoice({...invoice, lineItems: newArray});
    }

    const renderLineItems = invoice.lineItems.map((lineItem, index) => {
        return <LineItem key={index} index={index} description={lineItem.description} price={lineItem.price} saveLineItem={saveLineItem}/>
    })

    const addLineItem = () => {
        const newLineItem = {description: '', price: 0}
        let newArray = [...invoice.lineItems, newLineItem]
        setInvoice({...invoice, lineItems: newArray});
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
                <div className="input-section">
                    {renderLineItems}
                    <div onClick={addLineItem}>+</div>
                </div>
                <RenderFooter />    
            </form>
        </div>
    )
}