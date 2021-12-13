import React, { useState, useEffect }  from 'react';
import "./createcustomerenvironment.css";
import axios from "axios";
import { useHistory } from "react-router-dom";


export default function CreateCustomerEnvironment() {

    const history = useHistory();

    const [customers, setCustomers] = useState([]);

    const [customerEnvironment, setCustomerEnvironment] = useState([]);

    const [ data, setData] = useState({
        name:"",
        desc:""
    })

    useEffect(() => {
        axios.get("http://localhost:5000/getCustomer").then((response) => {
            setCustomers(response.data)
        })
    }, [])

    useEffect(() => {
        axios.get("http://localhost:5000/getEnvironment").then((response) => {
            setCustomerEnvironment(response.data)
        })
    }, [])


    function navigate(){
        history.push("/createcustomerapp")
    };

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })
    }

    const handleSubmit= () => {
        axios.post("http://localhost:5000/createcustomerenvironment", data)
        .then(res => {
            alert("Customer Environment created");
        })
    }



    return (
            <div className="text-center">
                <form className="createCustomerEnvironment" onSubmit={handleSubmit}>
                <h1 className="mb-4"> Create Customer <br /> Environment</h1>
                <select name="name" value={data.name} onChange={handleChange}>
                <option value="" disabled selected>Select Customer</option>
                        {customers.map((user)=>{
                                        return(
                                            <option>{user.name}</option>
                                        )            
                                        }  
                                    )}
                </select>
                <select name="desc" value={data.desc} onChange={handleChange}>
                <option value="" disabled selected>Select Environment</option>
                        {customerEnvironment.map((user)=>{
                                        return(
                                            <option>{user.name}</option>
                                        )            
                                        }  
                                    )}
                </select>
                <div><button className="button" type="submit">Create <br /> Customer Environment</button></div>
                <div className="button" onClick={navigate}>Create Customer App</div>
                </form>
        </div>
    )
}
