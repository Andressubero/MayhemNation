import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export const Form = () => {
  const classes = useStyles();

  const initialState = {
      firstName: "",
      lastName: "",
      phone: "",
      adress: "",
      cardNumber: "" ,
      cvv: ""

  }
 const [values, setValues] = useState(initialState)

  const onChange = (e) => {
     const {name, value} = e.target
     setValues({...values, [name]:value})

 }

 const onSubmit = (e) => {
     e.preventDefault();
     console.log(values) 
     setValues({...initialState})
 }

    return (
        <form className={classes.root} noValidate autoComplete="off">
        <Input placeholder="Last Name" name="lastName" onChange={onChange} inputProps={{ 'aria-label': 'description' }} />
        <Input placeholder="First Name" name="firstName" onChange={onChange}  inputProps={{ 'aria-label': 'description' }} />
        <Input placeholder="Phone" name="phone"  onChange={onChange}  inputProps={{ 'aria-label': 'description' }} />
        <Input placeholder="Adress" name="adress" onChange={onChange}  inputProps={{ 'aria-label': 'description' }} />
        <Input placeholder="Card Number" name="cardNumber"  onChange={onChange}  inputProps={{ 'aria-label': 'description' }} />
        <Input placeholder="CVV" name="cvv"  onChange={onChange}  inputProps={{ 'aria-label': 'description' }} />
        <Button variant="contained"  color="secondary" onClick={ () => {onSubmit()}}>Submit</Button>


      </form>
    )
    }
