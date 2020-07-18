import React from 'react'
import classes from './BurgerControl.module.css'

// display label, change type in ingredients
const BurgerControl = (props) =>{  
    return(
        <div className = {classes.BuildControl}>
            <div style={{paddingRight:'15px'}}><strong>{props.label}</strong></div>
            <button onClick={props.addingredients}>+</button>
            <button disabled={props.disablebutton} onClick={props.removeingredients}> - </button>
        </div>
    )
}

export default BurgerControl;