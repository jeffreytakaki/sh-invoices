import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Invoice.scss';


export const Invoice = ({index, name, email, dueDate, total}) => {
    
    return (
        <div className="invoice-container">
            <div className="invoice-column invoice-column-8">
                <ul>
                    <li>Name: {name}</li>
                    <li>Email: {email}</li>
                    <li>Due Date: {dueDate}</li>
                    <li>Total: {total}</li>
                </ul>
            </div>  
            <div className="invoice-column invoice-column-edit">
                <Link to={`/edit/${index}`}>Edit</Link>
            </div>
            
        </div>
    
       
    )
}