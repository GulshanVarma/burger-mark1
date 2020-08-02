import * as ActionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const InitialState = {
    ingredients : {
        salad: 0,
        cheese : 0,
        meat :  0,
        patty : 0 
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
    console.log('in reducer');
    
    switch(action.type){
        case ActionTypes.ADD_INGREDIENT:
            console.log('[BB add]');
            return{
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingName] : state.ingredients[action.ingName] + 1,
                },
                totalPrice : state.totalPrice + statePrice[action.ingName]
            };
        case ActionTypes.REMOVE_INGREDIENT:
            console.log('[BB Rem]');
            return{
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingName] : state.ingredients[action.ingName] - 1,
                },
                totalPrice : state.totalPrice - statePrice[action.ingName]
            };
        case ActionTypes.SET_INGREDIENTS:
            console.log('[BB set]',action.data);
            return updateObject( state, {
                ingredients: {
                    salad: action.data.salad,
                    patty: action.data.patty,
                    cheese: action.data.cheese,
                    meat: action.data.meat
                },
                totalPrice: 4});
        default:
            console.log('[BB Reducer default]');
            return state;
    }
}

export default reducer;