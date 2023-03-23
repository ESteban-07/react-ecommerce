import EmptyCartIcon from '../../assets/icons/icon_shopping_cart.svg';

function EmptyCartImage() {
  return (
    <img
      className="w-[80%] aspect-[1] self-center color-hospital-green"
      src={EmptyCartIcon}
      alt="Cart is empty"
    />
  );
}

export default EmptyCartImage;
