import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Home from './components/home/Home';
import Login from './components/login/Login';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Restaurant from './components/restaurant/Restaurant';
import RestaurantMenu from './components/restaurant/RestaurantMenu';
import Order from './components/Order/Order';
import Footer from './components/footer/Footer';
import { CartProvider } from './context/CartContext';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/restaurants" element={<Restaurant />} />
            <Route path="/restaurant/:id" element={<RestaurantMenu />} />
            <Route path="/order" element={<Order />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
