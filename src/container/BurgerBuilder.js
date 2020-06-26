import React from 'react'
import {Component} from 'react'
import Burger from '../component/Burger/Burger'
import BurgerControls from '../component/Burger/BurgerControls/BurgerControls'

class BurgerBuilder extends Component{
    state = {
        ingredients : {
            'salad': 1,
            'cheese' : 1,
            'meat' :  1,
            'patty' : 1
        },
        'totalPrice' : 4
    }
    render(){
        const addIngredients = (type) =>{
            console.log('[BB][addIngredients]',type);
            
            // const testIngredientState = {...this.state.ingredients};
            // const testIngredientCount = testIngredientState[type] + 1;
            // testIngredientState[type] = testIngredientCount;
            // this.setState({ingredients:testIngredientState})
        }


        return(
            <div>
                <Burger ingredients={this.state.ingredients}/>
                <BurgerControls 
                    addingredients = {addIngredients}
                />
            </div>
        )
    }
}

export default BurgerBuilder;