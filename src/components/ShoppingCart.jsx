import { useProductsContext } from '../hooks/useProductsContext';
import RemoveItemFromCartIcon from '../assets/icons/icon_close.png';

function ShoppingCart() {
  const { currency, cartProducts, totalPayment, toggleItemFromCart } =
    useProductsContext();

  return (
    <div>
      <h1>Shopping Cart Products ({cartProducts.length}) 🛒</h1>
      <ul>
        {cartProducts.map((item, idx) => {
          return (
            <li key={idx}>
              <span>
                {item.title} - {currency.format(item.price)}
              </span>
              <button
                className="border border-solid border-slate-600 px-2 py-2 mx-2 bg-transparent rounded"
                onClick={() => toggleItemFromCart(item)}>
                <img
                  src={RemoveItemFromCartIcon}
                  alt={`Remove ${item.title} from cart`}
                />
              </button>
            </li>
          );
        })}
      </ul>
      <p>Total: {currency.format(totalPayment)}</p>
    </div>
  );
}

export default ShoppingCart;
