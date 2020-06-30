import React from 'react';

const OrderSummary = (props) => {
    return(
        <div>
            <p> You Delicious Burger Have </p>
                <ul  style={{listStyleType : 'none'}}>
                {
                    Object.keys(props.ingredients).map((el,index) => {
                    if(props.ingredients[el] !== 0) return(<li key={index} style={{fontSize: 'Large'}}>{el} - {props.ingredients[el]} </li>);
                    })
                }
                </ul>
            <h4> total price = {props.totalprice} $</h4> 
        </div>
    )

};

export default OrderSummary;