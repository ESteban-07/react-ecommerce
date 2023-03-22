import { useState, useEffect, createContext } from 'react';
import * as API from '../API/fetchData';

const ProductsContext = createContext();

function ProductsContextProvider(props) {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    API.getProducts().then((data) => setProducts(data));
  }, []);

  const currency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const totalPayment = cartProducts
    .map((item) => item.price)
    .reduce((acc, curr) => {
      return (acc += curr);
    }, 0);

  const addItemToCart = (product) => {
    setCartProducts((prevProducts) => {
      return isCurrentItemInCart(product)
        ? prevProducts.filter((item) => item.id !== product.id)
        : [...prevProducts, product];
    });
  };

  const removeItemFromCart = (product) => {
    setCartProducts((shoppingCartProducts) =>
      shoppingCartProducts.filter((item) => item.id !== product.id)
    );
  };

  const isCurrentItemInCart = (product) => {
    return cartProducts.find((item) => item.id === product.id);
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        cartProducts,
        setCartProducts,
        currency,
        totalPayment,
        addItemToCart,
        removeItemFromCart,
        isCurrentItemInCart,
      }}>
      {props.children}
    </ProductsContext.Provider>
  );
}

export { ProductsContextProvider, ProductsContext };
