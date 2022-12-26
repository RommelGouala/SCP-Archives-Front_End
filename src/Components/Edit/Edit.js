import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Navbars from "../Navbar_f/Navbar";
import './Edit.css'


export default function Edit() {
    const { id } = useParams()

    const Url = process.env.REACT_APP_SERVER_URL +`/scp/${id}`
    const navigate = useNavigate()

const [name, setName] = useState('')
const [location, setLocation] = useState('')
const [date, setDate] = useState('')
const [description, setDescription] = useState('')
const [containment, setContainment] = useState('')
const [image, setImage] = useState('')
const [Scp_Image, setScp_Image] = useState(null)
    useEffect(() => {
        axios.get(Url, { headers: { 'Access-Control-Allow-Origin': '*' } })
            .then(response => {
                setScp_Image(response.data)
            })

    }, [Url]);

    console.log(Scp_Image)


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(Url, {
            name,
            location,
            date,
            description,
            containment,
            image
        }).then(response => console.log('Data Posted', response)).catch(err => console.log(err))
        navigate('/scp', { replace:true })
    }

    return (

        <div className='The_Edit'>
            <Navbars />
            <section id="Section_O_Edit">
                <form id="form_Edit">
                    <h1>Edit SCP-{id} Entry</h1>
                    <label className="labels">SCP Designation (Name):</label>
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
                    <label className="labels">Location Discovered:</label>
                    <input type='text' value={location} onChange={(e) => setLocation(e.target.value)} ></input>
                    <label className="labels">Date Discovered:</label>
                    <input type="date" name="date_picker" placeholder="dd-mm-yyyy" min="1997-01-01" max="2030-12-31" value={date} onChange={(e) => setDate(e.target.value)}></input>
                    <label className="labels">SCP Description:</label>
                    <input type='text' value={description} onChange={(e) => setDescription(e.target.value)}></input>
                    <label className="labels">Containment Procedures:</label>
                    <input type='text' value={containment} onChange={(e) => setContainment(e.target.value)}></input>
                    <label className="labels">SCP Photograph:</label>
                    <input type='text' value={image} onChange={(e) => setImage(e.target.value)} ></input>
                    <button onClick={handleSubmit}>Submit Entry</button>
                </form>
            </section>
        </div>
    )
}