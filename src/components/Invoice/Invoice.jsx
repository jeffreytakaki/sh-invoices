import React, { useState } from 'react';
import { Link } from "react-router-dom";


export const Invoice = ({index, name, email, dueDate, total}) => {
    
    return (
        <div className="invoice-container">
            <div className="invoice-column">
                <ul>
                    <li>Name: {name}</li>
                    <li>Email: {email}</li>
                    <li>Due Date: {dueDate}</li>
                    <li>Total: {total}</li>
                </ul>
            </div>  
            <div className="invoice-column">
                <Link to={`/edit/${index}`}>Edit</Link>
            </div>
            
        </div>
    
       
    )
}