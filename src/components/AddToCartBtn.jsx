import { useState } from 'react';
import AddToCartIcon from '../assets/icons/bt_add_to_cart.svg';
import AddedToCartIcon from '../assets/icons/bt_added_to_cart.svg';

function AddToCartBtn({ handleClick, productTitle }) {
  const [productState, setProductState] = useState(false);

  return (
    <button
      onClick={() => {
        handleClick();
        setProductState((current) => !current);
      }}>
      <img
        src={productState ? AddedToCartIcon : AddToCartIcon}
        alt={`Add ${productTitle} to cart`}
      />
    </button>
  );
}

export default AddToCartBtn;
