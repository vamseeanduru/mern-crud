import React from "react";
import "../getcustomers/getcustomers.css";

export default function Readonly({ app, handleEdit, handleDelete }) {
  return (
      <tr>
        <td>{app.name}</td>
        <td>{app.desc}</td>
        <td>                                              
        <button className="edit" type="button" onClick={(e)=> handleEdit(e, app)}>Edit</button>
        <button className="delete" 
        onClick={() => {
          const confirmBox = window.confirm("Confirm Delete?")
                if(confirmBox === true){
                  handleDelete(app._id)
                }
        }}
        >Delete</button>
        </td>
      </tr>
  );
};


