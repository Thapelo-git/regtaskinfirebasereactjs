import React, {useState,useEffect} from 'react';
import firebaseDb from '../firebase';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useHistory,useParams} from 'react-router-dom';
import {NavLink} from "react-router-dom"
import { isEmpty } from 'lodash';
import { Link } from 'react-router-dom';
import './Stylling.css'

const AddEdit = () => {
    const values ={
        name:"",
        surname:"",
        description:"",
        location:"",
        email:"",
        address:""

    };

    const [initialState,setState]=useState(values)
    const {name,surname,description,location,email,address}=initialState;
   
    const history = useHistory();
    let currentId = useParams();
    const {id}=currentId;
    const [data,setData] = useState({});

    useEffect(()=>{
        firebaseDb.child("contacts").on("value",(snapshot)=>{
            setData({
                ...snapshot.val(),
            })
            // if(snapshot.val() !== null){
            //     setData({
            //         ...snapshot.val(),
            //     })
            // }else{
            //     snapshot({});
            // }
        })
    },[id]);

        useEffect(()=>{
            if(isEmpty(id)){
                setState({...values});
            }else{
                setState({...data[id]})
            }
        },[id,data]);

    const handleInputChange =(e)=>{
        let {name,value}=e.target;
        setState({
            ...initialState,
            [name]:value,
        });
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(isEmpty(id)){
            firebaseDb.child("contacts").push(initialState,(err)=>{
                if(err){
                    console.log(err);
                }
            })
        }else{
            firebaseDb.child(`contacts/${id}`).set(initialState,(err)=>{
                if(err){
                    console.log(err);
                } 
        })
    }
         history.push("/")        
    };
    const [user,setUser] = useState({});
    useEffect(()=>{
        firebaseDb.child("contacts").on("value",(snapshot)=>{
            setUser({
                ...snapshot.val(),
            })
            // if(snapshot.val() !== null){
            //     setUser({
            //         ...snapshot.val(),
            //     })
            // }else{
            //     snapshot({});
            // }
        })
    },[]);

    const onDelete =(id)=>{
        firebaseDb.child(`/contacts/${id}`).remove((err)=>{
                if(err){
                    console.log(err)
                }
        })
    }
    return ( 
        <div className="container mt-5">
            
                
                
           
            <div className="row">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit} className="form1">
                    <div className="card-header lead">
                        <h2 className="headings">Registration form</h2>
                        </div>
                        <table>
                            <tr>
                                <th><label>Name</label></th>
                                <td>
                                <input type="text" className="form-control"
                    value={name} name="name" placeholder="Name" required="required"
                    onChange={handleInputChange}>
                    </input>
                                </td>
                            </tr>
                            <tr>
                                <th><label>Surname</label></th>
                                <td>
                                <input type="text" className="form-control"
                    value={surname} name="surname" placeholder="Surname" required="required"
                    onChange={handleInputChange}>
                    </input>
                                </td>
                            </tr>
                            <tr>
                                <th><label>Description</label></th>
                                <td>
                                <input type="text" className="form-control"
                    value={description} name="description" placeholder="Description" required="required"
                    onChange={handleInputChange}>
                    </input>
                                </td>
                            </tr>
                            <tr>
                                <th><label>Location</label></th>
                                <td><input type="text" className="form-control"
                    value={location} name="location" placeholder="Location" required="required"
                    onChange={handleInputChange}>
                    </input></td>
                            </tr>
                            <tr>
                                <th><label>Email</label></th>
                                <td>
                                <input type="email" className="form-control"
                    value={email} name="email" placeholder="Email" required="required"
                    onChange={handleInputChange}>
                    </input>
                                </td>
                            </tr>
                            <tr>
                                <th><label>Address</label></th>
                                <td>
                                <input type="text" className="form-control"
                    value={address} name="address" placeholder="Address" required="required"
                    onChange={handleInputChange}>
                    </input>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                               
                                <button className="btn btn-secondary">Cancel</button>
                                <button type="submit" class="btn btn-success">Submit</button>
                                </td>
                            
                            </tr>
                        </table>
                    </form>

                </div>
                <div className="col-md-6">
             
                
            
                <div className="card-header lead">
                                <h2 className="headings">List of Users</h2>
                                </div>
                    { Object.keys(user).length>0?(
                    Object.keys(user).map((id,index)=>{
               
                    return(
                        <div className="card-body">
                                
                                
                                
                                <Link to={`/view/${id}`} className="btn btn-light" data-mdb-ripple-color="dark">
                                <p className="card-text">
                                    {user[id].name} {user[id].surname}
                                </p>
                                
                                    </Link>
                                    
                                    <button className="btn btn-danger"
                        onClick={() => onDelete(id)}>delete</button>
                                
                        </div>
                    )
                
            })):(<h3>No Users</h3>)}
            
            </div>
            </div>
        </div>
     );
}
 
export default AddEdit;