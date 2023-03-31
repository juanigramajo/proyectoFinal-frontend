import Table from "react-bootstrap/Table";
import {useState,useEffect} from "react";
import axios from "axios";

export default function AdmMessages({token}) {
const [mensajes, setMensajes] = useState([]);

const getMensajes = async () => {
  const headers = {'x-auth-token': token}
  const { data } = await axios.get('http://localhost:4000/api/mensajes', {headers});
  setMensajes(data);
};
useEffect(() => {
  getMensajes();
}, []);

const deleteMensaje = async (id) => {

  const confirm = window.confirm('¿Estas seguro que deseas eliminar el mensaje?')

  if (confirm) {
    const headers = { "x-auth-token": token };
    await axios.delete(`http://localhost:4000/api/mensajes/${id}`, { headers });
    getMensajes();
  }

};

  return (
    <div className="container my-3">
        <h1>Mensajes</h1>
        <Table striped bordered hover responsive>
              <thead>
                <tr className="text-center">
                  <th>Nombre</th>
                  <th>Email</th>
                  <th>Tipo</th>
                  <th>Contenido</th>
                  <th>Eliminar</th>
                </tr>
              </thead>
              <tbody>
                {
                  mensajes.map((m)=>(
                    <tr key={m._id}>
                      <td className="text-center"> {m.nombre} </td>
                      <td className="text-center"> {m.email} </td>
                      <td className="text-center"> {m.tipo} </td>
                      <td className="text-center"> {m.contenido} </td>
                      <td className="text-center">
                      <button onClick={() => deleteMensaje(m._id)} type="button" class="btn btn-danger">
                        <i class="fas fa-trash-alt"></i>
                      </button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
          </Table>
    </div>
  )
                
}