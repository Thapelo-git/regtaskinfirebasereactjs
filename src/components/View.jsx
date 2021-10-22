import React, {useState,useEffect} from 'react';
import firebaseDb from '../firebase';
import { useParams,Link } from 'react-router-dom';
import './Stylling.css'

const View = () => {
    const [data,setData] = useState({});

    let currentId = useParams();
    const {id}=currentId;

    useEffect(()=>{
        firebaseDb.child("contacts").on("value",(snapshot)=>{
            setData({
               ...snapshot.val(),
                      })
        //     if(snapshot.val() !== null){
        //         setData({
        //             ...snapshot.val(),
        //         })
        //     }else{
        //         snapshot({});
        //     }
         })
    },[id]);
    return ( 
        <div className="container mt-5">
            {Object.keys(data).map((userId)=>{
                if(userId === id){
                    return(
                        <div className="userdetails">
                                <div className="card-header lead">
                                <h2 className="headings">User Details</h2>
                                </div>
                                <div className="card-body">
                                    <table>
                                        <tr>
                                            <th>Name:</th>
                                            <td>{data[id].name}</td>
                                        </tr>
                                        <tr>
                                            <th> Surname:</th>
                                            <td>{data[id].surname}</td>
                                        </tr>
                                        <tr>
                                            <th>Description:</th>
                                            <td> {data[id].description}</td>
                                        </tr>
                                        <tr>
                                            <th>Location:</th>
                                            <td>{data[id].location}</td>
                                        </tr>
                                        <tr>
                                            <th>Email:</th>
                                            <td> {data[id].email}</td>
                                        </tr>
                                        <tr>
                                            <th>Address:</th>
                                            <td> {data[id].address}</td>
                                        </tr>
                                        <tr>
                                        
                                            <td><Link to="/">
                                    <button className="btn btn-primary">Go Back</button>
                                </Link></td>
                                            <td><Link to={`/update/${id}`}>
                                <button className="btn btn-secondary">Update</button>
                                   </Link></td>
                                        </tr>
                                    </table>
                               
                                
                                
                                
                                </div>
                        </div>
                    )
                }
            })}
        </div>
     );
}
 
export default View;