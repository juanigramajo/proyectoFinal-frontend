import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function AdmSidebar() {
  return (
    <div>
      <div className="sideBar d-flex flex-column">
            <div className="abr-my h-100">
                <div className="d-flex justify-content-center align-items-center h-25">
                    <Button as={NavLink} to='/admin/products' variant="dark" className="sidebar-buttons">Alta de Productos</Button>
                </div>
                <div className="d-flex justify-content-center align-items-center h-25">
                    <Button as={NavLink} to='/admin/productslist' variant="dark" className="sidebar-buttons">Listado de productos</Button>
                </div>
                <div className="d-flex justify-content-center align-items-center h-25">
                    <Button as={NavLink} to='/admin/users' variant="dark" className="sidebar-buttons">Usuarios</Button>
                </div>
                <div className="d-flex justify-content-center align-items-center h-25">
                    <Button as={NavLink} to='/admin/messages' variant="dark" className="sidebar-buttons">Mensajes</Button>
                </div>
            </div>
        </div>
    </div>
  )
}
