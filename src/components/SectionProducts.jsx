import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import CardProducts from '../components/CardProducts';
import { Container, Row, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';


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
    <div className="sectionProduct my-0">
        
        <Container className="my-5">
            <Row className='my-5'>
                <h3 className="titulos text-white">Nuestros Productos</h3>
            </Row>
            <Row className="flex-row justify-content-center">
                {products.map((p) => (
                    <CardProducts product={p} key={p._id} />
                )).slice(0,8)}
            </Row>
            <Row>
                <Link to='/productos'>
                    <Button className="my-5 justify-content-center btnStyle2">Ver mas</Button>
                </Link>
            </Row>
        </Container>
    
    </div>
  )
}
