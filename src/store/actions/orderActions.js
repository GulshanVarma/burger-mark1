import * as OrderActions from './actionTypes'
import axiosOrder from '../../axiosOrders'

export const initPurchase = () =>{
    return{
        type: OrderActions.INIT_ORDER
    }
}

export const startPurchase = () =>{
    return dispatch => {
        dispatch(initPurchase());
        axiosOrder.post('./order.json',orderData).
        then(response => {
            console.log('response success from order');
            dispatch({type: OrderActions.PURCHASE_SUCCESS})
        })
    }
}