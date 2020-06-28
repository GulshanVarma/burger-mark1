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
            'meat' : 0,
            'patty' : 0
        },
        disabledIngredients: {
            'salad': true,
            'cheese' : true,
            'meat' : true,
            'patty' : true
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
        const testState = {...this.state};
        const testIngredientCount = testState.ingredients[type] + 1;
        testState.ingredients[type] = testIngredientCount;  // add ing
        testState.disabledIngredients[type] = false;    // disable button

        this.setState({ingredients : testState.ingredients,
            disabledIngredients: testState.disabledIngredients});
        console.log(testState,type);
        
        this.calcTotalPrice(testState.ingredients);     //price update
    }
    removeIngredients = (type) =>{
        const testState = {...this.state};
        let testIngredientCount = testState.ingredients[type];
        if(testIngredientCount >= 1){
            testIngredientCount = testIngredientCount - 1;
            if (testIngredientCount === 0 ) testState.disabledIngredients[type] = true;
            
            testState.ingredients[type] = testIngredientCount;
            this.setState({ingredients : testState.ingredients,
                disabledIngredients: testState.disabledIngredients});
            this.calcTotalPrice(testState.ingredients);
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
                    disablestate = {this.state.disabledIngredients}
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