import React from 'react';
import classes from './OrderSummary.module.css'
import Button from '../UI/Buttons/Button';

const OrderSummary = (props) => {
    return(
        <div className={classes.OrderSummary}>            
            <p> You Delicious Burger Have </p>
                <ul style={{listStyleType : 'none'}}>
                {
                    Object.keys(props.ingredients).map((el,index) => {
                    if(props.ingredients[el] !== 0) return(<li key={index} style={{fontSize: 'Large'}}>{el} - {props.ingredients[el]} </li>);
                    })
                }
                </ul>
            <h4> total price = {props.totalprice} $</h4> 
            <div className={classes.buttons}>
                <Button method={props.continuepurchase} type="green" show={true}>Continue</Button>
                <Button method={props.cancelpurchase} type="red" show={true}>Cancel</Button>
                {/* <button onClick={props.continuepurchase}> continue </button>
                <button onClick={props.cancelpurchase}> cancel </button>  */}
            </div>
        </div>
    )

};

export default OrderSummary;