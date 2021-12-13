import React, { useState } from 'react';
import axios from 'axios';
import "./getcustomers.css";

export default function EditableRows({ data }) {

    const [ updatedItem, setUpdatedItem ] = useState({
        name: "",
        password: "",
        email: ""
    });


    function handleUpdate(event) {
        const { name, value } = event.target;
        setUpdatedItem((prevInput) => {
          return {
            ...prevInput,
            [name]: value,
          };
        });
      }

      const updateItem = async (id) => {
        await axios.put(`http://localhost:5000/updateCustomer/${id}`, updatedItem).then(() => {
            setUpdatedItem({
                name: updatedItem.name,
                password: updatedItem.password,
                email: updatedItem.email
            })
            window.location.reload();
        })
    
     };


    return (
        <tr>
            <td>
                <input 
                type="text" 
                onChange={handleUpdate}
                name="name"
                value={updatedItem.name}
                placeholder={data.name}>
                </input>
            </td>
            <td>
            <input
                type="text" 
                onChange={handleUpdate}
                name="password"
                value={updatedItem.password}
                placeholder={data.password}>
            </input>
            </td>
            <td>
            <input
                type="text" 
                onChange={handleUpdate}
                name="email"
                value={updatedItem.email}
                placeholder={data.email}>
            </input>
            </td>
            <td><button className="edit" type="button" onClick={() => {updateItem(data._id)}}>Update</button></td>
        </tr>
    )
}
