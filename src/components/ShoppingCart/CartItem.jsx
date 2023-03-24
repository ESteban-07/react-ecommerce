import { useProductsContext } from 'hooks/useProductsContext';
import RemoveItemFromCartIcon from 'icons/icon_close.png';

function CartItem({ item }) {
  const { currency, toggleItemFromCart } = useProductsContext();

  return (
    <div id="cart-item" className="flex justify-between items-center p-4">
      <figure className="flex items-center gap-4">
        <img
          className="w-[70px] h-[70px] rounded-[10px] object-cover"
          src={item.images[0]}
          alt={`Image of ${item.title}`}
        />
        <figcaption>{item.title}</figcaption>
      </figure>
      <div className="flex gap-2">
        <p>{currency.format(item.price)}</p>
        <button
          className="border border-solid border-slate-600 px-2 py-2 bg-transparent rounded"
          onClick={() => toggleItemFromCart(item)}>
          <img
            src={RemoveItemFromCartIcon}
            alt={`Remove ${item.title} from cart`}
          />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
