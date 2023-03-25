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
    <aside className="absolute flex flex-col w-[360px] h-[calc(100vh-68px)] top-[68px] right-0 z-10 bg-white shadow-md">
      <button
        onClick={() => {
          setIsOpened(false);
          setCurrentItem({});
        }}
        id="product-details-close"
        className="absolute top-3 left-3 z-[8] w-[40px] aspect-square rounded-full bg-white p-3 flex justify-center items-center">
        <img src={IconClose} alt="Close product details" />
      </button>
      <ImageCarousel images={product.images} />
      <div id="item-details" className="flex flex-col p-5 flex-grow-[1]">
        <div className="flex flex-col h-full justify-between">
          <div>
            <p className="font-extrabold">{currency.format(product.price)}</p>
            <p className="text-[14px]">{product.title}</p>
            <p className="text-[13px]">{product.description}</p>
          </div>
          <div>
            <AddToCartBtn
              handleClick={() => {
                toggleItemFromCart(product);
              }}
              product={product}
            />
          </div>
        </div>
      </div>
    </aside>
  );
}

export default ScreenProductDetails;
