import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (plant) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === plant.id)
      if (existingItem) {
        return prevCart
      }
      return [...prevCart, { ...plant, quantity: 1 }]
    })
  }

  const removeFromCart = (plantId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== plantId))
  }

  const updateQuantity = (plantId, newQuantity) => {
    if (newQuantity < 1) return
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === plantId ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  const getTotalCost = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      getTotalItems,
      getTotalCost
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
} 