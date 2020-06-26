import React from 'react'
import BurgerControl from './BurgerControl/BurgerControl'
import classes from './BurgerControls.module.css'

const BurgerControls = (props) =>{
    const labelState = [
        {label : 'Salad', type : 'salad'},
        {label : 'Cheese', type : 'Cheese'},
        {label : 'Meat', type : 'meat'},
        {label : 'Patty', type : 'patty'},
    ]
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
                    />
                })
            }
        </div>
    )
}

export default BurgerControls;