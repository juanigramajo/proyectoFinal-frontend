import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "react-bootstrap/Image";
import imagenShirley from "../Img/shirley.png";
import imagenDaniel from "../Img/daniel.png";
import imagenTheo from "../Img/theo.png";

export default class Testimonials extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div className=" mb-5">
        <Image src={imagenDaniel} />
          <div className="myCarousel">
            <h3>Shirley Fultz</h3>
            <h4>Futbolista</h4>
            <p>
              O´tech ofrece los mejores Smartwatch del mercado que he podido encontrar. El
              staff es muy profesional y ofrecen una excelente atención.
            </p>
          </div>
        </div>

        <div>
        <Image src={imagenShirley} />
          <div className="myCarousel">
            <h3>Daniel Keystone</h3>
            <h4>Patinadora</h4>
            <p>
              Desde que adquirí los Smartwatch de O´Tech mis entrenamientos han sido mas
              eficientes, ya que me permite calcular las perdidas de mis calorias y ver todo 
              mi rendimiento.
            </p>
          </div>
        </div>

        <div>
        <Image src={imagenTheo} />
          <div className="myCarousel">
            <h3>Theo Sorel</h3>
            <h4>Rugbier</h4>
            <p>
              Excelente atención y servicio. Los producutos de O´Tech son mis preferidos
              siempre los elijo y sus precios son los mejores del mercado.
            </p>
          </div>
        </div>
      </Carousel>
    );
  }
}