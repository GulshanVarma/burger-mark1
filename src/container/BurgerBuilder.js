import React from 'react'
import {Component} from 'react'
import Burger from '../component/Burger/Burger'
import BurgerControls from '../component/Burger/BurgerControls/BurgerControls'
import Modal from '../UI/Modal/Modal'
import OrderSummary from '../component/OrderSummary/OrderSummary'
import Aux from '../hoc/Aux'
import Axios from '../axiosOrders'

// Task : 
// checkout in Modal
// ajax 
// routing
// redux

const statePrice = {
    'salad': 1.5,
    'cheese' : 1.5,
    'meat' :  3.2,
    'patty' : 2
}
class BurgerBuilder extends Component{
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
        totalPrice : 4.00,
        purchasing : false, // when order button is clicked, in purchasing state
        purchasable : false // enable order button  
    }

    componentWillMount(){
        Axios.get('./ingredients.json').then(
            response =>{
                this.setState({ingredients: response.data});
                this.calcTotalPrice(response.data);
            }
        ).catch(error => {console.log(error)})
    }    
    
    calcTotalPrice = (stateTemp) => {
        const disableState = {...this.state.disabledIngredients};
        const price = Object.keys(stateTemp).map((el,index) => {
            disableState[el] = (stateTemp[el] == 0);
            return (stateTemp[el] * statePrice[el])
        }).reduce((sum,el) => {
            return sum+el;
        },4).toFixed(2);
    this.setState({purchasable: (price > 4)});
    this.setState({totalPrice:price});
    this.setState({disabledIngredients:disableState});
    
    }

    addIngredients = (type) =>{        
        const testState = {...this.state};
        const testIngredientCount = testState.ingredients[type] + 1;
        testState.ingredients[type] = testIngredientCount;  // add ing
        testState.disabledIngredients[type] = false;    // disable button

        this.setState({ingredients : testState.ingredients,
            disabledIngredients: testState.disabledIngredients});
        
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

    togglePurchaseState = () =>{        
        const purchaseState = !this.state.purchasing;
        this.setState({purchasing : purchaseState})
    }

    continuePuchaseHandler = () =>{
        const orders = {
            ingredients : this.state.ingredients,
            price : this.state.totalPrice,
            customer : {
                Name : 'Gulshan',
                Street : 'Chuna Bhatti',
                City : 'Ragada Patti'
            },
            Delivery : 'Express'
        }
        Axios.post('/orders.json', orders).then(
            response => console.log(response)   
        ).catch(
            error => console.log(error)
        );
        document.write('ordered');
    }

    render(){
        return(
            <Aux>
                <Modal show={this.state.purchasing} clicked={this.togglePurchaseState}>
                    <OrderSummary 
                        ingredients={this.state.ingredients} 
                        totalprice={this.state.totalPrice}
                        cancelpurchase={this.togglePurchaseState}
                        continuepurchase={this.continuePuchaseHandler}
                    />
                </Modal>

                <Burger ingredients={this.state.ingredients}/>
                
                <BurgerControls 
                    addingredients = {this.addIngredients}
                    removeingredients = {this.removeIngredients}
                    canpurchase = {this.state.purchasable}
                    disablestate = {this.state.disabledIngredients}
                    purchaseState = {this.togglePurchaseState}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder;