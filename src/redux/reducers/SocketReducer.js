import {SET_SOCKET} from "../actions"

const initialState={}


export const socketReducer=(state=initialState,action)=>{
    switch(action.type){
        case SET_SOCKET:
            return {
                ...state,
                ...action.payload
            }
            default:
                return{
                    ...state
                }
    }
}

