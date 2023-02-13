import { useState } from 'react';
import { ItemCard } from '../ItemCard/ItemCard';
import { Pagination, Checkbox, FormControlLabel, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import {getItemsList} from '../../store/itemsDB/selectors';
import './index.scss'


export const ItemsList = (props) => {

let sizes = ['XS', 'S', 'M', 'L', 'XL']
 let itemsList = useSelector(getItemsList)
 let [checkboxSizeValue, setCheckboxSizeValue] = useState('')

let filteredItemsList =  itemsList.filter(item => {
        return item.name.toLowerCase().includes(props.searchValue.toLowerCase())||item.brand.toLowerCase().includes(props.searchValue.toLowerCase())
     })
     
     /*.filter(item => {
        return item.size.includes(checkboxSizeValue)
     })*/
 
 
    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', marginBottom:'2rem'}}>
            <h2 className='itemsList-heading'> КАТАЛОГ </h2> 
            <div className='itemList-filters'>
                <div className='filter-price filter-mr'>
                    <p><b>Цена:</b></p>  
                    <Button sx={{color:'black', mr:2}}>Сначала дешевле</Button> 
                    <Button sx={{color:'black'}}> Сначала дороже</Button>
                </div>
                <div className='filter-size filter-mr'>
                    <p><b>Размер: </b></p>  
                        {sizes.map((size, index)=> {
                            return  <FormControlLabel control={<Checkbox value={size} onChange={event => setCheckboxSizeValue(event.target.value)}/>} label={size} key={index} />
                        })}
                </div>
            </div>
                <div className='itemsList-container'>
                { filteredItemsList?.map((item, id) => {
                    return  <ItemCard item={item} key= {id}/>
                })}
            </div>
            
            <Pagination count={10} variant="outlined" />
        </div>
    )
}