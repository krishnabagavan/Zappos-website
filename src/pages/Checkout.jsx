import AltShops from "../components/AltShops"
import CheckoutHeader from "../components/CheckoutHeader"
import Footer from "../components/Footer"
import OrderInfo from "../components/OrderInfo"
import ShippingNote from "../components/ShippingNote"

function Checkout() {
    return (
        <>
            <AltShops />
            <ShippingNote />
            <CheckoutHeader />
            <OrderInfo />
            <Footer />
        </>
    )
}
export default Checkout