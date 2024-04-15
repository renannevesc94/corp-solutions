import { ReactNode } from 'react';
import Slider from 'react-slick'
import './carousel.css'

interface ContainerProps{
    children: ReactNode
}

function Carousel({ children }: ContainerProps) {

    const settings = {
        dots:false,
        infinite:false,
        speed: 500,
        centerMode: false,
        variableWidth: 3,
        adaptiveHeight: true,
        // slideToShow: 3,
        slidesToScroll: 1,
    }


    return (
        <div>
            <Slider {...settings}>
                { children }
            </Slider>
        </div>
    );
}

export default Carousel;