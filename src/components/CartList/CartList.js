import { CartItem } from '../CartItem/CartItem'; 
export const CartList = () => {
    let cartItems = [
        {id:1, name: 'Футболка', brand: 'Zara', img:'https://cdn.sela.ru/wa-data/public/shop/products/34/01/110134/images/100361/100361.2250x3000.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', size: [' XS ', ' S ',  'M', 'XL'], price:20},
        {id:2, name: 'Брюки', brand: 'Bershka', img:'https://cdn.sela.ru/wa-data/public/shop/products/34/01/110134/images/100361/100361.2250x3000.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', size: ['XS', 'S','XL'], price:50},
        {id:3, name: 'Свитшот', brand: 'Mango', img:'https://cdn.sela.ru/wa-data/public/shop/products/34/01/110134/images/100361/100361.2250x3000.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', size: ['XS', 'М','XL'], price:120},
        {id:4, name: 'Футболка', brand: 'Zara', img:'https://cdn.sela.ru/wa-data/public/shop/products/34/01/110134/images/100361/100361.2250x3000.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', size: ['XS', 'S','М'], price:20},
        {id:5, name: 'Брюки', brand: 'Bershka', img:'https://cdn.sela.ru/wa-data/public/shop/products/34/01/110134/images/100361/100361.2250x3000.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', size: ['XS', 'S', 'M','XL'], price:50},
        {id:6, name: 'Свитшот', brand: 'Mango', img:'https://cdn.sela.ru/wa-data/public/shop/products/34/01/110134/images/100361/100361.2250x3000.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', size: ['M', 'L'], price:120}
        ]

    return (
        <>
        {cartItems?.map((item, index)=> {
            return <CartItem item={item} key={index}/>
        })}
        
        </>
    )
}