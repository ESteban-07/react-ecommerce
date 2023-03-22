import { useState, useEffect, createContext } from 'react';
import * as API from '../API/fetchData';

const ProductsContext = createContext();

function ProductsContextProvider(props) {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  const currency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  useEffect(() => {
    API.getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        cartProducts,
        setCartProducts,
        currency
      }}>
      {props.children}
    </ProductsContext.Provider>
  );
}

export { ProductsContextProvider, ProductsContext };
