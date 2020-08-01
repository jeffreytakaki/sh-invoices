import React, { useState } from 'react';
import { Link } from "react-router-dom";
import  { Invoice } from '../Invoice'

export const Invoices = ({invoices}) => {
    const invoiceList = invoices.map((invoice, index) => {
        console.log('invoice -> ', invoice)
        return <Invoice key={index} index={index} name={invoice.name} email={invoice.email} dueDate={invoice.dueDate} total={invoice.total} />
    })

    return (
        <div className="list-view-container">
            <Link to="/create">Create Invoice</Link>
            <div className="list-body">
                {invoiceList}
            </div>
        </div>  
        
    )
}