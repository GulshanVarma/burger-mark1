import React from 'react'
import {Component} from 'react'
import Burger from '../component/Burger/Burger'
import BurgerControls from '../component/Burger/BurgerControls/BurgerControls'
import Modal from '../component/UI/Modal/Modal'
import OrderSummary from '../component/OrderSummary/OrderSummary'
import Aux from '../hoc/_Aux'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import * as actions from '../store/actions/index'
import Loader from '../component/UI/Loader/Loader'
import Backdrop from '../component/UI/Backdrop/Backdrop'

class BurgerBuilder extends Component{
    state = {
        purchasing : false, // when order button is clicked, in purchasing state
        loading : true
    }
    componentDidMount(){
        this.props.initIngredients()
        console.log('[BB CDM]',this.props.ings);
    }

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
        let BC = null;
        // console.log(this.state.loading);
        // if(this.state.loading)
        // {
        //     burger = <Loader />
        // }
        // else{
        //     burger = <Burger ingredients={this.props.ings}/>
        // };
        console.log(this.props.ings,this.props.price);
        if(this.props.ings){
            burger = <Burger ingredients={this.props.ings}/>
            BC = <BurgerControls 
            addingredients = {this.props.onIngredientAdded}
            removeingredients = {this.props.onIngredientRemoved}
            canpurchase = {this.props.price > 4}        // purchasable replacement
            disablestate = {disableinfo}
            purchaseState = {this.togglePurchaseState}
            price = {this.props.price}
        />
        }
        else{
            burger = <Backdrop show={!this.props.ings}><Loader /></Backdrop>
        }
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
                {BC}
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: parseFloat(state.burgerBuilder.totalPrice).toFixed(2)
    };  
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(actions.addIngs(ingName)),
        onIngredientRemoved: (ingName) => dispatch(actions.removeIngs(ingName)),
        initIngredients: () => dispatch(actions.initIngs())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BurgerBuilder));