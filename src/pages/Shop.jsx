import { BsCaretRightFill, } from 'react-icons/bs'
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import ShopItems from '../components/ShopItems';
import RecentlyViewed from '../components/RecentlyViewed';
import CustomersViewed from '../components/CustomersViewed';

function Shop() {
    return (
        <>
            <Navigation />
            <ShopItems />
            <RecentlyViewed />
            <CustomersViewed />
            <Footer />
        </>
    )
}
export default Shop