import { useProductsContext } from '../hooks/useProductsContext';
import RemoveItemFromCartIcon from '../assets/icons/icon_close.png';
import EmptyCartIcon from '../assets/icons/icon_shopping_cart.svg';
import PrimaryButton from '../components/PrimaryButton';

function ScreenShoppingCart() {
  const { currency, cartProducts, totalPayment, toggleItemFromCart } =
    useProductsContext();

  return (
    <aside className="grid mobile-l:justify-center absolute top-[70px] right-0 bg-white shadow-md w-[360px] min-h-[550px]  mobile-l:w-screen">
      <div className="flex flex-col justify-between w-[360px] h-[550px] mobile-m:w-screen mobile-l:min-h-[calc(100vh-68px)]">
        <div className="p-4 mobile-l:hidden">
          <h1 className="font-bold text-[18px]">Shopping Cart</h1>
        </div>

        <div
          id="cart-items"
          className="flex flex-col min-h-[335px] max-h-[500px] overflow-y-scroll scrollbar-hide">
          {cartProducts.length === 0 ? (
            <img
              className="w-[80%] aspect-[1] self-center color-hospital-green"
              src={EmptyCartIcon}
              alt="Cart is empty"
            />
          ) : (
            cartProducts.map((item, idx) => {
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
            })
          )}
        </div>

        <div id="total-payment" className="flex flex-col p-4 gap-4">
          <div id="total" className="flex justify-between">
            <p>Total</p>
            <p className="font-bold">{currency.format(totalPayment)}</p>
          </div>
          <PrimaryButton title="checkout" />
        </div>
      </div>
    </aside>
  );
}

export default ScreenShoppingCart;
