import React from 'react'
import {Component} from 'react'
import Burger from '../component/Burger/Burger'
import BurgerControls from '../component/Burger/BurgerControls/BurgerControls'

const statePrice = {
    'salad': 2,
    'cheese' : 1,
    'meat' :  3,
    'patty' : 2
}
class BurgerBuilder extends Component{
    // TASKS
    
    // + - enable disable
    // modal to orderSummary
    // purchasing to display modal
    state = {
        ingredients : {
            'salad': 0,
            'cheese' : 0,
            'meat' :  0,
            'patty' : 0
        },
        totalPrice : 4,
        purchasing : false,
        purchasable : false
    }
    calcTotalPrice = (stateTemp) => {
        const price = Object.keys(stateTemp).map(el => {
            return (stateTemp[el] * statePrice[el])
        }).reduce((sum,el) => {
            return sum+el;
        },4);
    this.setState({purchasable: (price > 4)});
    this.setState({totalPrice:price});
    }

    addIngredients = (type) =>{
        const testIngredientState = {...this.state.ingredients};
        const testIngredientCount = testIngredientState[type] + 1;
        testIngredientState[type] = testIngredientCount;
        this.setState({ingredients:testIngredientState})
        this.calcTotalPrice(testIngredientState);
    }
    removeIngredients = (type) =>{
        // console.log('in remove');
        const testIngredientState = {...this.state.ingredients};
        let testIngredientCount = testIngredientState[type];
        if(testIngredientCount !== 0){
            testIngredientCount = testIngredientCount - 1;
            testIngredientState[type] = testIngredientCount;
            this.setState({ingredients:testIngredientState})
            this.calcTotalPrice(testIngredientState);
        }
    }
    render(){
        console.log(this.state);
        return(
            <div>
                <Burger ingredients={this.state.ingredients}/>
                <BurgerControls 
                    addingredients = {this.addIngredients}
                    removeingredients = {this.removeIngredients}
                    canpurchase = {this.state.purchasable}
                />
                
                // require show and clicked
                {/* <Modal>
                    [BB] Order Summary
                </Modal> */}
            </div>
        )
    }
}

export default BurgerBuilder;