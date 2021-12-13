import React from "react";

export default function Readonly({ data, handleEdit, handleDelete }) {
  return (
      <tr>
        <td>{data.name}</td>
        <td>{data.desc}</td>
        <td>                                              
        <button className="edit" type="button" onClick={(e)=> handleEdit(e, data)}>Edit</button>
        <button className="delete" 
                onClick={() => {
                  const confirmBox = window.confirm("Confirm Delete?")
                  if(confirmBox === true){
                    handleDelete(data._id)
                  }
                }}
            >Delete</button>
        </td>
      </tr>
  );
};
