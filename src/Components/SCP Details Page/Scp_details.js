import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbars from "../Navbar_f/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";


export default function Scp_Details(){
    const { id } = useParams();
    const [scp_details, setScpDetails] = useState(null)
    const Url = `https://scp-backend-server.herokuapp.com/scp/${id}`
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(Url, { headers: {'Access-Control-Allow-Origin': '*'}})
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
        navigate('/scp', { replace:true })
    }

    const content = scp_details && (
        <div> 
            <h1>SCP-{scp_details.id} Entry</h1> 
            <h2>SCP Designation: {scp_details.name}</h2>
            <img src={scp_details.image} alt='pic'></img>
            <p>Location Discovered: {scp_details.location}</p>
            <p>Discovery Date: {scp_details.date}</p>
            <p>Description: {scp_details.description}</p>
            <p>Containment Procedures: {scp_details.containment}</p>

            <button onClick={handleDelete}>Delete Entry</button>
            <br/>
        <Link to={`/scp/${scp_details.id}/edit`}>
            <button>Edit Entry</button>
        </Link>
            
            </div>
    ) 
    return(
        <div>
            <Navbars/>
            {content}
        </div>
    )
}