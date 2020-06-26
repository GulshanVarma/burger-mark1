import React from 'react'
import {Component} from 'react'
import Burger from '../component/Burger/Burger'

class BurgerBuilder extends Component{
    state = {
        ingredients : {
            'salad': 1,
            'cheese' : 2,
            'meat' :  1,
            'patty' : 4
        },
        'totalPrice' : 4
    }
    render(){
        return(
            <Burger ingredients={this.state.ingredients}/>
        )
    }
}

export default BurgerBuilder;