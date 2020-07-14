import React from 'react'
import {Component} from 'react'

class Checkout extends Component{
    state = {
        orders:{},
        ingredients:{},
        totalPrice : 0
    }

    componentWillMount(){
        const query = new URLSearchParams( this.props.location.search );
        const ingredients = {};
        let price = 0;
        for ( let param of query.entries() ) {
            // ['salad', '1']
            if (param[0] === 'price') {
                price = param[1];
            } else {
                ingredients[param[0]] = +param[1];
            }
        }
        this.setState( { ingredients: ingredients, totalPrice: price } );
        console.log(ingredients);
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