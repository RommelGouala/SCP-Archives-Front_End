// This is where the whole list of SCP archives will be displayed.
// IF we can categorize the list by years of discovery, that would be great.
// We'll use cards to display each one, then when they click on a card, it should take them to another page where they'll find more in-depth information about the clicked SCP.

import Navbars from "../Navbar_f/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import './Scp.css'


export default function Scp() {
    // const { id } = useParams
    const Url = `https://scp-backend-server.herokuapp.com/scp`
    const [Scp_Image, setScp_Image] = useState(null)

    let content = null

    useEffect(() => {
        axios.get(Url)
            .then(response => {
                setScp_Image(response.data)
            })
    }, [Url])




    console.log(Scp_Image)

    if (Scp_Image) {
        content = Scp_Image.map(Scp_Img => {
            return (
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                    <Card.Body>
                        <Card.Title>{Scp_Img.name}</Card.Title>
                        <Card.Text>
                            Description: <br />{Scp_Img.description}
                        </Card.Text>
                        <Card.Text>
                            Contaiment: <br />{Scp_Img.contaiment}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">

                        <ListGroup.Item>Location: <br /> {Scp_Img.location}</ListGroup.Item>
                        <ListGroup.Item>Date: <br /> {Scp_Img.date} <br /> </ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Button variant="primary">Learn more</Button>
                    </Card.Body>
                </Card>
            )
        })
    }

    return (
        <div>
            <Navbars />
            <h1>SCP Page List</h1>
            <div className="Scp_List_Container">
            {content}
            </div>
        </div>
    )
}