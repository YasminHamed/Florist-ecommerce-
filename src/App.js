import React, { useEffect, useState } from 'react';
import { commerce } from './Ecommerce';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home';
import About from './component/About/About';
import Shop from './component/Shop/Shop';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import Cart from './component/Cart/Cart';
import Checkout from './component/CheckoutForm/Checkout/Checkout';
import Error from './component/Error/Error';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data)

  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });
    setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);
    setCart(response.cart);
  };


  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();
    setCart(response.cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();

  }, []);

  console.log(products); 
  console.log(cart); 

  return (
    <BrowserRouter>
      <Navbar totalItems={cart.total_items}/>
      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path="*" element={<Error/>} />
        <Route path='/About' element={<About />}  />
        <Route path='/Shop' element={<Shop products={products} onAddToCart={handleAddToCart} />}  />
        <Route path='/Contact' element={<Contact />}  />
        <Route path='/Cart'  element={<Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />}    />
        <Route path='/Checkout' element={<Checkout cart={cart}  order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage}/>}  />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
