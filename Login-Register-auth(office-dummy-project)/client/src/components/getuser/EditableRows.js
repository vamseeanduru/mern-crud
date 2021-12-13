import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../getcustomers/getcustomers.css";

export default function EditableRows({ data }) {

    const [ updatedItem, setUpdatedItem ] = useState({
        name: "",
        password: "",
        firstname: "",
        lastname: "",
        customer: "",
        email: "",
    });

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/getCustomer").then((response) => {
            setCustomers(response.data)
        })
    }, [])


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
        await axios.put(`http://localhost:5000/updateUser/${id}`, updatedItem).then(() => {
            setUpdatedItem({
                name: updatedItem.name,
                password: updatedItem.password,
                firstname: updatedItem.firstname,
                lastname: updatedItem.lastname,
                customer: updatedItem.customer,
                email: updatedItem.email,
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
                name="firstname"
                value={updatedItem.firstname}
                placeholder={data.firstname}>
                </input>
            </td>
            <td>
                <input 
                type="text" 
                onChange={handleUpdate}
                name="lastname"
                value={updatedItem.lastname}
                placeholder={data.lastname}>
                </input>
            </td>
            <td>
            <select name="customer" value={updatedItem.customer} onChange={handleUpdate}>
            <option value="" disabled selected>Select Customer</option>
                {customers.map((user)=>{
                                        return(
                                            <option className="options">{user.name}</option>
                                        )            
                                        }  
                                    )}
            </select>
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
