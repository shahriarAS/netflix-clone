import { combineReducers } from "redux"
import MovieReducer from "./MovieReducer"
import SearchReducer from "./SearchReducer"

const RootReducer = combineReducers({
    Movie: MovieReducer,
    Search: SearchReducer
})

export default RootReducer