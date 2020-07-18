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
        purchasing : false, // when order button is clicked, in purchasing state
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

    togglePurchaseState = () =>{        
        const purchaseState = !this.state.purchasing;
        this.setState({purchasing : purchaseState})
    }

    continuePuchaseHandler = () =>{
        // url params
        let param = [];
        for(let i in this.props.ings){
            param.push(i+'='+this.props.ings[i])
        }
        param.push('price='+this.props.price)
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
        console.log(this.props.ings);
        
        //update disable BC buttons
        let disableinfo = {...this.props.ings};
        for(let i in disableinfo){
            disableinfo[i] = !(disableinfo[i] > 0)
        }

        let burger = null;
        // console.log(this.state.loading);
        // if(this.state.loading)
        // {
        //     burger = <Loader />
        // }
        // else{
        //     burger = <Burger ingredients={this.props.ings}/>
        // };
        console.log(this.props.ings,this.props.price);
        burger = <Burger ingredients={this.props.ings}/>
        return(
            <Aux>
                <Modal show={this.state.purchasing} clicked={this.togglePurchaseState}>
                    <OrderSummary 
                        ingredients={this.props.ings} 
                        totalprice={this.props.price}
                        cancelpurchase={this.togglePurchaseState}
                        continuepurchase={this.continuePuchaseHandler}
                    />
                </Modal>

                {burger}
                
                <BurgerControls 
                    addingredients = {this.props.onIngredientAdded}
                    removeingredients = {this.props.onIngredientRemoved}
                    canpurchase = {this.props.price > 4}        // purchasable replacement
                    disablestate = {disableinfo}
                    purchaseState = {this.togglePurchaseState}
                    price = {this.props.price}
                />
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: parseFloat(state.totalPrice).toFixed(2)
    };  
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName: ingName}),
        onIngredientRemoved: (ingName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BurgerBuilder));