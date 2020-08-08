import * as OrderActions from './actionTypes'
import axiosOrder from '../../axiosOrders'

export const initPurchase = () =>{
    return{
        type: OrderActions.INIT_ORDER
    }
}

export const purchaseSuccess = (OrderData) =>{
    return{
        type:OrderActions.PURCHASE_SUCCESS,
        data: OrderData
    }
}

export const startPurchase = (orderData) =>{
    console.log('[startPurchase]');
    return dispatch => {
        dispatch(initPurchase());
        axiosOrder.post('./orders.json',orderData).
        then(response => {
            console.log('response success from order',response.data);
            dispatch(purchaseSuccess(response.data))
        }).catch(error => {
            console.log(error);
        })
    }
}

export const resetOrder = () => {
    return {
        type: OrderActions.RESET_ORDER
    }
}