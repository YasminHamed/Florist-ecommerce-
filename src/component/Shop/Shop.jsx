import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Product from './Product'
import "./shop.css"

const Shop = ({products, onAddToCart}) => {
  return (
    <div>
    <div className="mt-4">
      <div className="shopp">
      <h1 className="shop" >Shop</h1>
      </div>
      <div className='container-fluid'>
      <div className='row'>
      <Container className="SHOPALLL">
      <Row>
        {products.map((product) => (
          <Col md="3" sm="12" key={product.id}>
            <Product product={product} onAddToCart={onAddToCart}  />
          </Col>
        ))}
      </Row>
    </Container>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Shop