import axios from "axios";
import { useEffect, useState } from "react";
import { Form, Modal, Button, Table, Row, Card } from "react-bootstrap";


export default function AdmProductsList({ token, product }) {
  const [input, setInput] = useState({
    name: "",
    image: "",
    brand: "",
    price: "",
    category: "",
    description: "",
  });
  const [editProduct, setEditProduct] = useState({})
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);
  const [showProduct, setShowProduct] = useState(false);
  const [validated, setValidated] = useState(false);
  const handleClose = () => setShow(false);
  const handleCloseProduct = () => setShowProduct(false);
  const getProducts = async () => {
    const headers = { "x-auth-token": token };
    const { data } = await axios.get("http://localhost:4000/api/products", {
      headers,
    });
    setProducts(data);
  };
  useEffect(() => {
    getProducts();
  }, []);

  const deleteProduct = async (id) => {
    const headers = { "x-auth-token": token };
    await axios.delete(`http://localhost:4000/api/products/${id}`, { headers });
    getProducts();
  };

  const updateProduct = async (product) => {
    setEditProduct( product )
    setShow(true);
  };

  const showProductModal = async (product) => {
    setEditProduct( product )
    setShowProduct(true);
  };

  const handleSubmit = async (e) => {
    const form = e.currentTarget;
    setValidated(true);
    e.preventDefault();
    if (form.checkValidity() === false) {
      return e.stopPropagation();
    }

    try {
      const headers = { "x-auth-token": token };
    await axios.put(`http://localhost:4000/api/products/${editProduct.id}`, editProduct, {headers});
    getProducts();
    setShow(false)

    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const product = { ...editProduct, [name]: value };
    setEditProduct(product);
  };


  return (
    <div className="container my-3">
      <h1>Productos</h1>

      <Table striped bordered hover responsive>
        <thead>
          <tr className="text-center">
            <th>Nombre</th>
            <th>Marca</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Descripción</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p._id}>
              <td className="text-center"> {p.name} </td>
              <td className="text-center"> {p.brand} </td>
              <td className="text-center"> {p.category} </td>
              <td className="text-center"> {p.price} </td>
              <td className="text-center w-25"> {p.description} </td>
              <td className="text-center">

                <button onClick={() => deleteProduct(p._id)} type="button" class="btn btn-outline-danger">
                  <i class="fas fa-trash-alt"></i>
                </button>

                <button onClick={() => updateProduct(p)} type="button" class="btn btn-outline-secondary">
                  <i class="fas fa-edit"></i>
                </button>

                <button onClick={() => showProductModal(p)} type="button" class="btn btn-outline-info">
                <i class="fas fa-archive"></i>
                </button>

              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <Form.Group controlId="validationCustom02">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                name="name"
                value={editProduct.name}
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
                value={editProduct.image}
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
                value={editProduct.brand}
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
                value={editProduct.category}
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
                value={editProduct.price}
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
                value={editProduct.description}
                onChange={(e) => handleChange(e)}
                required
                type="text"
                placeholder="Descripción"
              />
              <Form.Control.Feedback>¡Luce bien!</Form.Control.Feedback>
            </Form.Group>
            <Row>
              <Button type="submit" className="mx-auto btn-info">
                Editar producto
              </Button>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showProduct}
        onHide={handleCloseProduct}
        backdrop="static"
        keyboard={false}
      >
      <Modal.Header closeButton>
        <Modal.Title>{editProduct.name}</Modal.Title>
      </Modal.Header>
      <Card.Img src={editProduct.image} />
      <Modal.Body className="d-flex flex-column">
        <div className="border-bottom border-top mb-3 p-4">
          <strong>Marca:</strong> {editProduct.brand}
        </div>

        <div className="border-bottom border-top mb-3 p-4">
          <strong>Categoría:</strong> {editProduct.category}
        </div>

        <div className="border-bottom border-top mb-3 p-4">
          <strong>Precio:</strong> {editProduct.price}
        </div>

        <div className="border-bottom border-top p-4 text-justify">
          <strong>Descripción:</strong> {editProduct.description}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="info" onClick={handleCloseProduct}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  </div>
  );
}
