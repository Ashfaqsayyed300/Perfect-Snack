// import { Typography,List, ListItem, ListItemText } from '@material-ui/core'
import React from 'react'

const Review = ({cart}) => {
    return (
        <>
            <h5>Order Summary</h5>
            <ul  className='border list-unstyled p-3'>
                {
                    cart.items.map((item)=>(
                        <li className='d-flex justify-content-between ' key={item.name}>
                            <h6>{item.name} <span className='text-danger'>x{item.quantity}</span></h6>
                            <p className='font-weight-bold'>${(item.quantity * item.price).toFixed(2)}</p>
                        </li>
                    ))
                }
                <li className='text-right'>
                    <h6 className='text-danger'>Total:<span> ${cart.totalPrice.toFixed(2)}</span></h6>
                </li>
            </ul>
        </>
    )
}

export default Review
