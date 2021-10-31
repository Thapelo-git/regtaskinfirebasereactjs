import React from 'react'
import './Stylling.css'

const Viewapi = ({action}) => {
    return (
        <div>
                 <img src={action.image_link} className="apiimageinsite"/>
              
            <table>
            <div className="left-column">
                <tr>
                    <th>ID</th>
                    <td>{action.id}</td>
                </tr>
                <tr>
                    <th>Brand</th>
                    <td> {action.brand}</td>
                </tr>
                <tr>
                    <th>price:</th>
                    <td>{action.price}</td>
                </tr>
                <tr>
                    <th>price_sign</th>
                    <td>{action.price_sign}</td>
                </tr>
                <tr>
                    <th>currency</th>
                    <td>{action.currency}</td>
                </tr>
                <tr>
                    <th>product_link</th>
                    <td>{action.product_link}</td>
                </tr>
                
                <tr>
                    <th>description</th>
                    <td>{action.description}</td>
                </tr>
                </div>
                <div className="right-column">
                <tr>
                    <th>rating</th>
                    <td>{action.rating}</td>
                </tr>
                <tr>
                    <th>product_type</th>
                    <td>{action.product_type}</td>
                </tr>
                <tr>
                    <th>created_at</th>
                    <td>{action.created_at}</td>
                </tr>
                <tr>
                    <th>updated_at</th>
                    <td>{action.updated_at}</td>
                </tr>
                <tr>
                    <th>product_api_url</th>
                    <td>{action.product_api_url}</td>
                </tr>
                <tr>
                    <th>api_featured_image</th>
                    <td>{action.api_featured_image}</td>
                </tr>
                </div>
            </table>
            
             
        </div>
    )
}

export default Viewapi
