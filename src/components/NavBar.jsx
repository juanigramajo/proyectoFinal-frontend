import {
  Dropdown,
  Image,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link, NavLink, useHistory, Redirect } from "react-router-dom";
import BotonCreateAccount from "./BotonCreateAccount";
import BotonInicioSesion from "./BotonInicioSesion";
import Logo from '../Img/LogoBlanco.png';

export default function NavBar({ token, user, setToken }) {
  
  const history = useHistory();
  
  if (user.rol === 'admin') {
    return <Redirect to='/admin' />
  }



  const handleLogOut = () => {
    localStorage.removeItem("token");
    history.push("/");
    window.location.reload();
  };
  return (
    <div>
      <Navbar expand="lg" className="navbar-style">
          <Link to='/'>
          <Image src={Logo} className="logoImg ml-5"/>
          </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="botonHamburguesa" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link className="fontNavbar" as={NavLink} to="/">
              Inicio
            </Nav.Link>
            <Nav.Link className="fontNavbar" as={NavLink} to="/nosotros">
              Sobre Nosotros
            </Nav.Link>
            <Nav.Link className="fontNavbar" as={NavLink} to="/productos">
              Productos
            </Nav.Link>
            <Nav.Link className="fontNavbar" as={NavLink} to="/contacto">
              Contacto
            </Nav.Link>
          </Nav>
          {!token && (
            <>
              <BotonCreateAccount setToken={setToken} />
              <BotonInicioSesion setToken={setToken} user={user} />
            </>
          )}
          {token && (
            <>
              <Dropdown className="btnDropDown">
                <Dropdown.Toggle variant="info" id="dropdown-basic">
                {user.nombre}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/profile"><i class="fas fa-user"></i> Perfil</Dropdown.Item>
                  <Dropdown.Item href="#/action-3" onClick={handleLogOut}>
                  <i class="fas fa-sign-out-alt"></i> Cerrar Sesión
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
