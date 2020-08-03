import React, { useState, useEffect, useCallback } from 'react';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import {LineItem} from './LineItem';
import './CreateEditInvoice.scss'
import validator from 'validator';
import { ErrorHandling } from '../ErrorHandling'

// import the library
// get our fontawesome imports
import { faPlus, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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
    const [error, setError] = useState(false)

    const handleValidation = (invoice) => {
        const validations = [
            {
                section: 'name',
                test: validator.isAlpha(invoice.name)
            }, 
            {
                section: 'email',
                test:  validator.isEmail(invoice.email),
            },
            { 
                section: 'date',
                test: validator.isDate(invoice.dueDate, 'MM/DD/YYYY'),
            },
        ]; 

        console.log('validations', validations)
        for( let i = 0; i < validations.length; i++) {
            if(!validations[i].test) {
                return validations[i];
            }
        }

        return true;
    }

    const createInvoice = (e) => {
        e.preventDefault();
        if(invoice.lineItems.length > 0) {
            const build = {...invoice, total: CalculateTotal()}
            const checkFields = handleValidation(build)
            if(checkFields === true) {
                setError(false)
                cb(build, index)
                setInvoice({...initialState, initialState})
                history.push('/list-view')
            } else {
                // handle error messaging here
                setError(`Please check ${checkFields.section} and try again`)
            }
            
        } else {
            setError(`Please add 1 or more line items and try again`)
        }
        
    }

    const deleteInvoice = (e) => {
        e.preventDefault();
        deleteInvoiceCb(invoices,index)
        history.push('/list-view')
    }

    const saveLineItem = useCallback((lineItem, index) => {
        let newArray = [...invoice.lineItems]
        newArray[index] = lineItem
        setInvoice({...invoice, lineItems: newArray});
    }, [invoice])

    const renderLineItems = invoice.lineItems.map((lineItem, index) => {
        return <LineItem key={index} index={index} description={lineItem.description} price={lineItem.price} cb={saveLineItem}/>
    })

    const addLineItem = useCallback(() => {
        const newLineItem = {description: '', price: 0}
        let newArray = [...invoice.lineItems, newLineItem]
        setInvoice({...invoice, lineItems: newArray});
    },[invoice]);

    const CalculateTotal = useCallback(() => {
        let total = 0;
        invoice.lineItems.forEach((value, index) => {
            const int = parseFloat(value.price)
            if(int > 0) {
                total = total + int
            }
        })

        return total;
    },[invoice])

    const RenderFooter = () => {
        if(invoices.length) {
            return (
                <div className="invoice-footer">
                    <Link className="back" to="/list-view"><FontAwesomeIcon icon={faArrowLeft} size="lg" />  BACK</Link>
                    <button className="btn btn-danger" onClick={deleteInvoice}>DELETE</button>
                    <button className="btn btn-success" onClick={createInvoice}>SAVE</button>
                </div> 
            ) 
        } else {
            return (
                <div className="invoice-footer">
                    <Link className="back" to="/list-view"><FontAwesomeIcon icon={faArrowLeft} size="lg" />  BACK</Link>
                    <button className="btn btn-success" onClick={createInvoice}>CREATE</button>
                </div> 
            )  
        }
    }

    useEffect(() => {
        CalculateTotal()
    }, [CalculateTotal]);

    return (
        <div className='create-edit-invoice-container'>
            <ErrorHandling message={error} />
            <form>
                <div className="input-section form-group">
                    <label>Name:</label>
                    <input 
                        type="text" 
                        placeholder="enter name" 
                        className="input-field form-control" 
                        onChange={(e) => {setInvoice({...invoice, name: e.target.value})}}
                        required
                        value={invoice.name}
                    />
                </div>
                <div className="input-section form-group">
                    <label>Email:</label>
                    <input 
                        type="text"
                        placeholder="enter email"
                        className="input-field form-control" 
                        onChange={(e) => {setInvoice({...invoice, email:  e.target.value})}}
                        value={invoice.email}
                    />
                </div>
                <div className="input-section form-group">
                    <label>Due Date:</label>
                    <input 
                        type="text"
                        placeholder="enter date (mm/dd/yyyy)"
                        className="input-field form-control" 
                        onChange={(e) => {setInvoice({...invoice, dueDate:  e.target.value})}}
                        value={invoice.dueDate}
                    />
                </div>
                <div className="input-section form-group line-items-container">

                    <h1>Purchased Items:</h1>
                    <ul className="line-items-list">
                    {renderLineItems}
                    </ul>
                    
                    <div className="addLineItem" onClick={addLineItem}>
                        <FontAwesomeIcon icon={faPlus} size="3x" />
                    </div>
                </div>
                <div className="input-section">
                    <h1>total: <CalculateTotal /></h1>

                </div>

                <RenderFooter />    
            </form>
        </div>
    )
}