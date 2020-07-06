import React from 'react'
import {Component} from 'react'

class Checkout extends Component{
    state = {
        orders:{},
        totalPrice : 0
    }
    render(){
        return (
            <div style ={{paddingTop:'50px'}}>
                <p>checkoout page</p>
            </div>
        )
    }
}

export default Checkout;