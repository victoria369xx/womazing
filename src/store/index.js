import {createStore, combineReducers} from 'redux';
import { itemsListReducer } from './itemsDB/reducer';
import {cartItemsReducer} from './cartItems/reducer';


export const store = createStore(combineReducers({
    itemsList: itemsListReducer,
    cartItems:cartItemsReducer,
}), window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());