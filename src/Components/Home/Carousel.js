import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ScpHomePicOne from '../Images/SCP_H_Pic1.JPG'
import ScpHomePicTwo from '../Images/SCP_H_Pic2.JPG'
import ScpHomePicTh from '../Images/SCP_H_Pic3.JPG'
import './StylesCarousel.css'

export default function CarouseL() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100 Carousel_Img"
                    src={ScpHomePicOne}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 Carousel_Img"
                    src={ScpHomePicTwo}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 Carousel_Img"
                    src={ScpHomePicTh}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}