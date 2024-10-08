import {Link, } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Points from '../components/Points';
import Policies from '../components/Policies';
import RecentlyViewed from '../components/RecentlyViewed';
import CustomersViewed from '../components/CustomersViewed';
import CartItems from '../components/CartItems';

function Cart() {
    return(
        <>
        <Navigation />
        <Points />
        <Policies />
        <CartItems />
        <CustomersViewed />
        <RecentlyViewed />
        <Footer />
        </>
    )
}
export default Cart