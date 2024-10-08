import CustomersViewed from "../components/CustomersViewed"
import DummyShopItems from "../components/DummyShopItems"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import RecentlyViewed from "../components/RecentlyViewed"
import SingleProductInfo from "../components/SingleProductInfo"


function SingleProduct() {
    return(
        <>
        <div>
            <Navigation />
            <SingleProductInfo />
            <CustomersViewed />
            <RecentlyViewed />
            <Footer />
        </div>
        </>
    )
}
export default SingleProduct