// This is where the whole list of SCP archives will be displayed.
// IF we can categorize the list by years of discovery, that would be great.
// We'll use cards to display each one, then when they click on a card, it should take them to another page where they'll find more in-depth information about the clicked SCP.

import Navbars from "../Navbar_f/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import './Scp.css'
import { Link } from "react-router-dom";


export default function Scp() {
    const Url = process.env.REACT_APP_SERVER_URL +'/scp'
    const [Scp_Image, setScp_Image] = useState(null)

    let content = null

  

    useEffect(() => {
        axios.get(Url, { headers: {'Access-Control-Allow-Origin': '*'}})
            .then(response => {
                setScp_Image(response.data)
            })
    }, [Url]);


    if (Scp_Image) {
        content = Scp_Image.map(Scp_Img => {
            return (
                <Card style={{ width: '18rem' }} key={Scp_Img.id}>
                    <Card.Img className="Carousel_img" variant="top" src={Scp_Img.image} />
                    <Card.Body>
                        <Card.Title>SCP: {Scp_Img.id}</Card.Title>
                        <Card.Text>
                            Name: <br />{Scp_Img.name}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">

                        <ListGroup.Item>Location Discovered: <br /> {Scp_Img.location}</ListGroup.Item>
                        <ListGroup.Item>Date Discovered: <br /> {Scp_Img.date} <br /> </ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                    <Link to={`/scp/${Scp_Img.id}`}>
                        <Button variant="primary">Read Entry</Button>
                    </Link> 
                    </Card.Body>
                </Card>
            )
        })
    }

    return (
        <div className="The_SCP">
            <Navbars />
            <h1>SCP Page List</h1>
            <div className="Scp_List_Container">
                {content}
            </div>
        </div>
    )
}