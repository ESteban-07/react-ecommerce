import { useState, useEffect, createContext, useRef } from 'react';
import * as API from 'API/fetchData';

const ProductsContext = createContext();

function ProductsContextProvider(props) {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  // States for ProductDetails components
  const [currentItem, setCurrentItem] = useState({});
  const [isOpened, setIsOpened] = useState(false);
  const [slideSelection, setSlideSelection] = useState(0);
  const [screenDetailsHeight, setScreenDetailsHeight] = useState(0);

  // adapting ProductsGrid layout on mobile phones
  const mediaMatch = window.matchMedia('(max-width:600px)');

  const [matches, setMatches] = useState(mediaMatch.matches);

  mediaMatch.addEventListener('change', (e) => {
    setMatches(e.matches);
  });

  // referencing DOM elements
  const cartIconRef = useRef(null);
  const ScreenProductDetailsRef = useRef(null);

  useEffect(() => {
    if (isOpened) {
      setScreenDetailsHeight(ScreenProductDetailsRef.current.clientHeight);
    }
  });

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

  function alertNotification() {
    cartIconRef.current.classList.add('--alert-notification');

    setTimeout(() => {
      cartIconRef.current.classList.remove('--alert-notification');
    }, 500);
  }

  const removeItemFromCart = (product) =>
    cartProducts.filter((item) => item.id !== product.id);

  const addItemToCart = (list, product) => {
    alertNotification();
    return [...list, product];
  };

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
        cartIconRef,
        currentItem,
        setCurrentItem,
        isOpened,
        setIsOpened,
        slideSelection,
        setSlideSelection,
        ScreenProductDetailsRef,
        screenDetailsHeight,
        matches,
      }}>
      {props.children}
    </ProductsContext.Provider>
  );
}

export { ProductsContextProvider, ProductsContext };
