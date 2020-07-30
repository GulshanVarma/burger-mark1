import React from 'react'
import Burger from '../../component/Burger/Burger'
import classes from './CheckoutSummary.module.css'
import Button from '../../component/UI/Buttons/Button'

const checkoutSummary = (props) => {
    return (
        <div style={{ backgroundColor: 'rgb(235, 220, 213)', paddingTop: '50px', height: '100%', position: 'absolute', left: '0px', width: '100%', overflow: 'hidden' }}>
            <h1 style={{ position: 'fixed', bottom: '0', marginBottom: '140px', left: '0', right: '0', zIndex:'100' }}>
                This is Looking Delicious !! <br /> Price : $ {props.price}</h1>

            <div style={{ bottom: '30px' }}><Burger ingredients={props.ingredients} /></div>

            <div style={{ position: 'absolute', bottom: '0', marginBottom: '120px', left: '0', right: '0' }}>
                <div className={classes.buttons}>
                    <Button type="green" show={true}>Continue</Button>
                    <Button type="red" show={true}>Cancel</Button>
                </div>
            </div>
        </div>

    )
}

export default checkoutSummary;