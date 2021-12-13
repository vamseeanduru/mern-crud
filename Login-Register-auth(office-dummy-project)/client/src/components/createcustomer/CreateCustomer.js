import React, {useState} from 'react';
import "./customer.css";
import axios from "axios";
import { useHistory } from 'react-router-dom';




const CreateCustomer = () => {

    const history = useHistory();


    const [ customer, setCustomer ] = useState({
        name : "",
        password: "",
        email: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setCustomer({
            ...customer,
            [name]: value
        })
    }

    const reset = () => {
        setCustomer({
            name : "",
            password: "",
            email: ""
        });
    }

    const navigate = () => {
        history.push("/")
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        reset();
        try{
            axios.post("http://localhost:5000/createcustomer", customer);
        }catch(err){
            alert(err);
        }
    }

    return (
        <div>
            <form className="homepage" onSubmit={handleSubmit}>
            <h1>Create Customer</h1>
            <input type="text" name="name" value={customer.name} onChange={handleChange} placeholder="Username"></input>
            <input type="number" name="password" value={customer.password} onChange={handleChange} placeholder="Pin"></input>
            <input type="email" name="email" value={customer.email} onChange={handleChange} placeholder="Email" ></input>

            <div><button className="button" type="submit">Create Customer</button></div>
            <div><button className="back-button" onClick={navigate}>Back</button></div>
            </form>
        </div>
    )
}

export default CreateCustomer;