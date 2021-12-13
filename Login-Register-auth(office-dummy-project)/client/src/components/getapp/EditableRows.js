import React, { useState } from 'react';
import axios from 'axios';
import "../getcustomers/getcustomers.css";

export default function EditableRows({ app }) {

    const [ updatedItem, setUpdatedItem ] = useState({
        name: "",
        desc: "",
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
        await axios.put(`http://localhost:5000/updateApp/${id}`, updatedItem).then(() => {
            setUpdatedItem({
                name: updatedItem.name,
                desc: updatedItem.desc
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
                placeholder={app.name}>
                </input>
            </td>
            <td>
            <input
                type="text" 
                onChange={handleUpdate}
                name="desc"
                value={updatedItem.desc}
                placeholder={app.desc}>
            </input>
            </td>
            <td><button className="edit" type="button" onClick={() => {updateItem(app._id)}}>Update</button></td>
        </tr>
    )
}
