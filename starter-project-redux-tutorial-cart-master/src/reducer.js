import {DECREASE,INCREASE, CLEAR_CART, REMOVE} from './actions'

function reducer(state, action){
    if(action.type === CLEAR_CART){
        return {...state,cart:[]}
    }
    return state;
  }

  export default reducer;