import React, {useState} from 'react';
import { Typography, Grid, InputLabel, Select, MenuItem, Button } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';

import FormInput from './CustomTextField'
import { Link } from 'react-router-dom';

const AdressForm = ({next}) => {
    const methods = useForm();

    return (
        <>
          <Typography variant="h6" gutterBottom >Shipping Address</Typography>  
          <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit((data) => next({data}))}>
                  <Grid container spacing={3}>
                      <FormInput required name ='firstName' label='First name'/>
                      <FormInput required name ='lastName' label='Last name'/>
                      <FormInput required name ='adress1' label='Adress'/>
                      <FormInput required name ='email' label='Email'/>
                      <FormInput required name ='City' label='City'/>
                      <FormInput required name ='zip' label='ZIP / Postal code'/>
                  </Grid>
                  <br />
                  <div style={{display: 'flex' , justifyContent:'space-between'}}>
                      <Button component={Link} to="/Cart" variant="outlined">Back to Cart</Button>
                      <Button type="submit"  variant="contained" color="primary">Next</Button>
                  </div>
              </form>
          </FormProvider>
        </>
    )
}

export default AdressForm