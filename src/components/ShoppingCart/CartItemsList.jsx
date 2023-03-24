import { useProductsContext } from '@/hooks/useProductsContext';
import EmptyCartImage from './EmpetyCartImage';
import CartItem from './CartItem';

function CartItemsList() {
  const { cartProducts } = useProductsContext();

  return (
    <div
      id="cart-items"
      className="flex flex-col min-h-[335px] max-h-[500px] overflow-y-scroll scrollbar-hide">
      {cartProducts.length === 0 ? (
        <EmptyCartImage />
      ) : (
        cartProducts.map((item, idx) => {
          return <CartItem key={idx} item={item} />;
        })
      )}
    </div>
  );
}

export default CartItemsList;
