import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const Review = ({item}) => {
  return (
    <div> 
        <Container>
            <Row>
                <Col>
                    <h6 >{item.name}</h6>
                    <p>Quantity: {item.quantity}</p>
                </Col>
                <div>
                <p>{item.line_total.formatted}EGP</p>                </div>
            </Row>
        </Container>
    </div>
  )
}

export default Review