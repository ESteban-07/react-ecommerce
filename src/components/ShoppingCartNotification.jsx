import { useState } from 'react';
import { useProductsContext } from '../hooks/useProductsContext';
import ScreenShoppingCart from '../screens/ScreenShoppingCart';
import ShoppingCartIcon from '../assets/icons/icon_shopping_cart_notification.svg';

function ShoppingCartNotification() {
  const { cartCounterValue, cartIconRef } = useProductsContext();
  const [display, setDisplay] = useState(false);

  return (
    <>
      <div
        ref={cartIconRef}
        className="relative w-10 cursor-pointer"
        onClick={() => setDisplay((current) => !current)}>
        <span className="absolute top-[5.5px] right-[5px] text-[12px] leading-[0] font-bold">
          {cartCounterValue}
        </span>
        <img
          className="w-full h-full object-cover"
          src={ShoppingCartIcon}
          alt="Shopping cart notifications"
        />
      </div>
      {display && <ScreenShoppingCart />}
    </>
  );
}

export default ShoppingCartNotification;
