import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbars from "../Navbar_f/Navbar";
import axios from "axios";
import './Styles-Scp-details.css'


export default function Scp_Details() {
    const { id } = useParams();
    const [scp_details, setScpDetails] = useState(null)
    const Url = `https://scp-backend-server.herokuapp.com/scp/${id}`
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(Url, { headers: { 'Access-Control-Allow-Origin': '*' } })
            .then(response => {
                setScpDetails(response.data)
            })
    }, [Url])

    console.log(scp_details)

    //delete now takes you back to the SCP archive list page
    const handleDelete = async () => {
        await fetch(`https://scp-backend-server.herokuapp.com/scp/${id}`, {
            method: 'DELETE'
        })
        navigate('/scp', { replace: true })
    }

    const handleEdit = () => {
        navigate(`/scp/${scp_details.id}/edit`, { replace: true })
    }

    const content = scp_details && (
        <div className="The_ScpDetails">


            <h1>SCP-{scp_details.id} Entry</h1>
            <h2>SCP Designation: {scp_details.name}</h2>
            <img src={scp_details.image} alt='pic'></img>
            <br />
            <p>Location Discovered: {scp_details.location}</p>
            <p>Discovery Date: {scp_details.date}</p>
            <p>Description: {scp_details.description}</p>
            <p>Containment Procedures: {scp_details.containment}</p>
            <br />
            <button className="The_button" onClick={handleEdit}>Edit Entry</button>
            <br />
            <button className="The_button" onClick={handleDelete}>Delete Entry</button>


        </div>
    )
    return (
        <div>
            <Navbars />
            {content}
        </div>
    )
}