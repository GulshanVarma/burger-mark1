import React from 'react'
import {Component} from 'react'
import {connect} from 'react-redux'
import Burger from '../../component/Burger/Burger'
import classes from '../Checkout/Checkout.module.css'

class Checkout extends Component{
    state = {
        orders:{},
        ingredients:{},
        totalPrice : 0
    }

    render(){
        return (
            <div style ={{backgroundColor: 'rgb(235, 220, 213)',paddingTop:'50px',height: '100%', position: 'absolute', left: '0px', width: '100%', overflow: 'hidden'}}>
                <h1 style={{position: 'absolute', bottom: '0',marginBottom: '20%',left: '0',right: '0'}}>
                This is Looking Delicious !! <br /> Price : $ {this.props.price}</h1>

                <div style={{bottom:'30px'}}><Burger ingredients={this.props.ings}/></div>
                
                <div style={{position: 'absolute', bottom: '0',marginBottom: '15%',left: '0',right: '0'}}>
                    <div className={classes.buttons}>
                        <button> continue </button>
                        <button> cancel </button> 
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        ings: state.ingredients,
        price: state.totalPrice
    };
}

export default connect(mapStateToProps,null)(Checkout);