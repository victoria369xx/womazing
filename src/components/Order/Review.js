import * as React from 'react';
import {Typography, List, ListItem, ListItemText, Grid} from '@mui/material';
import { useSelector } from 'react-redux';
import {getCartList} from '../../store/cartItems/selectors';
import {getUserInfo} from '../../store/orders/selectors';


export default function Review() {

  const cartItems = useSelector(getCartList)
  const userInfo = useSelector(getUserInfo)
  const totalPrice = cartItems.reduce((acc, currVal) => acc + currVal.price, 0)

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Детали заказа
      </Typography>
      <List disablePadding>
        {cartItems.map((item) => (
          <ListItem key={item.id} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={item.name} secondary={item.description} />
            <Typography variant="body2">{item.price}$</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {totalPrice}$
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Доставка
          </Typography>
          <Typography gutterBottom>{userInfo.name}{userInfo.lastName}</Typography>
          <Typography gutterBottom>{userInfo.address}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Метод оплаты
          </Typography>
          <Typography gutterBottom>Банковская карта</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
