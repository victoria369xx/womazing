import {Routes, Route} from 'react-router';
import {HomePage} from '../../pages/HomePage';
import {CartPage} from '../../pages/CartPage';
import {OrderPage} from '../../pages/OrderPage';
import {NotFoundPage} from '../../pages/NotFoundPage'

export const ProjectRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/cart' element={<CartPage/>}/>
            <Route path='/order' element={<OrderPage/>}/>

            <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
    )
    
}