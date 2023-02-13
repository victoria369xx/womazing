import { useState } from 'react';
import banner from '../../assets/images/search_banner.jpg'; 
import './style.scss';
import { ItemsList } from '../ItemsList/ItemsList';



export const SearchField = () => {
    let [searchValue, setSearchValue] = useState('')

    return (
        <section>
            <div className="searchField" style={{ backgroundImage: `url(${banner})`, backgroundSize:'100%', backgroundRepeat:'no-repeat', height:'80vh'}}>
                <input className='searchField-input' placeholder='Я ищу...' type='text' onChange={event=> setSearchValue(event.target.value)}/>
            </div> 
            <ItemsList searchValue = {searchValue}/>
        </section>
    )
}