import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import CheckoutSummary from '../../component/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'
import Aux from '../../hoc/_Aux'
import { Route } from 'react-router-dom'
import Modal from '../../component/UI/Modal/Modal'

class Checkout extends Component {
    state = {
        orders: {},
        ingredients: {},
        totalPrice: 0,
        show: false
    }

    toggleShow = () => {
        const temp = !this.state.show;
        this.setState({ show: temp })
        console.log('in toggle = ', temp);
    }
    checkoutCancelHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.setState({ show: true })
        this.props.history.replace('/checkout/contact-data');
    }

    checkoutwithContact = () =>{
        document.write(' send order to server')
        // orderHandler = (event) => {
        //     event.preventDefault();
        //     this.setState({ loading: true });
        //     const formData = {};
        //     for (let formElementIdentifier in this.state.orderForm) {
        //         formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        //     }
        //     const order = {
        //         ingredients: this.props.ingredients,
        //         price: this.props.price,
        //         orderData: formData
        //     }
        //     axios.post('/orders.json', order)
        //         .then(response => {
        //             this.setState({ loading: false });
        //             this.props.history.push('/');
        //         })
        //         .catch(error => {
        //             this.setState({ loading: false });
        //         });
        // }
    }

    render() {
        return (
            <Aux>
                <CheckoutSummary
                    ingredients={this.props.ings}
                    price={this.props.price}
                    checkoutContinue={this.checkoutContinuedHandler}
                    checkoutCancel={this.checkoutCancelHandler}
                />
                <Modal show={this.state.show} clicked={this.toggleShow}>
                    <Route
                        path={this.props.match.path + '/contact-data'}
                        render={(props) => (<ContactData ingredients={this.props.ings} price={this.props.price} order={this.checkoutwithContact}/>)} />
                </Modal>
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

export default connect(mapStateToProps, null)(Checkout);