import { CartList } from '../components/CartList/CartList'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCartList } from '../store/cartItems/selectors';

export const CartPage = () => {
    let cartItems = useSelector(getCartList)
    return (
        <div style={{display:'flex', flexDirection:'column'}}>
        <CartList/>
        {
        cartItems.length > 0 ? <Button variant='outlined' sx={{mb:4, alignSelf:'flex-end', border: '1px solid black'}}><Link to='/order' style={{textDecoration:'none', color:'black'}}>Оформить заказ</Link></Button> : <></>
        }
        </div>
    )
}