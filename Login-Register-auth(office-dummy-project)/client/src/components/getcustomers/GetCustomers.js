import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./getcustomers.css";
import EditableRows from './EditableRows';
import Readonly from './Readonly';
import { useHistory } from "react-router-dom";



export default function GetCustomers() {


    const [ customers, setCustomers ] = useState([]);

    const [ editable, setEditable ] = useState(null);

    const history = useHistory();

    useEffect(() =>  {
         axios.get("http://localhost:5000/getCustomer").then((response) => {
            setCustomers(response.data)
        })
    }, []);

    const navigate = () => {
        history.push("/")
    }


    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/deleteCustomer/${id}`).then(() => {
        setCustomers(
            customers.filter((val) => {
                return val._id != id;
            })
        ); 
       });
    };

    const handleEdit = (e, app) => {
        e.preventDefault();
        setEditable(app._id);
    }

    return (
        <div className="body">
            <table>
            <tr>
                <th>Name</th>
                <th>Password</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
            {customers.map((data)=>{
                                        return(
                                            <>
                                            { editable === data._id ? 
                                            <EditableRows 
                                            data={data}
                                            /> 
                                            : 
                                            <Readonly 
                                            data={data} 
                                            handleEdit={handleEdit}
                                            handleDelete={handleDelete}
                                            />}
                                            </>
                                        )            
                                        }  
                                    )}                
            </table>
            <div><button className="back-button" onClick={navigate}>Back</button></div>
        </div>
    )
}
