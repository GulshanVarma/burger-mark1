import React from 'react'
import {Component} from 'react'
import Burger from '../component/Burger/Burger'
import BurgerControls from '../component/Burger/BurgerControls/BurgerControls'
import Modal from '../component/UI/Modal/Modal'
import OrderSummary from '../component/OrderSummary/OrderSummary'
import Aux from '../hoc/_Aux'
import Axios from '../axiosOrders'
import {withRouter} from 'react-router-dom'
import Loader from '../component/UI/Loader/Loader'
import {connect} from 'react-redux'
import * as actionTypes from '../store/action';
// import Loader from '../component/UI/Loader/Loader'

// Task : 
// routing
    // create checkout component to route
    // create Taskbar for linkks
    // add loader spin

// redux

const statePrice = {
    'salad': 1.5,
    'cheese' : 1.5,
    'meat' :  3.2,
    'patty' : 2
}
class BurgerBuilder extends Component{
    state = {
        disabledIngredients: {
            'salad': true,
            'cheese' : true,
            'meat' : true,
            'patty' : true
        },
        totalPrice : 4.00,
        purchasing : false, // when order button is clicked, in purchasing state
        purchasable : false, // enable order button  
        loading : true
    }

    // componentWillMount(){
        // Axios.get('./ingredients.json').then(
        //     response =>{
        //         console.log('loading from server');
        //         this.setState({ingredients: response.data});
        //         this.calcTotalPrice(response.data);
        //         this.setState({loading:false});
        //     }
        // ).catch(error => {console.log(error)})
    // }    
    
    calcTotalPrice = (stateTemp) => {
        const disableState = {...this.state.disabledIngredients};
        const price = Object.keys(stateTemp).map((el,index) => {
            disableState[el] = (stateTemp[el] === 0);
            return (stateTemp[el] * statePrice[el])
        }).reduce((sum,el) => {
            return sum+el;
        },4).toFixed(2);
        this.setState({purchasable: (price > 4)});
        this.setState({totalPrice:price});
        this.setState({disabledIngredients:disableState});
    }

    // addIngredients = (type) =>{        
    //     const testState = {...this.state};
    //     const testIngredientCount = testprops.ingredients[type] + 1;
    //     testprops.ingredients[type] = testIngredientCount;  // add ing
    //     testState.disabledIngredients[type] = false;    // disable button

    //     this.setState({ingredients : testprops.ingredients,
    //         disabledIngredients: testState.disabledIngredients});
        
    //     this.calcTotalPrice(testprops.ingredients);     //price update
    // }
    
    // removeIngredients = (type) =>{
    //     const testState = {...this.state};
    //     let testIngredientCount = testprops.ingredients[type];
    //     if(testIngredientCount >= 1){
    //         testIngredientCount = testIngredientCount - 1;
    //         if (testIngredientCount === 0 ) testState.disabledIngredients[type] = true;
            
    //         testprops.ingredients[type] = testIngredientCount;
    //         this.setState({ingredients : testprops.ingredients,
    //             disabledIngredients: testState.disabledIngredients});
    //         this.calcTotalPrice(testprops.ingredients);
    //     }
    // }

    togglePurchaseState = () =>{        
        const purchaseState = !this.state.purchasing;
        this.setState({purchasing : purchaseState})
    }

    continuePuchaseHandler = () =>{
        // const orders = {
        //     ingredients : this.props.ingredients,
        //     price : this.state.totalPrice,
        //     customer : {
        //         Name : 'Gulshan',
        //         Street : 'Chuna Bhatti',
        //         City : 'Ragada Patti'
        //     },
        //     Delivery : 'Express'
        // }
        let param = [];
        for(let i in this.props.ingredients){
            param.push(i+'='+this.props.ingredients[i])
        }
        param.push('price='+this.state.totalPrice)
        param = param.join('&');
        this.props.history.push({
            pathname:'/checkout',
            search: '?'+param
        });

        /* push order to checkout page to show all orders in checkout page */

        // Axios.post('/orders.json', orders).then(
        //     response => console.log(response)   
        // ).catch(
        //     error => console.log(error)
        // );
        // document.write('ordered');
    }

    render(){
        let burger = null;
        console.log(this.state.loading);
        if(this.state.loading)
        {
            burger = <Loader />
        }
        else{
            burger = <Burger ingredients={this.props.ings}/>
        };
        burger = <Burger ingredients={this.props.ings}/>
        return(
            <Aux>
                <Modal show={this.state.purchasing} clicked={this.togglePurchaseState}>
                    <OrderSummary 
                        ingredients={this.props.ingredients} 
                        totalprice={this.state.totalPrice}
                        cancelpurchase={this.togglePurchaseState}
                        continuepurchase={this.continuePuchaseHandler}
                    />
                </Modal>

                {burger}
                
                <BurgerControls 
                    addingredients = {this.props.onIngredientAdded}
                    removeingredients = {this.props.onIngredientRemoved}
                    canpurchase = {this.state.purchasable}
                    disablestate = {this.state.disabledIngredients}
                    purchaseState = {this.togglePurchaseState}
                />
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName: ingName}),
        onIngredientRemoved: (ingName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BurgerBuilder));