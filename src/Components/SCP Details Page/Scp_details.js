import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Navbars from "../Navbar_f/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";


export default function Scp_Details(){
    const { id } = useParams();
    const [scp_details, setScpDetails] = useState(null)
    const Url = `https://scp-backend-server.herokuapp.com/scp/${id}`

    useEffect(() => {
        axios.get(Url, { headers: {'Access-Control-Allow-Origin': '*'}})
            .then(response => {
                setScpDetails(response.data)
            })
    }, [Url])

    console.log(scp_details)

    const handDelete = (e) =>{
        e.preventDefault();
        axios.delete(Url).then(response => console.log('Data Posted', response)).catch(err => console.log(err))
    }

    const content = scp_details && (
        <div> 
            <h1>SCP-{scp_details.id} Entry</h1> 
            <p>{scp_details.name}</p>
            <img src={scp_details.image} alt='pic'></img>
            <p>{scp_details.description}</p>
            <p>{scp_details.containment}</p>
            <p>{scp_details.location}</p>
            <p>{scp_details.date}</p>
            <button onClick={handDelete}>Delete</button>
            <br/>
        <Link to={`/scp/${scp_details.id}/edit`}>
            <button>Edit</button>
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