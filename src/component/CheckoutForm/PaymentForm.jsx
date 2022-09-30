import React from 'react'
import { Button, Divider, Grid, Typography } from '@material-ui/core';
import { loadStripe } from '@stripe/stripe-js';
import Review from './Review';
import "./Checkout/ckeck.css"

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentForm = ({cart, backStep, onCaptureCheckout, shippingData, nextStep, timeout}) => {

  return (
    <>
      <h5 className="mb-5 ml-3">Order summary</h5>
      {cart.line_items.map((lineItem) => (
        <div  md="4" sm="12" key={lineItem.id} >
          <Review item={lineItem}/>
        </div>
      ))}
      <br />
      Total :{cart.subtotal.formatted}
      <Divider />
      <Typography variant="h6" gutterBottom style={{ margin: '20px 0' }}>Payment method</Typography>
        <form onSubmit={(nextStep)}>
          <input required type="password" class="inputt" placeholder="Valid card number*"/>
          <input required type="password" class="inputt" placeholder="MM / YY *"/>
          <input required type="password" class="inputt" placeholder="CVC *"/>
          <input required type="text" class="inputt" placeholder="Card holder name*"/>
          <br /> <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button variant="outlined" onClick={backStep}>Back</Button>
            <Button type="submit" variant="contained" color="primary">
              Pay {cart.subtotal.formatted_with_symbol}
            </Button>
          </div>
        </form>
    </>
  )
}

export default PaymentForm