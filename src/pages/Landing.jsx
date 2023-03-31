
import AppleWatch from '../components/AppleWatch'
import ElCarousel from '../components/ElCarousel'
import NavBar from '../components/NavBar'
import SamsungW from '../components/SamsungW'
import SectionProducts from '../components/SectionProducts'
import SuuntoWatch from '../components/SuuntoWatch'
import GarminW from '../components/GarminW'
import { Container, Row } from 'react-bootstrap'
import giflanding from '../Img/landing.gif'
import { Link } from 'react-router-dom';
import scroll from '../Img/scroll.gif'
import '../css/landing.css'





export default function Landing( {token, user, setToken} ) {
  
  return (
    <>
      <NavBar token={token} user={user} setToken={setToken}/>
      <Container>
        <div className="d-flex flex-column align-items-center">
          <div className="d-flex align-items-center">
            <div>
              <h5 className="mb-5 mr-5 text-center titulos">En O'tech tenemos el reloj perfecto para vos</h5>
              <p className="mb-5 mr-5 fontP text-justify">Representamos la aventura. Abrir camino en la exploración ha sido parte de nuestro ADN, Hoy en día, O´tech está a la vanguardia del diseño y la innovación en relojes deportivos y de bienestar.
              </p>
              <p className="fontP mr-5 text-justify">Nos enorgullece ser los distribuidores oficiales de las cuatro marcas más grandes de relojes, los cuales pueden aguantarlo todo, pero también que están diseñados con una estética cotidiana</p>
            </div>

            <div className="mt-5">
              <img src={giflanding} class="static imglanding" alt=""/>
              
              <img src={giflanding} class="active imglanding" alt=""/>
            </div>
          </div>

          <div className="">
              <a href="#carousel">
                <img src={scroll} class="imgscroll" alt=""/>
              </a>
          </div>
        </div>

      </Container>
      <ElCarousel />
      <SectionProducts />
      <Container className="mt-5">
        <h3 className="titulos">Nuestras marcas</h3>
      </Container>
      <AppleWatch />
      <SamsungW />
      <SuuntoWatch />
      <GarminW />
    </>
  )
}
