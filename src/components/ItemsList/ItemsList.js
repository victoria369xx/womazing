import { useState } from 'react';
import { ItemCard } from '../ItemCard/ItemCard';
import { Pagination, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import {getItemsList} from '../../store/itemsDB/selectors';
import './index.scss'
import banner from '../../assets/images/search_banner.jpg'; 



export const ItemsList = () => {

let sizes = ['Все','XS', 'S', 'M', 'L', 'XL']
let prices = ['Дешевле', 'Дороже']
 let itemsList = useSelector(getItemsList)
 let [filteredItemsList, setFilteredItemsList] = useState(itemsList)
 let [searchValue, setSearchValue] = useState('')
 
 const searchHandler = (event) => {
        if (event.target.value === '') {
            setFilteredItemsList(itemsList)
            return
        }
    setSearchValue(event.target.value)
    let filteredSearch = itemsList.filter(item => {
        return item.name.toLowerCase().includes(searchValue.toLowerCase())||item.brand.toLowerCase().includes(searchValue.toLowerCase())
     })
     setFilteredItemsList(filteredSearch)
 }

const sizeFilterHandler = (value) => {
    if (value === 'Все') {
        setFilteredItemsList(itemsList)
        return;
    }
    let filteredSize = filteredItemsList.filter(item => {
        return item.size.includes(value)
    })
    setFilteredItemsList(filteredSize)
}

const priceFilterHandler = (value) => {
    // .concat() используется, чтобы вернуть новый массив и сделать ре-рендер результата
    if (value === 'Дешевле') {
        let sortedCheaper = filteredItemsList.sort((a,b)=> a.price - b.price).concat()
        setFilteredItemsList(sortedCheaper) 
        return;
    }

    if (value === 'Дороже') {
        let sortedMoreExpensive = filteredItemsList.sort((a, b) => b.price - a.price).concat()
        setFilteredItemsList(sortedMoreExpensive)
        return;
    }
}

    return ( <> 
      <section>
            <div className="searchField" style={{ backgroundImage: `url(${banner})`, backgroundSize:'100%', backgroundRepeat:'no-repeat', height:'80vh'}}>
                <input className='searchField-input' placeholder='Я ищу...' type='text' onChange={searchHandler}/>
            </div> 
        </section>

        <div style={{display:'flex', flexDirection:'column', alignItems:'center', marginBottom:'2rem'}}>
            <h2 className='itemsList-heading'> КАТАЛОГ </h2> 
            <div className='itemList-filters'>
                <div className='filter-price filter-mr'>
                    <p><b>Цена:</b></p>  
                    {prices.map((price,index)=> {
                            return <Button key={index} onClick={()=>priceFilterHandler(price)} sx={{color:'black', mr:2}}>{price}</Button>
                        })}
                </div>
                <div className='filter-size filter-mr'>
                    <p><b>Размер: </b></p>  
                        {sizes.map((size,index)=> {
                            return <Button key={index} onClick={()=>sizeFilterHandler(size)} sx={{color:'black'}}>{size}</Button>
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
        </>
    )
}