import { createContext, useState} from 'react'

// Creación del contexto
export const CartContext = createContext()

// Crear el provider
export function CartProvider ({ children }) {
    const [filters, setFilters] = useState({marca:''})
  
    return (
      <CartContext.Provider value={{
        filters, setFilters
      }}
      >
        {children}
      </CartContext.Provider>
    )
  }