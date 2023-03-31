import React, { useState } from "react";
import { Form, Row, Button } from "react-bootstrap";
import axios from "axios";

export default function FormProducts({ token }) {
  const [validated, setValidated] = useState(false);
  const [input, setInput] = useState({});

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    setValidated(true);
    if (form.checkValidity() === false) {
      return event.stopPropagation();
    }
    try {
      console.log("🚀 ~ file: FormProducts.jsx ~ line 19 ~ handleSubmit ~ input", input)
      const headers = { "x-auth-token": token };
      const response = await axios.post("http://localhost:4000/api/products", input, {
        headers,
      });
      console.log("🚀 ~ file: FormProducts.jsx ~ line 21 ~ handleSubmit ~ response", response)
      alert("¡Producto publicado!");
      

    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const changedInput = { ...input, [name]: value };
    setInput(changedInput);
  };

  return (
    <>
      <div className="container">
        <Form noValidate validated={validated} onSubmit={handleSubmit} className="card m-1 p-5">
          <Form.Group controlId="validationCustom02">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              name="name"
              onChange={(e) => handleChange(e)}
              required
              type="text"
              placeholder="Nombre del producto"
            />
            <Form.Control.Feedback>¡Luce bien!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="validationCustom02">
            <Form.Label>Imagen</Form.Label>
            <Form.Control
              name="image"
              onChange={(e) => handleChange(e)}
              required
              type="text"
              placeholder="http://imagen.jpg"
            />
            <Form.Control.Feedback>¡Luce bien!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="validationCustom02">
            <Form.Label>Marca</Form.Label>
            <Form.Control
              name="brand"
              onChange={(e) => handleChange(e)}
              required
              type="text"
              placeholder="Marca"
            />
            <Form.Control.Feedback>¡Luce bien!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="validationCustom02">
            <Form.Label>Categoría</Form.Label>
            <Form.Control
              name="category"
              onChange={(e) => handleChange(e)}
              required
              type="text"
              placeholder="Categoría"
            />
            <Form.Control.Feedback>¡Luce bien!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="validationCustom02">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              name="price"
              onChange={(e) => handleChange(e)}
              required
              type="number"
              placeholder="Precio"
            />
            <Form.Control.Feedback>¡Luce bien!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="validationCustom02">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              name="description"
              onChange={(e) => handleChange(e)}
              required
              type="text"
              placeholder="Descripción"
              max-length="150"
            />
            <Form.Control.Feedback>¡Luce bien!</Form.Control.Feedback>
          </Form.Group>
          <Row>
            <Button type="submit" className="btn btn-info mx-auto">
              Publicar producto
            </Button>
          </Row>
        </Form>
      </div>
    </>
  );
}
