import React, {useState, useEffect} from 'react'
import { CircularProgress, Divider, Button, Paper, Typography, Stepper, Step, StepLabel} from '@material-ui/core';
import "./ckeck.css"
//component
import useStyles from './styles';
import AdressForm from '../AdressForm';
import PaymentForm from '../PaymentForm';

const steps = ['Shipping adress', 'Payment details'];

const Checkout = ({cart, onCaptureCheckout, order, error }) => {
    const [activeStep, setActiveStep] = useState(0);
    const [shippingData, setShippingData] = useState({});
    const classes = useStyles();

    const nextStep = () => setActiveStep((prevActiveStep)=> prevActiveStep +1)
    const backStep = () => setActiveStep((prevActiveStep)=> prevActiveStep -1)

    const next = (data) => {
        setShippingData(data);

        nextStep();
    }

    const Confirmation =() => (
        <div className="ml-4">
            <h1>Your Order is Comfirmed!</h1>
            <p>your card was dropped in the email today and should arrive in 2-7 days(depending on the speed of th USPS)</p>
            <img className="ml-5" width="300px" src="\icons8-delivery.gif" alt="" />
            <h3>Order number: <span className="h2 color">650056</span></h3>
            <br />
            <a href="/"  class="btn btn-success">Back to Home</a>
        </div>
    )

    const Form = () => activeStep === 0
        ? <AdressForm next={next}/>
        : <PaymentForm cart={cart} shippingData={shippingData} backStep={backStep} onCaptureCheckout={onCaptureCheckout} nextStep={nextStep}/>
  return (
    <>
        <div className={classes.toolbar}/>
        <main className={classes.layout}>
            <Paper className={classes.paper}>
                <Typography variant="h4" align="center">Checkout</Typography>
                <Stepper activeStep={activeStep} className={classes.Stepper}>
                    {steps.map((step) =>(
                        <Step key={step}>
                            <StepLabel>{step}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length ? <Confirmation/> : <Form/>}
            </Paper>
        </main>
    </>
  )
}

export default Checkout