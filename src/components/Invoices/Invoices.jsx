import React from 'react';
import { Link } from "react-router-dom";

export const Invoices = () => {
    return (
        <div className="list-view-container">
            <Link to="/create">Create Invoice</Link>
            <div className="list-body">
                
            </div>
        </div>
        
    )
}