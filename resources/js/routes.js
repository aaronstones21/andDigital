import Home from './components/Customer/Home';
import About from './components/Customer/About';
import order from './components/Customer/Order';
import notFound from './components/notFound';
import login from './components/Authentication/Login';
import register from './components/Authentication/Register';
import dashboard from './components/Admin/Dashboard';

export default{
    mode: 'history',
    linkActiveClass: 'font-semibold',

    routes: [{
        path: '/',
        component: Home,
        name: 'Home'
    },
    {
        path: '*',
        component: notFound
    },
    {
        path: '/about',
        component: About,
        name: 'About'
    },
    {
        path: '/login',
        component: login,
        name: 'Login',

    },
        {
            path: '/order',
            component: order,
            name: 'Order'
        },
    {
        path: '/register',
        component: register,
        name: 'Register'
    },
        {
            path: "/admin/dashboard",
            name: "Dashboard",
            component: dashboard,
            beforeEnter: (to, form, next) =>{
                axios.get('/api/athenticated').then(()=>{
                    next()
                }).catch(()=>{
                    return next({ name: 'Login'})
                })
            }

        },



        {
            path: "/admin/products",
            name: "Products",
            component: dashboard,

        }
]
}
