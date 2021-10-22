import React from 'react'
import './Stylling.css'

const Listapi = ({action,handleViewClick}) => {
    return (
        <div>
            {action.name} 
            <img src={action.image_link} className="apiimage"/>
            <button type="button" onClick={(event)=>handleViewClick(event,action)}>View</button>
        </div>
    )
}

export default Listapi
