import { Link } from 'react-router-dom'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { useCart } from '../context/CartContext'

function Header() {
  const { getTotalItems } = useCart()

  return (
    <header>
      <nav className="container">
        <Link to="/">GreenScape Plants</Link>
        
        <div>
          <Link to="/products">Products</Link>
          <Link to="/cart" className="cart-icon">
            <ShoppingCartIcon className="h-6 w-6" />
            {getTotalItems() > 0 && (
              <span className="cart-badge">
                {getTotalItems()}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header 