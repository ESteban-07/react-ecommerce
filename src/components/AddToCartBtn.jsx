import AddToCartImg from '../assets/icons/bt_add_to_cart.svg';

function AddToCartBtn({ handleClick }) {
  return (
    <button onClick={handleClick}>
      <img src={AddToCartImg} alt="" />
    </button>
  );
}

export default AddToCartBtn;
