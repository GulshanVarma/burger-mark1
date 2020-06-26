import React from 'react'
import classes from './Burger.module.css'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'

const burger =(props) =>{
    const BI = Object.keys(props.ingredients).map((el,index) =>{
        return (
            [...Array(props.ingredients[el])].map((_,i) => {
                return <BurgerIngredients key={(index*100)+i} type={el}/>
            })
        )


        // return <BurgerIngredients key={index} type={el}/>;
    })
    return(
        <div className = {classes.Burger}>
        <BurgerIngredients key='111' type='bread'/>
            {BI}
        <BurgerIngredients key='112' type='bread'/>
        </div>

    )
}

export default burger;