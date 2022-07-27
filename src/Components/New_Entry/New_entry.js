// JS for the New Entry (We will build a form),
//             name,
//             location,
//             date,
//             image,
//             description,
//             containment

import Navbars from "../Navbar_f/Navbar";
import './New_entry.css'
import { useState } from "react";
import axios from 'axios'

export default function New_entry () {
    
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')
    const [containment, setContainment] = useState('')
    const [image, setImage] = useState('')
    const Url = `https://scp-backend-server.herokuapp.com/new_entry`

    const hadndleSubmit = (e) =>{
        e.preventDefault();
        axios.post(Url,{
            id,
            name,
            location,
            date,
            description,
            containment,
            image
        }).then(response => console.log('Data Posted', response)).catch(err => console.log(err))
    }
    return (
        <div className="New_Entry">
            <Navbars/>
            <h1>New Entry Page </h1>
            <section id="Section_O_NewEntry">
                <form id="form_NE">
                    <label className="labels">id</label>
                <input type='number' value={id} onChange={(e) => setId(e.target.value)} required></input>
                    <label className="labels">Name</label>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} required></input>
                    <label className="labels">Location</label>
                <input type='text'value={location} onChange={(e) => setLocation(e.target.value)}required></input>
                    <label className="labels">Data</label>
                <input type='date' value={date} onChange={(e) => setDate(e.target.value)} required></input>
                    <label className="labels">Description</label>
                <input type='text'  value={description} onChange={(e) => setDescription(e.target.value)} required></input>
                    <label className="labels">Containment</label>
                <input type='text'  value={containment} onChange={(e) => setContainment(e.target.value)} required></input>
                    <label className="labels">The Entry Image</label>
                <input type='text'  value={image} onChange={(e) => setImage(e.target.value)} ></input>
                <button onClick={hadndleSubmit}>Submit Entry</button>
                </form>
            </section>
        </div>
    )
}