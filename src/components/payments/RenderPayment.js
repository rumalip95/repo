import React from 'react';

import Payment from "../payments/Payment";

const renderDate = (date) => {;
    var dd = date.getDate();
    var mm = date.getMonth()+1; //January is 0!
    var yyyy = date.getFullYear();

    if(dd<10) {
        dd = '0'+dd
    } 

    if(mm<10) {
        mm = '0'+mm
    } 

    return mm + '/' + dd + '/' + yyyy;
}

export const renderPayment=(data)=>{
    
    return(
    <div>
    
    <Payment id={data.id} image={data.image} title={data.title} weight={data.weight} price={data.price}  description={data.description} />
    </div>

   
) 
}