import React, { useState }  from 'react';
import "./createapp.css";
import axios from "axios";
import { useHistory } from 'react-router-dom';


export default function CreateApp() {

    const history = useHistory();


    const [ app, setApp] = useState({
        name:"",
        desc:""
    })

    const navigate = () =>{
        history.push("/")
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setApp({
            ...app,
            [name]: value
        })
    }

    const reset = () => {
        setApp({
            name : "",
            desc: ""
        });
    }


    const handleSubmit= (e) => {
        e.preventDefault();
        reset();
        axios.post("http://localhost:5000/createapp", app)
        .then(res => {

        })
    }


    return (
            <div >
                <form className="createApp" onSubmit={handleSubmit}>
                <h1>Create App</h1>
                <input type="text" name="name" value={app.name} onChange={handleChange} placeholder="App Name"></input>
                <input type="text" name="desc" value={app.desc} onChange={handleChange}  placeholder="App Description" ></input>
                <div><button className="button" type="submit">Create App</button></div>
                <div><button className="back-button" onClick={navigate}>Back</button></div>
                </form>
            </div>
    )
}
