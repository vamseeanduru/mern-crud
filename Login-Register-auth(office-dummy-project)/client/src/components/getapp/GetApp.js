import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../getcustomers/getcustomers.css";
import EditableRows from './EditableRows';
import Readonly from './Readonly';
import { useHistory } from "react-router-dom";



export default function GetApp() {


    const [ app, setApp ] = useState([]);

    const [ editable, setEditable ] = useState(null);

    const history = useHistory();

    useEffect(() => {
        axios.get("http://localhost:5000/getAppName").then((response) => {
           setApp(response.data)
       })
   }, [])

   const navigate = () => {
    history.push("/");
        }

   const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/deleteApp/${id}`).then(() => {
    setApp(
        app.filter((val) => {
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
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {app.map((app)=>{
                                        return(
                                            <>
                                            { editable === app._id ? 
                                            <EditableRows 
                                            app={app}
                                            /> 
                                            : 
                                            <Readonly 
                                            app={app} 
                                            handleEdit={handleEdit}
                                            handleDelete={handleDelete}
                                            />}
                                            </>
                                        )            
                                        }  
                                    )} 
                </tbody>        
            </table>
            <div><button className="back-button" onClick={navigate}>Back</button></div>
        </div>
    )
}
