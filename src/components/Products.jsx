import { useEffect, useState } from 'react';
import axios from 'axios';
import Product from './Product';
import { Container, Row } from 'react-bootstrap';

export default function Products() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            const { data } = await axios.get('http://localhost:4000/api/products');
            setProducts(data);
        };
        getProducts();
    }, []);

    return (
        <Container className="my-5">
            <Row className="flex-column justify-content-center">
                {products.map((p) => (
                    <Product Product={p} key={p._id} />
                ))}
            </Row>
        </Container>
    );
}
