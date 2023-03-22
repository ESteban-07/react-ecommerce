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

  const removeItemFromCart = (product) =>
    cartProducts.filter((item) => item.id !== product.id);

  const addItemToCart = (list, product) => [...list, product];

  // add or remove item from shopping cart
  const toggleItemFromCart = (product) => {
    setCartProducts(
      isCurrentItemInCart(product)
        ? removeItemFromCart(product)
        : addItemToCart(cartProducts, product)
    );
  };

  // checks if current item is already added in cart
  // returns true or false
  const isCurrentItemInCart = (product) => {
    return cartProducts.includes(product);
  };

  const cartCounterValue = cartProducts.length;

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        cartProducts,
        setCartProducts,
        currency,
        totalPayment,
        isCurrentItemInCart,
        toggleItemFromCart,
        cartCounterValue,
      }}>
      {props.children}
    </ProductsContext.Provider>
  );
}

export { ProductsContextProvider, ProductsContext };
