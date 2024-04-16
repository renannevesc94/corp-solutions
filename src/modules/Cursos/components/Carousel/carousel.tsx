import { ReactNode } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import "./carousel.css";

interface ContainerProps {
  children: ReactNode;
}

function Carousel({ children }: ContainerProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: false,
    variableWidth: true,
    adaptiveHeight: true,
    slideToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}

export default Carousel;
