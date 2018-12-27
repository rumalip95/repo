import {LOGIN_CUSTOMER} from "./index"


export const loginCustomer=(data)=>{    
    return{type:LOGIN_CUSTOMER, payload:data}
}