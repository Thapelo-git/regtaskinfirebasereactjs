import React from 'react';
import { useParams } from 'react-router';
import './Stylling.css'

const Details = ({item}) => {
    const {id :id} =useParams()
    return (
        <div className="newsdetails"> 
        <h3>Details {id}</h3> 
        <div className="main">
        <img src={item.urlToImage} className="apiimageinside"/>
        </div>
        <div className="left-column">
            <table>
                <tr>
                    <th>Title:</th>
                    <td>{item.title}</td>
                </tr>
                <tr>
                    <th>Published at:</th>
                    <td>{item.publishedAt}</td>
                </tr>
                <tr>
                    <th>Author:</th>
                    <td>{item.author}</td>
                </tr>
            </table>
        {/* <h5> title: {item.title}</h5>
        <p> published at: {item.publishedAt}</p>

        <p>Author: {item.author}</p> */}
        </div>
        <div className="right-column">
            <th>Content:</th>
            <p>
                 {item.content}
            </p>
            <th>url:</th>
             {item.url}
        </div>
        </div>
     );
}
 
export default Details;