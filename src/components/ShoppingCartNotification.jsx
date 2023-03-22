import ShoppingCartIcon from '../assets/icons/icon_shopping_cart_notification.svg';
import { useProductsContext } from '../hooks/useProductsContext';

function ShoppingCartNotification() {
  const { cartCounterValue } = useProductsContext();

  return (
    <div className="relative w-10">
      <span className="absolute top-[5.5px] right-[5px] text-[12px] leading-[0] font-bold">
        {cartCounterValue}
      </span>
      <img
        className="w-full h-full object-cover"
        src={ShoppingCartIcon}
        alt="Shopping cart notifications"
      />
    </div>
  );
}

export default ShoppingCartNotification;
