import { useProductsContext } from 'hooks/useProductsContext';
import AddToCartBtn from './AddToCartBtn';

function ProductCard({ product }) {
  const { currency, toggleItemFromCart, setCurrentItem, setIsOpened } =
    useProductsContext();

  return (
    <div className="w-60" id={product.id}>
      <figure
        className="rounded-xl overflow-hidden"
        onClick={() => {
          setIsOpened(true);
          setCurrentItem(product);
        }}>
        <img
          className="w-full h-full object-cover"
          src={product.images[0]}
          alt={product.description}
        />
      </figure>
      <div className="flex justify-between">
        <div>
          <p>{currency.format(product.price)}</p>
          <p>{product.title}</p>
        </div>
        <AddToCartBtn
          handleClick={() => {
            toggleItemFromCart(product);
          }}
          product={product}
        />
      </div>
    </div>
  );
}

export default ProductCard;
