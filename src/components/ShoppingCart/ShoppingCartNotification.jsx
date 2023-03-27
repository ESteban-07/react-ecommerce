import { useEffect } from 'react';
import { useProductsContext } from 'hooks/useProductsContext';
import ScreenShoppingCart from 'screens/ScreenShoppingCart';
import ShoppingCartIcon from 'icons/icon_shopping_cart_notification.svg';
import { useBoolean } from 'hooks/useBoolean';

function ShoppingCartNotification() {
  const {
    cartCounterValue,
    cartIconRef,
    setCurrentItem,
    isCartOpen,
    toggleCart,
    closeProductDetails,
  } = useProductsContext();

  // ScreenShoppingCart fixed to viewport
  useEffect(() => {
    isCartOpen
      ? document.body.classList.add('mobile-l:overflow-hidden')
      : document.body.classList.remove('mobile-l:overflow-hidden');
  }, [isCartOpen]);

  return (
    <>
      <div
        ref={cartIconRef}
        className="relative w-10 cursor-pointer"
        onClick={() => {
          // close ScreenProductDetails and reset
          // currentItem to initial value
          closeProductDetails();
          setCurrentItem({});

          toggleCart();
        }}>
        <span className="absolute top-[5.5px] right-[5px] text-[12px] leading-[0] font-bold">
          {cartCounterValue}
        </span>
        <img
          className="w-full h-full object-cover"
          src={ShoppingCartIcon}
          alt="Shopping cart notifications"
        />
      </div>
      {isCartOpen && <ScreenShoppingCart />}
    </>
  );
}

export default ShoppingCartNotification;
