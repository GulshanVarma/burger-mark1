import * as ActionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const InitialState = {
    ingredients : {
        salad : 0,
        cheese : 0,
        patty : 0,
        meat : 0
    },
    totalPrice : 4.0
};

const statePrice = {
    salad: 1.5,
    cheese : 1.5,
    meat :  3.2,
    patty : 2
};

const reducer = (state=InitialState,action) =>{
    switch(action.type){
        case ActionTypes.ADD_INGREDIENT:
            return{
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingName] : state.ingredients[action.ingName] + 1,
                },
                totalPrice : state.totalPrice + statePrice[action.ingName]
            };
        case ActionTypes.REMOVE_INGREDIENT:
            return{
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingName] : state.ingredients[action.ingName] - 1,
                },
                totalPrice : state.totalPrice - statePrice[action.ingName]
            };
        default:
            return state;
    }
}

export default reducer;