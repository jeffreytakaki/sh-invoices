import React from 'react';
import { Link } from "react-router-dom";
import './Invoice.scss';


export const Invoice = ({index, name, email, dueDate, total}) => {
    
    return (
        <div className="invoice-container">
            <div className="invoice-column invoice-column-8">
                <ul>
                    <li><strong>Name:</strong> {name}</li>
                    <li><strong>Email:</strong> {email}</li>
                    <li><strong>Due Date:</strong> {dueDate}</li>
                    <li><strong>Total:</strong> {total}</li>
                </ul>
            </div>  
            <div className="invoice-column invoice-column-edit">
                <Link to={`/edit/${index}`}>Edit</Link>
            </div>
            
        </div>
    
       
    )
}