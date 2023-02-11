import { Typography, Link } from '@mui/material';

function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href='/'>
          WOMAZING
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

export const Footer = () => {
    return (
        <Copyright/>
    )
}