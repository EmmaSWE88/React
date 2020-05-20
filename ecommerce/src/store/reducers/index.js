import { combineReducers } from 'redux'

//REDUCERS
import cartReducer from './cartReducer'

export default combineReducers({
   cart: cartReducer
})