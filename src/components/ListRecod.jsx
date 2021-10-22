import React, {useState,useEffect} from 'react';
import firebaseDb from '../firebase';
import { Link } from 'react-router-dom';

const ListRecord = () => {

    // const [data,setData] = useState({});
    // useEffect(()=>{
    //     firebaseDb.child("contacts").on("value",(snapshot)=>{
    //         if(snapshot.val() !== null){
    //             setData({
    //                 ...snapshot.val(),
    //             })
    //         }else{
    //             snapshot({});
    //         }
    //     })
    // },[]);

   

    return (
        <div>
            <h2>List Users Details</h2>
            <h2>List Users Details</h2>
            <h2>List Users Details</h2>
            <h2>List Users Details</h2>
            <h2>List Users Details</h2>
            <h2>List Users Details</h2>
            v
            {/* {
                Object.keys(data).map((id,index)=>{
                    return(
                    <tr key={id}>
                        <th>{index+1}</th>
                        <td>{data[id].name}</td>
                        <td>{data[id].surname}</td>
                        <td>{data[id].description}</td>
                        <td>{data[id].location}</td>
                        <td>{data[id].address}</td>
                        <td>
                        
                        
                        
                        
                        </td>
                    </tr>
                    )
                })
            } */}
            
        </div>
      );
}
 
export default ListRecord;