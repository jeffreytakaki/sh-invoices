import React, { useState, useEffect } from 'react';

export const LineItem = ({description='', price=0, saveLineItem,index}) => {
    const [LineItemObj, setLineItem] = useState({description, price});

    const submitChange = (e) => {
        if(e.target.className === 'description') {
            setLineItem({...LineItemObj, description: e.target.value})
        } else {
            setLineItem({...LineItemObj, price: e.target.value})
        }
    }

    useEffect(() => {
        // submit to higher order
        saveLineItem(LineItemObj, index)
    }, [LineItemObj]);
    
    return (
        <li>
            <div className="lineItem-column description">
                <label>description</label>
                <input 
                    type="text" 
                    className="description" 
                    onChange={submitChange}
                    value={LineItemObj.description} />
            </div>
            <div className="lineItem-column price">
                <label>price</label>
                <input 
                    type="text" 
                    className="price" 
                    onChange={submitChange}
                    value={LineItemObj.price}/>
            </div>
        </li>
    )
}