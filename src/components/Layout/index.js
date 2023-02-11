import { Link, Outlet } from 'react-router-dom';
import './style.scss';
import { Container } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Footer } from '../Footer/Footer';

export const Layout = () => {
    return (
        <Container maxWidth='lg' sx={{mt:3}}> 
            <div>
            <header className='header'>
                <Link to='/' className='header-link__logo'> <h1>WOMAZING</h1> </Link>
                <span className='header-right-flex'>
                    <Link className='header-link' to='/'> <PersonIcon sx={{fontSize:'2rem'}}/> </Link> 
                    <Link className='header-link' to='/'> <FavoriteIcon sx={{fontSize:'2rem'}}/> </Link>
                    <Link className='header-link' to='/'> <LocalMallIcon sx={{fontSize:'2rem'}}/> </Link>
                    <Link className='header-link' to='/cart'> <ShoppingCartIcon sx={{fontSize:'2rem'}}/> </Link>
                </span>
            </header>
            <Outlet/>
            </div>
            <Footer/>
        </Container>
    )
}