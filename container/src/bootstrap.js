import { mount as productsMount } from 'products/ProductsIndex';
import { mount as cartMount } from 'cart/CartIndex';

console.log('Container bootstrap!');

productsMount(document.getElementById('product-root'));
cartMount(document.getElementById('cart-root'));
