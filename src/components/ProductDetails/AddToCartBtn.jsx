import { useProductsContext } from 'hooks/useProductsContext';
import AddToCartIcon from 'icons/bt_add_to_cart.svg';
import AddedToCartIcon from 'icons/bt_added_to_cart.svg';

function AddToCartBtn({ handleClick, product }) {
  const { isCurrentItemInCart } = useProductsContext();

  return (
    <button
      onClick={handleClick}
      className={`flex justify-center items-center gap-[10px] w-full rounded-lg h-[50px] font-bold ${
        isCurrentItemInCart(product)
          ? '--added-to-cart-btn'
          : '--add-to-cart-btn'
      }`}>
      {isCurrentItemInCart(product) ? (
        <>
          <img src={AddedToCartIcon} alt={`${product.title} added to cart`} />{' '}
          <span>Added to cart</span>
        </>
      ) : (
        <>
          <img src={AddToCartIcon} alt={`Add ${product.title} to cart`} />
          <span>Add to cart</span>
        </>
      )}
    </button>
  );
}

export default AddToCartBtn;
