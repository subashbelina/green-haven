import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import '../styles/ProductListing.css'

const products = [
  {
    id: 1,
    name: 'Monstera Deliciosa',
    price: 49.99,
    image: '/assets/images/monstera.jpg',
    category: 'Indoor Plants',
    description: 'A popular tropical plant known for its distinctive split leaves.'
  },
  {
    id: 2,
    name: 'Snake Plant',
    price: 39.99,
    image: '/assets/images/snake-plant.jpg',
    category: 'Indoor Plants',
    description: 'A hardy plant that can survive in low light conditions.'
  },
  {
    id: 3,
    name: 'Golden Pothos',
    price: 29.99,
    image: '/assets/images/pothos.jpg',
    category: 'Indoor Plants',
    description: 'A trailing plant with heart-shaped leaves.'
  },
  {
    id: 4,
    name: 'Fiddle Leaf Fig',
    price: 79.99,
    image: '/assets/images/fiddle-leaf.jpg',
    category: 'Indoor Plants',
    description: 'A statement plant with large, glossy leaves.'
  },
  {
    id: 5,
    name: 'Succulent Collection',
    price: 34.99,
    image: '/assets/images/succulent.jpg',
    category: 'Succulents',
    description: 'A set of 3 different drought-resistant succulents.'
  },
  {
    id: 6,
    name: 'Calathea',
    price: 44.99,
    image: '/assets/images/calathea.jpg',
    category: 'Indoor Plants',
    description: 'Known for its beautiful patterned leaves.'
  }
]

const ProductListing = () => {
  const { addToCart, cart } = useCart()
  const [loadedImages, setLoadedImages] = useState({})

  const handleImageLoad = (id) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }))
  }

  return (
    <div className="products-page container">
      <h1>Our Plants</h1>
      
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="image-container">
              {!loadedImages[product.id] && (
                <div className="image-placeholder">
                  <div className="loading-spinner"></div>
                </div>
              )}
              <img 
                src={product.image} 
                alt={product.name} 
                className={`product-image ${loadedImages[product.id] ? 'loaded' : ''}`}
                loading="lazy"
                onLoad={() => handleImageLoad(product.id)}
              />
            </div>
            <div className="product-info">
              <h2>{product.name}</h2>
              <p className="product-description">{product.description}</p>
              <p className="product-price">${product.price}</p>
              <button
                className={`btn-add-to-cart ${cart.some(item => item.id === product.id) ? 'in-cart' : ''}`}
                onClick={() => addToCart(product)}
                disabled={cart.some(item => item.id === product.id)}
              >
                {cart.some(item => item.id === product.id) ? 'In Cart' : 'Add to Cart'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductListing 