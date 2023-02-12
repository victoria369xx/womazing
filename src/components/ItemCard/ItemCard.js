import {Card, CardMedia, Button, Typography} from '@mui/material'; 
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/cartItems/actions';

export const ItemCard = (props) => {
const dispatch = useDispatch();

  const  addToCartHandler = (item) => {
    dispatch(addItem(item))
  }
    return (
        <Card sx={{width:'335px', height:'600px', marginBottom:'2rem'}}>
             <CardMedia
            sx={{ height: 380 }}
            image={props.item.img}
            title={props.item.name}
            >
            <Button size="medium" variant='text' sx={{left:'275px', top:'2px', color:'#1C1C1C'}}> <FavoriteBorderIcon/></Button>    
            </CardMedia> 
            <div className='cardContent' style={{display:'flex', flexDirection:'column', padding: '1rem 1rem 0 1rem'}}>
                <Typography gutterBottom variant="h5" component="div">
                    {props.item.name} {props.item.brand} 
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.item.description}
                </Typography> 
                <div style={{display:'flex', justifyContent:'space-between'}}> 
                 <span style={{display:'flex', marginRight: '2px'}}>
                 {props.item.size.map((size, index)=> {
                    return <p style={{cursor:'pointer', marginRight:'5px'}} key={index}> {size} </p>
                 })}
                 </span>
                <Typography gutterBottom variant="h5" component="div" sx={{alignSelf:'flex-end'}}>
                    {props.item.price} $
                </Typography>
                </div>
           </div> 
            <div className='cardActions' style={{display:'flex', justifyContent:'flex-end'}}>
                <Button size="medium" variant='text' sx={{marginRight:'1rem', color:'#1C1C1C'}} endIcon={<ShoppingCartIcon/>} onClick={()=>addToCartHandler(props.item)} >В корзину</Button>
            </div>
        </Card>
    )
}