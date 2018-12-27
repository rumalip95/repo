import {LOGIN_CUSTOMER} from "../actions/index"
const initialState={
    email:"",
    password:""
}
export const loginReducer=(state=initialState,action)=>{
    switch(action.type){
        case LOGIN_CUSTOMER:
            return {
                ...state,
                ...action.payload
            }
        default: 
            return {
                ...state
            }
    }
}
