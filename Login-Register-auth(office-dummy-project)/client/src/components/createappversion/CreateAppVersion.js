import React, { useState, useEffect }  from 'react';
import "./createappversion.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function CreateAppVersion() {

    const history = useHistory();

    const [app, setApp] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/getAppName").then((response) => {
            setApp(response.data)
        })
    }, [])

    const [ version, setVersion] = useState({
        name :"",
        version :"",
        
    })

    function navigate(){
        history.push("/createenvironment")
    };

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setVersion({
            ...version,
            [name] : value
        })
    }

    const handleSubmit= () => {
        axios.post("http://localhost:5000/createappversion", version)
        .then(res => {
            alert("App version created");
        })
    }



    return (
            <div className="text-center">
                <form className="appVersion" onSubmit={handleSubmit}>
                <h1>Create <br /> App Version</h1>
                <select name="name" value={version.name} onChange={handleChange}>
                <option value="" disabled selected>Select App</option>
                                    {app.map((appName)=>{
                                        return(
                                            <option value={appName.id} >{appName.name}</option>
                                        )            
                                        }  
                                    )}
                </select>
                <input type="text" name="version" value={version.version} onChange={handleChange}  placeholder="App version" ></input>
                <div><button className="button" type="submit">Create App Version</button></div>
                <div className="button" onClick={navigate}>Create Environment</div>
                </form>
            </div>
    )
}
