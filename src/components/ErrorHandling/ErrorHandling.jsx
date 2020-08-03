import React, { useState } from 'react';
import './ErrorHandling.scss'

export const ErrorHandling = ({message}) => {
    
    return (
        <div className="error-container">
            <h2>{message}</h2>
        </div>
    )
}