import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import CartItem from './CartItem';
import "./Cart.css"

const Cart = ( { cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart } ) => {

  const handleEmptyCart = () => onEmptyCart();
  
  const EmptyCart = () => (
    <div className="cartxy">
      <p className="text-center font-weight-bold h4">Your cart is currently empty!!</p>
      <Link to="/Shop" >
        <button className="ml-3 btn btn-primary">
          Back to Shop
          <img width="30px" className="ml-3" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAYAAADjVADoAAAABmJLR0QA/wD/AP+gvaeTAAADM0lEQVR4nO2ay2tUMRSHvzp9WRARHyiIqCCCirgREUUQxVVBtLgRN7pSUPwbFJei3RQLgnRRBXFhQakLEYobUReVClUUqaBdWR/12aHtjItUOnPndiY5OTczQj44i97e/PJL7k1ykjsQiUQikUgkEolEIvo0BapnA9AFbAKWWZaZBN4AA8DbjHwFIwdcBaaBojBmgB6gObB3Va4j74Bk3AzsXY29QAG9jigCh7Iym+UccQ/oTFx7BYxbll8DbE1cGwL2e/oKyjrM2C59mncFOv0JjQKwWcljEC5Q+VrvEehsT9G5rOQxc5qBj5SbH0U+DJ8mtCaAdn+b2XOYyqd4zkPvVIrecU+PQRik3PRv7JOoNBYDXxOaQ54eMydtkuxT0O2h8q3YoqCbGZeoNLxbQTdt0ryioJsJzZgcodTsiKL+k4R2w06aR6h8amcV9U+m6J/QEq+1kWkH9gFLLbTOJ/4uAnngmMBXGgVgFrORK60zb1F2EngMTEkq7gBeoLtXqGcMY1YgZ7oawLx2HF2osYuqdMSX6v30X/JZWrAbMwbr/SR9I485IPKiFZMZdjZAg1yjc857a61GumyElmBS3VytGxuEAqYTvtvcXG2OSPIDeC1xVCdGsewEcOsIgGeO99fiFrB6LvqVtZ8r65VxBr3x+w1oK9Fuw8zqWvqnXRpWzzfiPeVZYR54p6jv5NW1I0aAP45lFqJoeU3CFPDSpYDrR5NpTNot3VqPYMbuLPAh5f8Dc/o5YCdm+y1hGOM1U7qRjdnbuC29OeCOsK5u10a5Dg2QzxO9mDfBllngmrAuZ48hO2JtoDKgv8yn0oRsmRsHDgAtFnW0AAepPPGyiQnCfeXngcBgMoZTdJPfMCQxKGmQZGhAoFdPiMibtCM00te006IOBd1MU+skq/B/hWcozxO24feDkn+xUtIgn0llDFjvUR7MKVgv83uD5Z56Y8BGTw1nNH8NoxXSvMOLXUKzWUUBk5bXhT4Lg6HiRsZtrUoH8CjFVOh4iM6K40Ur5uPvL8J3wE/gIhaHs7XQTEVXYE6Nd2CWMJtUWsI08AmTmd7H41tFJBKJRCKRSCQSiWTNX/Xx6uux8YHuAAAAAElFTkSuQmCC"/>
        </button>
      </Link>
    </div>
  );


  const FilledCart = () => (
    <>
            <Container className="SHOPALLL">
      <Row>
      {cart.line_items.map((lineItem) => (
        <Col  md="4" sm="12" key={lineItem.id} className="divcarttttt">
            <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
        </Col>
      ))}
            </Row>
    </Container>
    </>
  );
  return (
    <div>
      <div className="carttt">
      <div className="shopp">
        <h1 className="shop" >Shopping Cart</h1>
      </div>
        {cart.line_items?.length?
        (<div className="fff">
          <div className="tblewidth">
            <table className="tbleee">
              <tbody>
                <FilledCart />
              </tbody>
            </table>
            <h4>
              Total :{cart.subtotal.formatted}
            </h4>
            <button onClick={handleEmptyCart}  className=" mt-5 ml-5 btn btn-danger">Empty Cart</button>
            <a  className="bttncarttt mt-5 ml-5 btn btn-primary" href="/Checkout">Checkout</a>
          </div>
        </div>):
        <EmptyCart />}
      </div>
    </div>
  )
}

export default Cart