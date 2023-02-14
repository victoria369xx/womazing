
const initialState = {
    itemsList: [
        {id:1, name: 'Футболка', brand: 'Zara', img:'https://cdn.sela.ru/wa-data/public/shop/products/34/01/110134/images/100361/100361.2250x3000.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', size: [' XS ', ' S ',  'M', 'XL'], price:20},
        {id:2, name: 'Брюки', brand: 'Bershka', img:'https://cdn.sela.ru/wa-data/public/shop/products/69/41/124169/images/245481/245481.480x617.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', size: ['XS', 'S','XL'], price:50},
        {id:3, name: 'Свитшот', brand: 'Mango', img:'https://cdn.sela.ru/wa-data/public/shop/products/64/62/116264/images/150028/150028.480x617.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', size: ['XS', 'М','XL'], price:120},
        {id:4, name: 'Футболка', brand: 'Zara', img:'https://cdn.sela.ru/wa-data/public/shop/products/25/89/128925/images/246590/246590.480x617.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', size: ['XS', 'S','М'], price:30},
        {id:5, name: 'Брюки', brand: 'Bershka', img:'https://cdn.sela.ru/wa-data/public/shop/products/65/37/123765/images/245430/245430.480x617.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', size: ['XS', 'S', 'M','XL'], price:70},
        {id:6, name: 'Свитшот', brand: 'Mango', img:'https://cdn.sela.ru/wa-data/public/shop/products/00/48/114800/images/136774/136774.480x617.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', size: ['M', 'L'], price:150}
    ]
}

export const itemsListReducer = (state = initialState, action) => {
    switch (action.type) {

        default: {
            return state;
        }
    }
}