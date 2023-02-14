
import {useState } from 'react';
import { useDispatch } from 'react-redux';
import {Grid, Typography, TextField, Button} from '@mui/material';
import { setInfo } from '../../store/orders/actions';

export default function AddressForm() {
  const [userName, setUserName] = useState('')
  const [userLastName, setUserLastName] = useState('')
  const [userAddress, setUserAddress] = useState('')
  const [userEmail, setUserEmail] = useState('')

  const dispatch = useDispatch()

  const submitHandler = () => {
    dispatch(setInfo({
      name:userName,
      lastName: userLastName,
      email: userEmail,
      address: userAddress
    }))
  }
   
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Адрес доставки
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Имя"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={(event)=>setUserName(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Фамилия"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            onChange={(event)=>setUserLastName(event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            label="Эл. почта"
            type='email'
            fullWidth
            variant="standard"
            onChange={(event)=>setUserEmail(event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Адрес доставки"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard" 
            onChange={(event)=>setUserAddress(event.target.value)}
          />
        </Grid>

        <Grid item xs={12}>
          <Button variant='contained' onClick={submitHandler}>Подтвердить данные</Button>
        </Grid>
      </Grid>
    </>
  );
}
