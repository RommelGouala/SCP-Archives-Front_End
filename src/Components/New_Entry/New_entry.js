
import Navbars from "../Navbar_f/Navbar";
import './New_entry.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import classifiedImage from "../Images/Classified.jpg"

const INITIAL_STATE = {
    id: '',
    name: 'No Current Designation',
    location: '',
    date: '',
    description: '',
    containment: 'No Known Containment Procedures',
    image: `${classifiedImage}`,
}

export default function New_entry () {

    const [data, setData] = useState(INITIAL_STATE)
    const navigate = useNavigate()

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();

        const response = await fetch('https://scp-backend-server.herokuapp.com/new_entry', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        // takes you back to the SCP archive page after submitting, before it would just stay on the form page
        if (response.status !== 200) {
            
        } else {
            navigate('/scp', { replace:true })
        }
    }
    return (
        <div className="New_Entry">
            <Navbars/>
            <section id="Section_O_NewEntry">
                <form onSubmit={handleSubmit} id="form_NE">
                    <h1> New Archive Entry</h1>
                    <label className="labels">SCP ID:</label>
                    <input onChange={handleChange} required name='id' type='number' placeholder='SCP-ID' value={data.id} />
                    <label className="labels">SCP Designation (Name):</label>
                    <input onChange={handleChange} name='name' type='text' placeholder='SCP Designation (Name)' value={data.name} />
                    <label className="labels">Location Discovered:</label>
                    <input onChange={handleChange} required name='location' type='text' placeholder='City, State/Country' value={data.location} />
                    <label className="labels">Date Discovered:</label>
                    <input onChange={handleChange} required name='date' type='date' placeholder='Date Discovered' value={data.date} />
                    <label className="labels">SCP Photograph:</label>
                    <input onChange={handleChange} name='image' type='string' placeholder='SCP Photograph' value={data.image} />
                    <label className="labels">SCP Description:</label>
                    <input onChange={handleChange} required name='description' type='text' placeholder='SCP Description' value={data.description} />
                    <label className="labels">Containment Procedures:</label>
                    <input onChange={handleChange} name='containment' type='text' placeholder='SCP Containment Procedure' value={data.containment} />

                    <button type='submit'>Submit New Entry</button>
                </form>
            </section>
        </div>
    )
}