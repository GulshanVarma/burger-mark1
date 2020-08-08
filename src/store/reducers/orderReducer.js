import * as ActionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
    orders: [],
    loading: false, 
    purchased: false
};

const reducer = (state=initialState,action) =>{
    switch(action.type){    
        case ActionTypes.INIT_ORDER:
            return updateObject(state,{loading:true});
        case ActionTypes.PURCHASE_SUCCESS:
            return updateObject(state,{loading:false,purchased:true,orders:action.data});
        case ActionTypes.RESET_ORDER:
            return updateObject(state,{purchased:false});
        default:
            return state;
    }
}
export default reducer;