import { useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ScpHomePicOne from '../Images/Bckg/ufo.jpg'
import ScpHomePicTwo from '../Images/Bckg/sun.jpg'
import ScpHomePicTh from '../Images/Bckg/texture.jpg'
import './StylesCarousel.css'

export default function CarouseL() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };





    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className='Carousel_container'>
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