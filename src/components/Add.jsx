import React, {useState,useEffect} from 'react';
import firebaseDb from '../firebase';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useHistory,useParams} from 'react-router-dom';
import {NavLink} from "react-router-dom"
import { isEmpty } from 'lodash';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './Stylling.css'

const Add = () => {
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
        <div>
        
           <form class="row g-3 " onSubmit={handleSubmit} >
           <div className="card-header lead mb-4">
                        <h2 className="headings">Registration form</h2>
                        </div>
  <div class="col-md-4">
    <label for="validationCustom01" class="form-label">First name</label>

    <input type="text" className="form-control"
                    value={name} name="name" placeholder="Name" required="required"
                    onChange={handleInputChange}>
                    </input>
    
  </div>
  <div class="col-md-4">
    <label for="validationCustom02" class="form-label">Surname</label>
    <input type="text" className="form-control"
                    value={surname} name="surname" placeholder="Surname" required="required"
                    onChange={handleInputChange}>
                    </input>
    
  </div>
  <div class="col-md-4">
    <label for="validationCustomUsername" class="form-label">Email</label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="inputGroupPrepend">@exm.com</span>
      <input type="email" className="form-control"
                    value={email} name="email" placeholder="Email" required="required"
                    onChange={handleInputChange}>
                    </input>
      
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationCustom03" class="form-label">Description</label>
    <input type="text" className="form-control"
                    value={description} name="description" placeholder="Description" required="required"
                    onChange={handleInputChange}>
                    </input>
  </div>
  <div class="col-md-3">
    <label for="validationCustom04" class="form-label">Location</label>
    <input type="text" className="form-control"
                    value={location} name="location" placeholder="Location" required="required"
                    onChange={handleInputChange}>
                    </input>
  </div>
  <div class="col-md-3">
    <label for="validationCustom05" class="form-label">Address</label>
    <input type="text" className="form-control"
                    value={address} name="address" placeholder="Address" required="required"
                    onChange={handleInputChange}>
                    </input>
    
  </div>
  <div class="col-12">
    
  </div>
  <div className="col-12">
  <div className= " mb-6">
                                <button className="btn btn-warning mb-6">Cancel</button>
                                <button type="submit" class="btn btn-success mb-6">Submit</button>
                                </div>
  
  </div>
</form>
<div className="container">
<div className="row">
        
    <div className="col">
    <div className="col-md-6">
    <div className="card-header lead mb-4">
                                <h2 className="headings ">List of Users</h2>
                                </div>
                    { Object.keys(user).length>0?(
                    Object.keys(user).map((id,index)=>{
               
                    return(
                        <div className="card-body">
                                
                                
                                
                                <Link to={`/view/${id}`} className="btn btn-info" data-mdb-ripple-color="dark">
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



    </div>
    </div>
        
     );
}
 
export default Add;