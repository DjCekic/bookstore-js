import Home from './views/Home.vue';
import Register from './views/Register.vue';
import Login from './views/Login.vue';
import Cart from './views/Cart.vue';
import BookDetails from './views/BookDetails.vue';

const routes = [
    { path: '/:query?', name: 'home', component: Home },
    { path: '/user/cart', name: 'cart', component: Cart},
    { path: '/user/register', name: 'register', component: Register },
    { path: '/user/login', name: 'login', component: Login },
    { path: '/books/:book_id', name: 'book', component: BookDetails}
];


export default routes;
