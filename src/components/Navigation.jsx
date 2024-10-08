import AltShops from "./AltShops"
import Categories from "./Categories"
import NewInfoSlider from "./NewInfoSlider"
import SearchTab from "./SearchTab"
import ShippingNote from "./ShippingNote"


function Navigation() {
    
    return(
        <>
            {/* <AltShops /> */}
            <ShippingNote />
            <SearchTab />
            <Categories />
            <NewInfoSlider />
        </>
    )
}
export default Navigation