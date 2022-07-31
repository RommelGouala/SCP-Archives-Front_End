import { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import './StylesCarousel.css';

export default function CarouseL() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const Url = `https://scp-backend-server.herokuapp.com/scp`
    const [scpList, setScp_List] = useState(null)


    useEffect(() => {
        axios.get(Url, { headers: {'Access-Control-Allow-Origin': '*'}})
            .then(response => {
                setScp_List(response.data)
            })
    }, [Url]);

if(scpList){

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className='Carousel_container'>
            <Carousel.Item>
                <img
                    className="d-block w-100 Carousel_Img"
                    src={scpList[0].image}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 Carousel_Img"
                    src={scpList[1].image}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 Carousel_Img"
                    src={scpList[2].image}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}
}