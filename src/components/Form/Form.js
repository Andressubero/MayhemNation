import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import "./Form.css"

import { ItemsContext } from '../../Context/Context';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export const Form = () => {


  const {submitUser, totalPrice, cart, curr} =  useContext(ItemsContext)



  const classes = useStyles();

  const initialState = {
      firstName: "",
      lastName: "",
      phone: "",
      email:"",
      products: ""

  }
 const [values, setValues] = useState(initialState)

  const onChange = (e) => {
     const {name, value} = e.target
     setValues({...values, [name]:value, products: cart, date: curr, total: totalPrice})

 }

 const onSubmit = () => {
   
     console.log(values) 
     submitUser(values)
     setValues({...initialState})
          
 }

    return (

      
        <div>
          <form  className={classes.root} noValidate autoComplete="off">
              <div className="input-container"> 
                <div> 
                  <Input placeholder="Last Name" name="lastName" value={values.lastName} onChange={onChange} inputProps={{ 'aria-label': 'description' }} />
                  <Input placeholder="First Name" name="firstName" value={values.firstName} onChange={onChange}  inputProps={{ 'aria-label': 'description' }} />
                  <Input placeholder="Phone" name="phone"  onChange={onChange} value={values.phone} inputProps={{ 'aria-label': 'description' }} />
                  <Input placeholder="E-mail" name="email" onChange={onChange} value={values.email} inputProps={{ 'aria-label': 'description' }} />
                </div>
                <div>
                    <h3>Products:</h3>
                      <ul>
                          {cart.map(item=>  {
                              return (
                                  <li key={`compra-${item.id}`}>Product: {item.name}/ Quantity: {item.quantity}</li>
                              )
                          })}
                      </ul>
                      Full payment: {totalPrice} $
                  </div>
              </div>       
            <Link className="link" to="/CartView"><Button  variant="contained"  color="secondary" >Back to Cart</Button></Link>
            <Input defaultValue={`Total to pay: ${totalPrice}$`}/>
            <Link className="link" to="CheckOut"> <Button variant="contained" onClick={ () => {onSubmit()}}  color="secondary" >Submit</Button></Link>
            </form>
        </div>
    
        
    )
    }
