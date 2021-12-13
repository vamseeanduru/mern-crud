import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../getcustomers/getcustomers.css";
import { useHistory } from "react-router-dom";
import EditableRows from './EditableRows';
import Readonly from './Readonly';


export default function GetEnvironment() {

    const history = useHistory();

    const [ customerEnvironment, setCustomerEnvironment ] = useState([]);

    const [ editable, setEditable ] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:5000/getEnvironment").then((response) => {
            setCustomerEnvironment(response.data)
        })
    }, [])


    const navigate = () => {
        history.push("/")
    }

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/deleteEnvironment/${id}`).then(() => {
        setCustomerEnvironment(
            customerEnvironment.filter((val) => {
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
        <div className='body'>
            <table>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Actions</th>
            </tr>
            {customerEnvironment.map((data)=>{
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
