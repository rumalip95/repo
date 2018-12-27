import {LOAD_SHOPS} from "../actions/ShopsActions"
import {LOAD_CAKES} from "../actions/ShopsActions"
import {LOAD_OFFTHESHELF} from "../actions/ShopsActions"

const initialState={
    shops:[],
    cakes:[],
    offTheShelf:[]
}

export const shopsReducer=(state=initialState,action)=>{    
    switch(action.type){
        case LOAD_SHOPS:
            return {
                ...state,
                shops: action.payload
            }
        case LOAD_CAKES:
        
            return{
                ...state,
                cakes:action.payload
            }
        case LOAD_OFFTHESHELF:
            return{
                ...state,
                offTheShelf:action.payload
            }
        default:
            return{
                ...state
            }
    }
}

