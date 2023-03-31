import React from 'react'
import NavBar from '../components/NavBar'
import { useEffect, useState } from 'react';
import axios from 'axios';
import CardProducts from '../components/CardProducts';
import { Container, Row } from 'react-bootstrap';


export default function Products( {token, user, setToken} ) {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            const { data } = await axios.get('http://localhost:4000/api/products');
            setProducts(data);
        };
        getProducts();
    }, []);

    return (
    <>
      <NavBar token={token} user={user} setToken={setToken} />

        <div className="productsTitle ">
            <Container>
                <Row className='my-5'>
                    <h3 className="titulos text-white">Nuestros Productos</h3>
                </Row>
            </Container>
        </div>

        <div className="backproducts p-5">
            <Row className="flex-row justify-content-center">
                {products.map((p) => (
                    <CardProducts product={p} key={p._id} />
                ))}
            </Row>
        </div>    
    </>
   
 
    );
}
