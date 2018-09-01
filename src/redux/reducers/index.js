import { combineReducers } from "redux";
import {socketReducer} from "./SocketReducer"

export const rootReducer=combineReducers({
    socket:socketReducer
})