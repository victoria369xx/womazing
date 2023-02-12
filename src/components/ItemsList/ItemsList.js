import { ItemCard } from '../ItemCard/ItemCard';
import { Pagination, Checkbox, FormControlLabel, Button } from '@mui/material';
import './index.scss'


export const ItemsList = () => {

let sizes = ['XS', 'S', 'M', 'L', 'XL']
 let items = [
        {id:1, name: 'Футболка', brand: 'Zara', img:'https://cdn.sela.ru/wa-data/public/shop/products/34/01/110134/images/100361/100361.2250x3000.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', size: [' XS ', ' S ',  'M', 'XL'], price:20},
        {id:2, name: 'Брюки', brand: 'Bershka', img:'https://cdn.sela.ru/wa-data/public/shop/products/34/01/110134/images/100361/100361.2250x3000.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', size: ['XS', 'S','XL'], price:50},
        {id:3, name: 'Свитшот', brand: 'Mango', img:'https://cdn.sela.ru/wa-data/public/shop/products/34/01/110134/images/100361/100361.2250x3000.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', size: ['XS', 'М','XL'], price:120},
        {id:4, name: 'Футболка', brand: 'Zara', img:'https://cdn.sela.ru/wa-data/public/shop/products/34/01/110134/images/100361/100361.2250x3000.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', size: ['XS', 'S','М'], price:20},
        {id:5, name: 'Брюки', brand: 'Bershka', img:'https://cdn.sela.ru/wa-data/public/shop/products/34/01/110134/images/100361/100361.2250x3000.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', size: ['XS', 'S', 'M','XL'], price:50},
        {id:6, name: 'Свитшот', brand: 'Mango', img:'https://cdn.sela.ru/wa-data/public/shop/products/34/01/110134/images/100361/100361.2250x3000.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', size: ['M', 'L'], price:120},
        ]

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
                            return  <FormControlLabel control={<Checkbox/>} label={size} key={index} />
                        })}
                </div>
            </div>
            <div className='itemsList-container'>
                { items?.map((item, id) => {
                    return  <ItemCard item={item} key= {id}/>
                })}
            </div> 
            <Pagination count={10} variant="outlined" />
        </div>
    )
}