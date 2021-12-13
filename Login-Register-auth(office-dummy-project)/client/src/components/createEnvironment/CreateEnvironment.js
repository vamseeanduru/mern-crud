import React, { useState }  from 'react';
import "./createenvironment.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function CreateEnvironment() {

    const history = useHistory();

    const [ environment, setEnvironment] = useState({
        name:"",
        desc:""
    })

    const navigate = () => {
        history.push("/");
    }

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target
        setEnvironment({
            ...environment,
            [name]: value
        })
    }

    const reset = (e) => {
        setEnvironment({
            name : "",
            desc: ""
        });
    }

    const handleSubmit= (e) => {
        e.preventDefault();
        reset();
        axios.post("http://localhost:5000/createenvironment", environment)
        .then(res => {
            
        })
    }


    return (
            <div className="text-center">
                <form className="createEnvironment" onSubmit={handleSubmit}>
                <h1>Create <br/> Environment</h1>
                <input type="text" name="name" value={environment.name} onChange={handleChange} placeholder="Environment Name"></input>
                <input type="text" name="desc" value={environment.desc} onChange={handleChange}  placeholder="Environment Description" ></input>
                <div><button className="button" type="submit">Create Environment</button></div>
                <div><button className="back-button" onClick={navigate}>Back</button></div>
                </form>
        </div>
    )
}
