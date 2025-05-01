import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Header from './components/Header'
import LandingPage from './pages/LandingPage'
import ProductListing from './pages/ProductListing'
import ShoppingCart from './pages/ShoppingCart'
import './App.css'

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="app">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/products" element={<ProductListing />} />
              <Route path="/cart" element={<ShoppingCart />} />
            </Routes>
          </main>
        </div>
      </Router>
    </CartProvider>
  )
}

export default App
