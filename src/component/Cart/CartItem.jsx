import React from 'react'
import { Container, Row } from 'reactstrap';
import "./Cart.css"

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
    const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateCartQty(lineItemId, newQuantity);
    const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

    return (
        <Container>
        <Row>
          <td >
            <img className="rounded" width="90%" src={item.image.url} alt="" />
            <p >{item.name}</p>
          </td>
          <td className="pricce"><p>{item.line_total.formatted}EGP</p></td>
          <td>
            <p>
            <Row>
              <button className="btnn btn btn-info" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>-</button>
              <td className="mr-2 ml-2"><div >{item.quantity}</div></td>
              <button className="btnn btn btn-info" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</button>
            </Row>
            </p>
          </td>
        </Row>
        <td>
            <button className="mb-4 btn btn-danger" onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
        </td>
        </Container>
    )
}

export default CartItem