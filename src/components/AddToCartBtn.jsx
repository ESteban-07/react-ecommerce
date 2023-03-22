import { useProductsContext } from '../hooks/useProductsContext';
import AddToCartIcon from '../assets/icons/bt_add_to_cart.svg';
import AddedToCartIcon from '../assets/icons/bt_added_to_cart.svg';

function AddToCartBtn({ handleClick, product }) {
  const { cartProducts } = useProductsContext();

  const isCurrentItemInCart = cartProducts.find(
    (item) => item.id === product.id
  );

  return (
    <button
      onClick={() => {
        handleClick();
      }}>
      <img
        src={isCurrentItemInCart ? AddedToCartIcon : AddToCartIcon}
        alt={`Add ${product.title} to cart`}
      />
    </button>
  );
}

export default AddToCartBtn;
