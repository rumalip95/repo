import React from 'react';
import AboutCake from "./AboutCake";


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

export const renderAboutCake=(data,socket)=>{
    
    return(
    <div>
    <AboutCake socket={socket} id={data.id} title={data.title} image={data.image} weight={data.weight} price={data.price}  description={data.description} />

    
    </div>

   
) 
}