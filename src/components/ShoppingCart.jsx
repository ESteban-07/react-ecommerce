import { useEffect } from 'react';
import { useProductsContext } from '../hooks/useProductsContext';

function ShoppingCart() {
  const { cartProducts, currency } = useProductsContext();

  const totalPayment = cartProducts
    .map((item) => item.price)
    .reduce((acc, curr) => {
      return (acc += curr);
    }, 0);

  useEffect(() => {
    console.log(totalPayment);
  }, [cartProducts]);

  return (
    <div>
      <h1>Shopping Cart Products ({cartProducts.length}) 🛒</h1>
      <ul>
        {cartProducts.map((item, idx) => {
          return (
            <li key={idx}>
              {item.title} - {currency.format(item.price)}
            </li>
          );
        })}
      </ul>
      <p>Total: {currency.format(totalPayment)}</p>
    </div>
  );
}

export default ShoppingCart;
