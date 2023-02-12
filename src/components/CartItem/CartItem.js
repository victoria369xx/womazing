import { Paper, Grid, CardMedia, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import './index.scss';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../../store/cartItems/actions';

export const CartItem = (props) => {

    const dispatch = useDispatch();

    const deleteFromCartHandler = (id) => {
        console.log(id)
        dispatch(deleteItem({id}))
    }

    return (
        <div className='cartItemWrapper'>
        <Paper sx={{mb:3}}>
        <Grid container>
            <Grid item xs={3}>
            <CardMedia
            sx={{ height: 200, width: 150 }}
            image={props.item.img}
            title={props.item.name}
            />
            </Grid>
            <Grid item xs={5} style={{display:'flex', flexDirection:'column', marginTop:'2rem'}}>
                <span style={{marginBottom:'1rem', fontWeight:'bold'}}>
                {props.item.name} <span/>
                {props.item.brand} 
                </span>
                {props.item.description}
            </Grid>
            <Grid item xs={1} style={{marginTop:'4rem'}}>
                {props.item.size[0]} 
            </Grid>
            <Grid item xs={1} style={{marginTop:'4rem'}}>
                1 шт.
            </Grid>
            <Grid item xs={1} style={{marginTop:'4rem'}}>
                {props.item.price} $
            </Grid>
            <Grid item xs={1} style={{marginTop:'3.5rem'}}>
                <Button onClick={()=> deleteFromCartHandler(props.item.id)}><DeleteIcon sx={{color:'black'}}/></Button>
            </Grid>
        </Grid>
        </Paper>
        </div>
    )
}