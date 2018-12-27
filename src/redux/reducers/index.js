import { combineReducers } from "redux";
import {socketReducer} from "./SocketReducer"
import { loginReducer } from "./LoginReducer";
import {shopsReducer} from "./ShopsReducer"

export const rootReducer=combineReducers({
    socket:socketReducer,
    login:loginReducer,
    shops:shopsReducer
})