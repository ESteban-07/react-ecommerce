import { useProductsContext } from 'hooks/useProductsContext';
import ImageCarousel from 'components/ImageCarousel/ImageCarousel';
import AddToCartBtn from 'components/ProductCard/AddToCartBtn';

function ScreenProductDetails() {
  const {
    currentItem: product,
    currency,
    toggleItemFromCart,
  } = useProductsContext();

  return (
    <aside className="absolute w-[360px] h-[calc(100vh-68px)] top-[68px] right-0 z-10 bg-green-600">
      <ImageCarousel images={product.images} />
      <div>
        <p>{currency.format(product.price)}</p>
        <p>{product.title}</p>
        <p>{product.description}</p>
        <AddToCartBtn
          handleClick={() => {
            toggleItemFromCart(product);
          }}
          product={product}
        />
      </div>
    </aside>
  );
}

export default ScreenProductDetails;
