import React, { useState, useEffect } from 'react';
import Listapi from './Listapi';
import { Fragment } from 'react';
import Veiwapi from './Viewapi';
import dataapi from './mock-data.json'

const APIDATA = () => {

    const [data,setData]=useState(dataapi)
    const [viewContactid,setViewContactid]=useState(null)
    // useEffect(()=>{
    //     fetch('http://makeup-api.herokuapp.com/api/v1/products.json')
    //     .then((res)=>{
           
    //         return res.json()
    //     })
    //     .then((_data)=>{
            
    //         setData(_data)
    //         console.log(data)
    //     })
    //     .catch((err )=>{
    //         console.log(err)
    //     })
    //     // .finally(()=>{
    //     //     console.log('Done')
    //     // })bd1bb571-2362-4d15-a144-56e4430fa8f6

    // },[])
    const handleViewClick =(event,contact)=>{
        event.preventDefault();
        setViewContactid(contact.id)
    }
    return (  
        <div className="listapi">
            <h3>Makeup brands and product information</h3>
            {data.map((action)=>
        //     <li>
        //    {action.name} 
        //    <img src={action.image_link} className="apiimage"/>
        //    </li>
        <Fragment>
        {viewContactid === action.id?(
            <Veiwapi action={action}/>
        ):(<Listapi action={action} handleViewClick={handleViewClick}/>)}
        </Fragment>
        )}
        </div>
        // http://universities.hipolabs.com/search?country=South+Africa
    );
}
 
export default APIDATA;