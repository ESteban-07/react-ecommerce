import { useProductsContext } from 'hooks/useProductsContext';
import ImageCarousel from 'components/ImageCarousel/ImageCarousel';
import AddToCartBtn from 'components/ProductDetails/AddToCartBtn';
import IconClose from 'icons/icon_close.png';

function ScreenProductDetails() {
  const {
    currentItem: product,
    currency,
    toggleItemFromCart,
    setCurrentItem,
    setIsOpened,
  } = useProductsContext();

  return (
    <aside className="absolute flex flex-col justify-between w-[360px] h-[calc(100vh-68px)] top-[68px] right-0 z-10 bg-green-600">
      <button
        onClick={() => {
          setIsOpened(false);
          setCurrentItem({});
        }}
        id="product-details-close"
        className="absolute top-3 left-3 w-[40px] aspect-square rounded-full bg-white p-3 flex justify-center items-center">
        <img src={IconClose} alt="Close product details" />
      </button>
      <ImageCarousel images={product.images} />
      <div id="item-details" className="mt-8 mx-6 mb-6">
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
