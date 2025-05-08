import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { TrashIcon } from '@heroicons/react/24/outline'

function ShoppingCart() {
  const { cart, removeFromCart, updateQuantity, getTotalCost, getTotalItems } = useCart()

  if (cart.length === 0) {
    return (
      <div className="cart-page container">
        <h1>Your Cart is Empty</h1>
        <Link 
          to="/products"
          className="btn btn-primary"
        >
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="cart-page container">
      <h1>Shopping Cart</h1>
      
      <div className="cart-summary">
        <p>You have {getTotalItems()} plants in your cart</p>
      </div>

      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <img 
              src={item.image} 
              alt={item.name}
              className="cart-item-image"
            />
            
            <div className="cart-item-info">
              <h3 className="cart-item-name">{item.name}</h3>
              <p className="cart-item-price">${item.price}</p>
            </div>

            <div className="quantity-controls">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="quantity-btn"
                disabled={item.quantity <= 1}
              >
                -
              </button>
              <span className="quantity-display">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="quantity-btn"
              >
                +
              </button>
            </div>

            <div className="item-total">
              ${(item.price * item.quantity).toFixed(2)}
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="remove-btn"
              aria-label="Remove item"
            >
              <TrashIcon className="h-6 w-6" />
            </button>
          </div>
        ))}
      </div>

      <div className="cart-total">
        <div className="cart-total-details">
          <p>Total Plants: {getTotalItems()}</p>
          <p className="cart-total-amount">Total: ${getTotalCost().toFixed(2)}</p>
        </div>
        
        <div className="cart-actions">
          <button
            onClick={() => alert('Coming Soon!')}
            className="btn btn-primary"
          >
            Checkout
          </button>
          
          <Link
            to="/products"
            className="btn btn-secondary"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart 