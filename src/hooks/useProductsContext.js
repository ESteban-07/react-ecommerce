import { useContext } from 'react';
import { ProductsContext } from 'context/ProductsContext';

export function useProductsContext() {
  return useContext(ProductsContext);
}
