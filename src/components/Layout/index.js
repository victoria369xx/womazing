import { Link, Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
export const Layout = () => {
    return (
        <Container maxWidth='lg' sx={{mt:3}}>
            <header style={{display:'flex', justifyContent:'space-between'}}>
                <Link to='/'> WOMAZING </Link>
                <span>
                    <Link to='/'> Profile </Link> 
                    <Link to='/'> Fav </Link>
                    <Link to='/'> Orders </Link>
                    <Link to='/cart'> Cart </Link>
                </span>
            </header>
            <Outlet/>
        </Container>
    )
}