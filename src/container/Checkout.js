import React from 'react'
import {Component} from 'react'
import {connect} from 'react-redux'
import CheckoutSummary from '../component/CheckoutSummary/CheckoutSummary'


class Checkout extends Component{
    state = {
        orders:{},
        ingredients:{},
        totalPrice : 0
    }

    render(){
        return (<CheckoutSummary ingredients={this.props.ings} price={this.props.price}/>)
    }
}

const mapStateToProps = state =>{
    return {
        ings: state.ingredients,
        price: state.totalPrice
    };
}

export default connect(mapStateToProps,null)(Checkout);