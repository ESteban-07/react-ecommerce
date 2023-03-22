import { useProductsContext } from '../hooks/useProductsContext';
import RemoveItemFromCartIcon from '../assets/icons/icon_close.png';

function ScreenShoppingCart() {
  const { currency, cartProducts, totalPayment, toggleItemFromCart } =
    useProductsContext();

  return (
    <aside className="absolute top-[70px] right-0 bg-white shadow-md w-[360px] h-[550px] mobile:w-screen">
      <div className="w-full h-[inherit] flex flex-col justify-between ">
        <h1>Shopping Cart Products ({cartProducts.length}) 🛒</h1>

        <div
          id="cart-items"
          className="flex flex-col min-h-[335px] max-h-[500px] overflow-y-scroll scrollbar-hide">
          {cartProducts.map((item, idx) => {
            return (
              <div
                id="cart-item"
                className="flex justify-between items-center p-4"
                key={idx}>
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
          })}
        </div>

        <div id="total-payment" className="flex flex-col">
          <div className="flex justify-between">
            <p>Total</p>
            <p className="font-bold">{currency.format(totalPayment)}</p>
          </div>
          {/* <button>Checkout</button> */}
        </div>
      </div>
    </aside>
  );
}

export default ScreenShoppingCart;
