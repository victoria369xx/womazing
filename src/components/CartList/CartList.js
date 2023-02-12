import { CartItem } from '../CartItem/CartItem'; 
import { useSelector } from 'react-redux';
import {getCartList} from '../../store/cartItems/selectors';

export const CartList = () => {
    let cartItems = useSelector(getCartList)

    

    return (
        <>
        {cartItems.length > 0 ? cartItems.map((item, index)=> {
            return <CartItem item={item} key={index}/>
        }): <h2 style={{textAlign:'center'}}> Корзина пуста </h2>}
        
        </>
    )
}