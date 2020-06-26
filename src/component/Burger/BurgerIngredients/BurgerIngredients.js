import React from 'react'
import classes from './BurgerIngredients.module.css'

const burgerIngredients =(props) =>{
    const SwitchCase = () =>{
        console.log('[BI]',props.type);
        
        switch (props.type) {
            case 'bread':
                return (<div className={classes.bread}>bread</div>);
            case 'salad':
                return (<div className={classes.salad}>salad</div>);
            case 'cheese':
                return (<div className={classes.cheese}>cheese</div>);
            case 'meat':
                return (<div className={classes.meat}>meat</div>);
            case 'patty':
                return (<div className={classes.patty}>patty</div>);
            default:
                {console.log('[BI] ing not found',props.type)}
                break;
        }
    }
    return(
        <div className = {classes.BurgerIngredients}>
            {SwitchCase()}
        </div>

    )
}

export default burgerIngredients;