import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import '../styles/ProductListing.css'

// Import product images
import monsteraImg from '/src/assets/images/monstera.jpg'
import snakePlantImg from '/src/assets/images/snake-plant.jpg'
import pothosImg from '/src/assets/images/pothos.jpg'
import fiddleLeafImg from '/src/assets/images/fiddle-leaf.jpg'
import succulentImg from '/src/assets/images/succulent.jpg'

const products = [
  // Indoor Plants Category
  {
    id: 1,
    name: 'Monstera Deliciosa',
    price: 49.99,
    image: monsteraImg,
    category: 'Indoor Plants',
    description: 'A popular tropical plant known for its distinctive split leaves.'
  },
  {
    id: 2,
    name: 'Snake Plant',
    price: 39.99,
    image: snakePlantImg,
    category: 'Indoor Plants',
    description: 'A hardy plant that can survive in low light conditions.'
  },
  {
    id: 3,
    name: 'Golden Pothos',
    price: 29.99,
    image: pothosImg,
    category: 'Indoor Plants',
    description: 'A trailing plant with heart-shaped leaves.'
  },
  {
    id: 4,
    name: 'Fiddle Leaf Fig',
    price: 79.99,
    image: fiddleLeafImg,
    category: 'Indoor Plants',
    description: 'A statement plant with large, glossy leaves.'
  },
  {
    id: 5,
    name: 'ZZ Plant',
    price: 44.99,
    image: monsteraImg, // Using existing image temporarily
    category: 'Indoor Plants',
    description: 'A low-maintenance plant with glossy leaves.'
  },
  {
    id: 6,
    name: 'Peace Lily',
    price: 34.99,
    image: snakePlantImg, // Using existing image temporarily
    category: 'Indoor Plants',
    description: 'An elegant plant that helps purify indoor air.'
  },
  // Succulents Category
  {
    id: 7,
    name: 'Succulent Collection',
    price: 34.99,
    image: succulentImg,
    category: 'Succulents',
    description: 'A set of 3 different drought-resistant succulents.'
  },
  {
    id: 8,
    name: 'Echeveria',
    price: 19.99,
    image: succulentImg,
    category: 'Succulents',
    description: 'A rosette-forming succulent with beautiful colors.'
  },
  {
    id: 9,
    name: 'Aloe Vera',
    price: 24.99,
    image: succulentImg,
    category: 'Succulents',
    description: 'A medicinal succulent with healing properties.'
  },
  {
    id: 10,
    name: 'Jade Plant',
    price: 29.99,
    image: succulentImg,
    category: 'Succulents',
    description: 'A popular succulent known for its tree-like appearance.'
  },
  {
    id: 11,
    name: 'Haworthia',
    price: 22.99,
    image: succulentImg,
    category: 'Succulents',
    description: 'A small succulent with distinctive striped leaves.'
  },
  {
    id: 12,
    name: 'Sedum',
    price: 18.99,
    image: succulentImg,
    category: 'Succulents',
    description: 'A versatile succulent perfect for ground cover.'
  },
  // Outdoor Plants Category
  {
    id: 13,
    name: 'Lavender',
    price: 29.99,
    image: monsteraImg, // Using existing image temporarily
    category: 'Outdoor Plants',
    description: 'A fragrant herb perfect for gardens.'
  },
  {
    id: 14,
    name: 'Hydrangea',
    price: 39.99,
    image: snakePlantImg, // Using existing image temporarily
    category: 'Outdoor Plants',
    description: 'A beautiful flowering shrub with large blooms.'
  },
  {
    id: 15,
    name: 'Rose Bush',
    price: 44.99,
    image: pothosImg, // Using existing image temporarily
    category: 'Outdoor Plants',
    description: 'A classic garden favorite with fragrant flowers.'
  },
  {
    id: 16,
    name: 'Japanese Maple',
    price: 89.99,
    image: fiddleLeafImg, // Using existing image temporarily
    category: 'Outdoor Plants',
    description: 'An ornamental tree with stunning foliage.'
  },
  {
    id: 17,
    name: 'Boxwood',
    price: 34.99,
    image: monsteraImg, // Using existing image temporarily
    category: 'Outdoor Plants',
    description: 'A versatile evergreen shrub for hedges.'
  },
  {
    id: 18,
    name: 'Hostas',
    price: 24.99,
    image: snakePlantImg, // Using existing image temporarily
    category: 'Outdoor Plants',
    description: 'Shade-loving plants with beautiful foliage.'
  }
]

const ProductListing = () => {
  const { addToCart, cart } = useCart()
  const [loadedImages, setLoadedImages] = useState({})

  const handleImageLoad = (id) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }))
  }

  // Group products by category
  const productsByCategory = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = []
    }
    acc[product.category].push(product)
    return acc
  }, {})

  return (
    <div className="products-page container">
      <h1>Our Plants</h1>
      
      {Object.entries(productsByCategory).map(([category, categoryProducts]) => (
        <div key={category} className="category-section">
          <h2 className="category-title">{category}</h2>
          <div className="products-grid">
            {categoryProducts.map((product) => (
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
      ))}
    </div>
  )
}

export default ProductListing 