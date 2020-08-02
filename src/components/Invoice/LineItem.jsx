import React, { useState, useEffect } from 'react';
import './LineItem.scss'

export const LineItem = ({description='', price=0, saveLineItem,index}) => {
    const [LineItemObj, setLineItem] = useState({description, price});

    const submitChange = (e) => {
        console.log('e.target', e.target)
        if(e.target.dataset.type === 'description') {
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
        <li className="line-item">
            <div className="lineItem-column description">
                <label>description</label>
                <input 
                    type="text" 
                    className="form-control" 
                    data-type="description"
                    onChange={submitChange}
                    value={LineItemObj.description} />
            </div>
            <div className="lineItem-column price">
                <label>price</label>
                <input 
                    type="text" 
                    className="form-control" 
                    data-type="price"
                    onChange={submitChange}
                    value={LineItemObj.price}/>
            </div>
        </li>
    )
}