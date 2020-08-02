import * as ActionTypes from './actionTypes';
import axiosOrder from '../../axiosOrders';

export const addIngs = (name) =>{ 
    console.log('[addIngs action]');
    
    return{
        type: ActionTypes.ADD_INGREDIENT,
        ingName: name
    }
}

export const removeIngs = (name) =>{
    return{
        type: ActionTypes.REMOVE_INGREDIENT,
        ingName: name
    }
}

export const initIngs=()=>{
    return dispatch =>{
        axiosOrder.get('./ingredients.json').
        then(response =>{
            console.log('got data :',response.data);
            dispatch(setIngs(response.data));
        })
        .catch(error => {
            console.log('error in axios BBActions');
            
        })
    }
}

export const setIngs = (ingsData) =>{
    console.log('[setIngs]',ingsData);
    return{
        type: ActionTypes.SET_INGREDIENTS,
        data : ingsData
    }
}