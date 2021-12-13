import React, { useState, useEffect } from 'react';
import "./createuser.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const CreateUser = ( ) => {


    const history = useHistory();

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/getCustomer").then((response) => {
            setCustomers(response.data)
        })
    }, [])

    const navigate = () => {
        history.push("/")
    }


    const [ user, setUser ] = useState({
        name : "",
        password: "",
        reEnterPassword:"",
        firstname:"",
        lastname:"",
        customer:"",
        email: ""
    })

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const reset = () => {
        setUser({
        name : "",
        password: "",
        reEnterPassword:"",
        firstname:"",
        lastname:"",
        customer:"",
        email: ""
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        reset();
        axios.post("http://localhost:5000/createuser", user)
        .then(res => {
             
        })
    }


    return (
        <div className="text-center">
            <form className="homepage-user" onSubmit={handleSubmit} >
            <h1>Create User</h1>
            <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="Username" ></input>
            <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Password" ></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} onChange={handleChange} placeholder="Re-enter Password" ></input>
            <input type="text" name="firstname" value={user.firstname} onChange={handleChange} placeholder="First Name" ></input>
            <input type="text" name="lastname" value={user.lastname} onChange={handleChange} placeholder="Last Name" ></input>
            <select name="customer" value={user.customer} onChange={handleChange}>
            <option value="" disabled selected>Select Customer</option>
                {customers.map((user)=>{
                                        return(
                                            <option className="options">{user.name}</option>
                                        )            
                                        }  
                                    )}
            </select>
            <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Email" ></input>
            <div><button className="button" type="submit">Create User</button></div>
            <div><button className="back-button" onClick={navigate}>Back</button></div>
            </form>
        </div>
    )
}

export default CreateUser;
