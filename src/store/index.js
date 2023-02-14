import {createStore, combineReducers} from 'redux';
import { itemsListReducer } from './itemsDB/reducer';
import {cartItemsReducer} from './cartItems/reducer';
import { orderReducer } from './orders/reducer';


export const store = createStore(combineReducers({
    itemsList: itemsListReducer,
    cartItems:cartItemsReducer,
    order:orderReducer
}), window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());