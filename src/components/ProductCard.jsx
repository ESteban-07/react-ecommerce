import AddToCartBtn from './AddToCartBtn';
import { useRef } from 'react';
import { useProductsContext } from '../hooks/useProductsContext';

function ProductCard({ product }) {
  const { setCartProducts } = useProductsContext();
  const cardRef = useRef();

  return (
    <div className="w-60" id={product.id} ref={cardRef}>
      <figure className="rounded-xl overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={product.images[0]}
          alt={product.description}
        />
      </figure>
      <div className="flex justify-between">
        <div>
          <p>{product.price}</p>
          <p>{product.title}</p>
        </div>
        <AddToCartBtn
          handleClick={() => {
            // toggle styles to current card
            // cardRef.current.classList.toggle('product-added');

            setCartProducts((prevProducts) => {
              const isProductAlreadyInCart = prevProducts.find(
                (item) => item.id === product.id
              );

              return isProductAlreadyInCart
                ? prevProducts.filter((item) => item.id !== product.id)
                : [...prevProducts, product];
            });
          }}
          productTitle={product.title}
        />
      </div>
    </div>
  );
}

export default ProductCard;
