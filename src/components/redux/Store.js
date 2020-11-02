import { createStore } from "redux"
import RootReducer from "./RootReducer"
import { composeWithDevTools } from 'redux-devtools-extension';

const Store = createStore(RootReducer, composeWithDevTools())

export default Store;