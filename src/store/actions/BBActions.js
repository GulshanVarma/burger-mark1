import * as ActionTypes from './actionTypes';

export const addIngs = (name) =>{
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