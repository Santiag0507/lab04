import { useContext } from 'react'
import {CartContext} from './CarContext'

export function useFilters () {
  const {filters, setFilters} = useContext(CartContext)

  // Aquí va el filtrado de los productos por categoría y precio, luego se devuelven los nuevos datos

//   const filterProducts = (products) => {
//     return products.filter(product => {
//       return (
//         product.price >= filters.minPrice &&
//           (
//             filters.category === 'all' ||
//             filters.category === product.category
//           )
//       )
//     })
//   }

const marca= filters.marca
console.log("Custom", marca)
//   return { filters, filterProducts, setFilters }
  return { filters, setFilters , marca}
}
