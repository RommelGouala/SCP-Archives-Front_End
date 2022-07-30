import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import Navbars from "../Navbar_f/Navbar";
import './Edit.css'

export default function Edit() {
    const { id } = useParams
    const Url = `https://scp-backend-server.herokuapp.com/scp/${id}/edit`


const [name, setName] = useState('')
const [location, setLocation] = useState('')
const [date, setDate] = useState('')
const [description, setDescription] = useState('')
const [containment, setContainment] = useState('')
const [image, setImage] = useState('')
// const [Scp_Image, setScp_Image] = useState(null)
// useEffect(() => {
//     axios.get(Url, { headers: {'Access-Control-Allow-Origin': '*'}})
//         .then(response => {
//             setScp_Image(response.data)
//         })
// }, [Url]);

// console.log(Scp_Image)


const hadndleSubmit = (e) =>{
        e.preventDefault();
        axios.patch(Url,{
            name,
            location,
            date,
            description,
            containment,
            image
        }).then(response => console.log('Data Posted', response)).catch(err => console.log(err))
    }

    return (

        <div className='The_Edit'>
            <Navbars/>
            <h1>Edit Page</h1>
            <section id="Section_O_NewEntry">
                <form id="form_NE">
                    <label className='labels'> SCP{id}</label>
                    <label className="labels">Name</label>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} required></input>
                    <label className="labels">Location</label>
                <input type='text'value={location} onChange={(e) => setLocation(e.target.value)}required></input>
                    <label className="labels">Data</label>
                <input type="date" name="date_picker" placeholder="dd-mm-yyyy" min="1997-01-01" max="2030-12-31" value={date} onChange={(e) => setDate(e.target.value)} required></input>
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