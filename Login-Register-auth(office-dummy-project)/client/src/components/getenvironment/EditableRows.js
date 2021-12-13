import React, { useState } from 'react';
import axios from 'axios';

export default function EditableRows({ data }) {

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
        await axios.put(`http://localhost:5000/updateEnvironment/${id}`, updatedItem).then(() => {
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
                placeholder={data.name}>
                </input>
            </td>
            <td>
            <input
                type="text" 
                onChange={handleUpdate}
                name="desc"
                value={updatedItem.desc}
                placeholder={data.desc}>
            </input>
            </td>
            <td><button className="edit" type="button" onClick={() => {updateItem(data._id)}}>Update</button></td>
        </tr>
    )
}
