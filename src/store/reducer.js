import * as actionTypes from './action'

const initState ={
    ingredients:{
        salad: 0,
        cheese : 0,
        meat :  0,
        patty : 0
    },
    totalPrice:4
};
const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    patty: 0.8
};

const reducer = (state = initState,action) =>{      //action is from USER
    console.log(action,actionTypes,state);
    switch ( action.type ) {
        case actionTypes.ADD_INGREDIENT:
            const a = {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName] 
            };
            console.log(a);
            return a;
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            };
        default:
            return state;
    }
}

export default reducer;