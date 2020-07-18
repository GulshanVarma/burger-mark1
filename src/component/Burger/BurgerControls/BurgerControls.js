import React from 'react'
import BurgerControl from './BurgerControl/BurgerControl'
import classes from './BurgerControls.module.css'
import Button from '../../UI/Buttons/Button'


//canPurchase is for order button
// purchaseState is to display order summary

const BurgerControls = (props) =>{
    const labelState = [
        {label : 'Salad', type : 'salad'},
        {label : 'Cheese', type : 'cheese'},
        {label : 'Meat', type : 'meat'},
        {label : 'Patty', type : 'patty'},
    ]
    console.log('[BC] price = ',props.price);

    // label to display, type to change in ingredients
    return(
        <div className = {classes.BurgerControls}>
            {
                labelState.map((el,i) => {
                    return <BurgerControl 
                        key={i} 
                        label={el['label']} 
                        type={el['type']} 
                        addingredients={() => {props.addingredients(el['type'])}}
                        removeingredients={() => {props.removeingredients(el['type'])}}
                        disablebutton={props.disablestate[el['type']]}
                    />
                })
            }
            
            <br/>

            <button 
                className={classes.button1} 
                disabled={!props.canpurchase} 
                onClick={props.purchaseState}>
                ORDER</button>
            <p><strong>Current Price: ${props.price}</strong></p>
        </div>

    )
}


export default BurgerControls;