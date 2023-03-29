import { useState, useEffect, createContext, useRef } from 'react';
import * as API from 'API/fetchData';
import { useBoolean } from 'hooks/useBoolean';

const ProductsContext = createContext();

function ProductsContextProvider(props) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState(
    JSON.parse(localStorage.getItem('cartProducts')) || []
  );

  // states for product details
  const [currentItem, setCurrentItem] = useState({});
  const [slideSelection, setSlideSelection] = useState(0);
  const [screenDetailsHeight, setScreenDetailsHeight] = useState(0);

  // toggle state for ScreenProductDetails
  const [
    isProductDetailsOpen,
    {
      toggle: toggleProductDetails,
      on: openProductDetails,
      off: closeProductDetails,
    },
  ] = useBoolean();

  // toggle state for ScreenShoppingCart
  const [isCartOpen, { toggle: toggleCart }] = useBoolean();

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
    if (isProductDetailsOpen) {
      setScreenDetailsHeight(ScreenProductDetailsRef.current.clientHeight);
    }
  });

  useEffect(() => {
    API.getProducts().then((data) => {
      setProducts(data);
      // initialize filtered products with full stock
      setFilteredProducts(data);
    });
  }, []);

  // implement localStorage for cartProducts
  useEffect(() => {
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
  }, [cartProducts]);

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
    return cartProducts.some((item) => item.id === product.id);
  };

  const cartCounterValue = cartProducts.length;

  const smoothScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        filteredProducts,
        setFilteredProducts,
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
        isCartOpen,
        toggleCart,
        isProductDetailsOpen,
        toggleProductDetails,
        openProductDetails,
        closeProductDetails,
        slideSelection,
        setSlideSelection,
        ScreenProductDetailsRef,
        screenDetailsHeight,
        matches,
        smoothScrollToTop,
      }}>
      {props.children}
    </ProductsContext.Provider>
  );
}

export { ProductsContextProvider, ProductsContext };
