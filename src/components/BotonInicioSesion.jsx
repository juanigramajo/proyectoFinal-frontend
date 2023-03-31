import { Button } from "react-bootstrap";
import { Form, Modal, InputGroup } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { setStorage } from "../utils";



export default function BotonInicioSesion({ setToken, user}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [input, setInput] = useState({ email: '', password: '' });

    const [validated, setValidated] = useState(false);

    const handleChange = (e) =>{
        const { name, value } = e.target;
        const inputLogin = {...input, [name]: value};
        setInput(inputLogin);
    }

    const handleSubmit = async (e) => {
        const form = e.currentTarget;
        e.preventDefault();
        setValidated(true);
        if (form.checkValidity() === false) {
            return e.stopPropagation();
        }
        try {
            const { data } = await axios.post('http://localhost:4000/api/auth/login', input);
            console.log("🚀 ~ file: BotonInicioSesion.jsx ~ line 36 ~ handleSubmit ~ data", data)
            setStorage('token', data);
            setToken(data);
        } catch (error) {
            console.log(error);
        }


    }

    return (
        <div>
            <Button className="btnStyle2" onClick={handleShow}>Iniciar Sesión</Button>

            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Inicio Sesión</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group controlId="validationCustom02">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                            name="email" 
                            type="email" 
                            placeholder="Email" 
                            required 
                            onChange={handleChange} />
                        <Form.Control.Feedback>Email Válido!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validationCustomUsername">
                            <Form.Label>Password</Form.Label>
                            <InputGroup hasValidation>
                            <Form.Control 
                            name="password" 
                            type="password" 
                            placeholder="******"
                            aria-describedby="inputGroupPrepend" 
                            required
                            onChange={handleChange} />
                            <Form.Control.Feedback type="invalid">
                                Contraseña requerida!
                            </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Button variant="info" type="submit">
                            Aceptar
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
