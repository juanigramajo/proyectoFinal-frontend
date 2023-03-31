import { Carousel, Image } from "react-bootstrap";
import apple from '../Img/appleCarrousel.png'
import samsung from '../Img/samsungcarrousel.png'
import suunto from '../Img/suuntoCarrousel.png'
import garmin from '../Img/garmin.png'

export default function ElCarousel() {
  return (
    <Carousel className="" id="carousel">
      <Carousel.Item>
        <Image src={apple} className="d-block w-100" />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={samsung} className="d-block w-100" />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={suunto} className="d-block w-100" />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={garmin} className="d-block w-100" />
      </Carousel.Item>
    </Carousel>
  );
}
