import { useState, useEffect, createContext } from 'react';
import * as API from '../API/fetchData';

const ProductsContext = createContext();

function ProductsContextProvider(props) {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

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
      }}>
      {props.children}
    </ProductsContext.Provider>
  );
}

export { ProductsContextProvider, ProductsContext };
