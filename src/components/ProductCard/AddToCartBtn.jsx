import { useProductsContext } from 'hooks/useProductsContext';
import AddToCartIcon from 'icons/bt_add_to_cart.svg';
import AddedToCartIcon from 'icons/bt_added_to_cart.svg';

function AddToCartBtn({ handleClick, product }) {
  const { isCurrentItemInCart } = useProductsContext();

  return (
    <button onClick={handleClick}>
      <img
        src={isCurrentItemInCart(product) ? AddedToCartIcon : AddToCartIcon}
        alt={`Add ${product.title} to cart`}
      />
    </button>
  );
}

export default AddToCartBtn;
