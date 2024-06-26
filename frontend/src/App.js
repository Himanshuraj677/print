import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/navbar';
import Setting from './pages/Setting';
import About from './pages/About';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import Order from './pages/Order';
import PageNotFound from './pages/PageNotFound';
import Products from './pages/Products';
import PriceCalculator from './pages/PriceCalculator';
import Cart from './pages/Cart';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/home' element={<Home />} />
          <Route path='/order' element={<Order />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/setting' element={<Setting />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/products' element={<Products />} />
          <Route path='/price-calculator' element={<PriceCalculator />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
