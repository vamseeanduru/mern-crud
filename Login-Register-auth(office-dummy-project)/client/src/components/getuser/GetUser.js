import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../getcustomers/getcustomers.css";
import { useHistory } from "react-router-dom";
import EditableRows from './EditableRows';
import Readonly from './Readonly';


export default function GetUser() {

    const [ users, setUsers ] = useState([]);

    const [ editable, setEditable ] = useState(null);

    const history = useHistory();

    useEffect( () => {
        axios.get("http://localhost:5000/getUsers").then((response) => {
            setUsers(response.data)
        })
    }, [])

    const navigate = () => {
        history.push("/")
    }

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/deleteUser/${id}`).then(() => {
        setUsers(
            users.filter((val) => {
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
                <th>Password</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Customer</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
            {users.map((data)=>{
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
