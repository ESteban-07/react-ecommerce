import { useProductsContext } from '@/hooks/useProductsContext';
import PrimaryButton from '@/components/PrimaryButton';
import CartItems from '@/components/ShoppingCart/CartItemsList';

function ScreenShoppingCart() {
  const { currency, totalPayment } = useProductsContext();

  return (
    <aside className="grid mobile-l:justify-center absolute top-[70px] right-0 bg-white shadow-md w-[360px] min-h-[550px]  mobile-l:w-screen">
      <div className="flex flex-col justify-between w-[360px] h-[550px] mobile-m:w-screen mobile-l:min-h-[calc(100vh-68px)]">
        <div className="p-4 mobile-l:hidden">
          <h1 className="font-bold text-[18px]">Shopping Cart</h1>
        </div>

        <CartItems />

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
