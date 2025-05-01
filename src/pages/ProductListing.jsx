import { useState } from 'react'
import { useCart } from '../context/CartContext'

const PLANTS = {
  Succulents: [
    { id: 1, name: 'Echeveria', price: 12, image: '/src/assets/images/echeveria.jpg' },
    { id: 2, name: 'Jade Plant', price: 15, image: '/src/assets/images/jade.jpg' },
  ],
  Foliage: [
    { id: 3, name: 'Snake Plant', price: 25, image: '/src/assets/images/snake-plant.jpg' },
    { id: 4, name: 'Monstera', price: 35, image: '/src/assets/images/monstera.jpg' },
  ],
  'Air Plants': [
    { id: 5, name: 'Tillandsia', price: 8, image: '/src/assets/images/tillandsia.jpg' },
    { id: 6, name: 'Spanish Moss', price: 10, image: '/src/assets/images/spanish-moss.jpg' },
  ],
}

function ProductListing() {
  const { addToCart } = useCart()
  const [addedItems, setAddedItems] = useState(new Set())

  const handleAddToCart = (plant) => {
    addToCart(plant)
    setAddedItems(prev => new Set([...prev, plant.id]))
  }

  return (
    <div className="products-page container">
      <h1>Our Plants</h1>
      
      {Object.entries(PLANTS).map(([category, plants]) => (
        <div key={category} className="category">
          <h2>{category}</h2>
          <div className="products-grid">
            {plants.map(plant => (
              <div key={plant.id} className="product-card">
                <img 
                  src={plant.image} 
                  alt={plant.name}
                  className="product-image"
                />
                <div className="product-info">
                  <h3 className="product-name">{plant.name}</h3>
                  <p className="product-price">${plant.price}</p>
                  <button
                    onClick={() => handleAddToCart(plant)}
                    disabled={addedItems.has(plant.id)}
                    className="btn-add-to-cart"
                  >
                    {addedItems.has(plant.id) ? 'Added to Cart' : 'Add to Cart'}
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