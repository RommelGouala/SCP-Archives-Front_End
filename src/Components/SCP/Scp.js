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
                <Card style={{ width: '18rem' }} key={Scp_Img.id}>
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
                <div class="Wave">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div>
            </div>
        </div>
    )
}