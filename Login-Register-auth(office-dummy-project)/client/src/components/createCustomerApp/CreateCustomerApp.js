import React, { useState, useEffect }  from 'react';
import "./createcustomerapp.css";
import axios from "axios";
import { useHistory } from "react-router-dom";



export default function CreateCustomerApp() {

    const history = useHistory();

    const [app, setApp] = useState([]);

    const [customerEnvironment, setCustomerEnvironment] = useState([]);

    const [version , setVersion] = useState([]);

    const [ data, setData] = useState({
        customers:"",
        app:"",
        environment:"",
        version:"",
        name:"",
        desc:""
    })


    const handleChange = (e) => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })
    }

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/getCustomer").then((response) => {
            setCustomers(response.data)
        })
    }, [])

    useEffect(() => {
        axios.get("http://localhost:5000/getAppName").then((response) => {
            setApp(response.data)
        })
    }, [])

    useEffect(() => {
        axios.get("http://localhost:5000/getEnvironment").then((response) => {
            setCustomerEnvironment(response.data)
        })
    }, [])

    useEffect(() => {
        axios.get("http://localhost:5000/getAppVersion").then((response) => {
            setVersion(response.data)
        })
    },[])


    function logout(){
        history.push("/logoutpage")
    };

    const handleSubmit= () => {
        axios.post("http://localhost:5000/createcustomerapp", data)
        .then(res => {
            alert("Customer App created");
        })
    };



    return (
            <div className="createCustomerApp">
                <form className="createCustomerApp" onSubmit={handleSubmit}>
                <h1>Customer App</h1>
            <select name="customers" value={data.customers} onChange={handleChange}>
            <option value="" disabled selected>Select Customer</option>
            {customers.map((user)=>{
                                        return(
                                            <option>{user.name}</option>
                                        )            
                                        }  
                                    )}
            </select>
            <select name="app" value={data.app} onChange={handleChange}>
            <option value="" disabled selected>Select App</option>
            {app.map((user)=>{
                                        return(
                                            <option>{user.name}</option>
                                        )            
                                        }  
                                    )}
            </select>
            <select name="environment" value={data.environment} onChange={handleChange}>
            <option value="" disabled selected>Select Environment</option>
            {customerEnvironment.map((user)=>{
                                        return(
                                            <option>{user.name}</option>
                                        )            
                                        }  
                                    )}
            </select>
            <select name="version" value={data.version} onChange={handleChange}>
            <option value="" disabled selected>Select Version</option>
            {version.map((user)=>{
                                        return(
                                            <option>{user.version}</option>
                                        )            
                                        }  
                                    )}
            </select>
            <input type="url" name="name" value={data.name} onChange={handleChange} placeholder="Enter Upload URL"></input>
            <input type="url" name="desc" value={data.desc} onChange={handleChange}  placeholder="Enter Download URL" ></input>
            <div><button className="button" type="submit">Create Customer App</button></div>
            <div className="button-logout" 
            onClick={logout}>Logout</div>
                </form>
        </div>
    )
}
