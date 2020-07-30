import * as actionTypes from '../actions/action'

const initState ={
    ingredients:{
        salad: 0,
        cheese : 0,
        meat :  0,
        patty : 0
    },
    totalPrice: parseFloat(4)
};
const INGREDIENT_PRICES = {
    salad: 0.50,
    cheese: 0.40,
    meat: 1.30,
    patty: 0.80
};

const reducer = (state = initState,action) =>{      //action is from USER
    console.log(action,actionTypes,state,parseFloat(state.totalPrice));
    let T_price = parseFloat(state.totalPrice).toFixed(2);
    switch ( action.type ) {
        case actionTypes.ADD_INGREDIENT:
            return{
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1.0
                },
                totalPrice: parseFloat(T_price) + parseFloat(INGREDIENT_PRICES[action.ingredientName]) 
            };
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1.0
                },
                totalPrice: parseFloat(T_price) - parseFloat(INGREDIENT_PRICES[action.ingredientName])
            };
        default:
            return state;
    }
}

export default reducer;