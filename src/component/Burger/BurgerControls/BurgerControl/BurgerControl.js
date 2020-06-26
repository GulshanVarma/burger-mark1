import React from 'react'
import classes from './BurgerControl.module.css'

// display label, change type in ingredients
const BurgerControl = (props) =>{  
    return(
        <div className = {classes.BuildControl}>
            {props.label}
            <button disabled={props.canpurchase} onClick={props.addingredients}> + </button>
            <button disabled={props.canpurchase} onClick={props.removeingredients}> - </button>

        </div>
    )
}

export default BurgerControl;