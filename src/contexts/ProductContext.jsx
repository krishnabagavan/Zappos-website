import { useState, useEffect, createContext } from "react";

export const ProductContext = createContext();

function ProductProvider(props) {
  const [cart, setCart] = useState([]);
  let storedCart = JSON.parse(localStorage.getItem("cart"));

  useEffect(() => {
    if (storedCart) {
      setCart(storedCart);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <ProductContext.Provider value={{ cart, setCart }}>
      {props.children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
