import React from 'react'
import {Component} from 'react'

class Checkout extends Component{
    state = {
        orders:{},
        totalPrice : 0
    }
    render(){
        return (
            <p style={{zAxis : 100}}>Checkout page</p>
        )
    }
}

export default Checkout;