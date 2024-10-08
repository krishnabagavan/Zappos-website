import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';

import './App.css';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Cart from './pages/cart';
import Checkout from './pages/Checkout';
import Shop from './pages/Shop';
import SingleProduct from './pages/SIngleProduct';
import ProductProvider from './contexts/ProductContext';

function App() {
  const ip = 'http://159.65.21.42:9000/';
  const aurl = `${ip}product`;
  const geturl = `${ip}products`;
  const get_a_url = `${aurl}`;

  return (
    <>
      <ProductProvider>
        <BrowserRouter >
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/shop" element={<Shop />} />
            <Route path={`/${get_a_url}/:id`} element={<SingleProduct />} />
          </Routes>
        </BrowserRouter>
      </ProductProvider>
    </>
  )
}

export default App