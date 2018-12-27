import {socket} from "../../App"
export const LOAD_SHOPS="LOAD_SHOPS" //this is to load the shops to the customer's browser
export const GET_SHOPS="GET_SHOPS"
export const LOAD_CAKES="LOAD_CAKES"
export const GET_CAKES="GET_CAKES"
export const LOAD_OFFTHESHELF="LOAD_OFFTHESHELF"
export const GET_OFFTHESHELF="GET_OFFTHESHELF"

export const loadShops=()=>{

    return (dispatch)=>{
        
        socket.emit(GET_SHOPS)

        socket.on(LOAD_SHOPS, (data)=>{
            dispatch({
                type:LOAD_SHOPS,
                payload:data
            })
        })
    }
    
    
}

export const loadCakes=(data)=>{
    return(dispatch)=>{
        socket.emit(GET_CAKES,data)

        socket.on(LOAD_CAKES,(data)=>{
            dispatch({
                type:LOAD_CAKES,
                payload:data
            })
        })
    }
}


export const loadOffTheShelf=(data)=>{
    return(dispatch)=>{
        socket.emit(GET_OFFTHESHELF,data)

        socket.on(LOAD_OFFTHESHELF,(data)=>{
            dispatch({
                type:LOAD_OFFTHESHELF,
                payload:data
            })
        })
    }
}