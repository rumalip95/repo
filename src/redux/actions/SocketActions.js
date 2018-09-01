import {SET_SOCKET} from "./index"

export const setSocket=(socket)=>{
    return {
        type:SET_SOCKET,
        payload:socket
    }
}