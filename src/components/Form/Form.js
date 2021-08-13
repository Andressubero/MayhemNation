import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { useState} from 'react';
import "./Form.css"

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export const Form = ({onHide, submitUser, totalPrice, finish}) => {
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

 const onSubmit = () => {
   
     console.log(values) 
     submitUser(values)
     setValues({...initialState})
     finish()
     
     
 }

    return (

      
        <div>
        <form  className={classes.root} noValidate autoComplete="off">
          <div className="input-container"> 

            <div> 
            <Input placeholder="Last Name" name="lastName" value={values.lastName} onChange={onChange} inputProps={{ 'aria-label': 'description' }} />
            <Input placeholder="First Name" name="firstName" value={values.firstName} onChange={onChange}  inputProps={{ 'aria-label': 'description' }} />
            <Input placeholder="Phone" name="phone"  onChange={onChange} value={values.phone} inputProps={{ 'aria-label': 'description' }} />
          </div>

        <div>
          <Input placeholder="Adress" name="adress" onChange={onChange} value={values.adress} inputProps={{ 'aria-label': 'description' }} />
          <Input placeholder="Card Number" name="cardNumber"  onChange={onChange} value={values.cardNumber}  inputProps={{ 'aria-label': 'description' }} />
          <Input placeholder="CVV" name="cvv"  onChange={onChange} value={values.cvv} inputProps={{ 'aria-label': 'description' }} />
        </div>

        </div>
         
       
        <Button variant="contained" onClick={ () => {onHide()}}  color="secondary" >Back to Cart</Button>
        <Input defaultValue={`Total to pay: ${totalPrice}$`}/>
        <Button variant="contained" onClick={ () => {onSubmit()}}  color="secondary" >Submit</Button>


      </form></div>
    
        
    )
    }
