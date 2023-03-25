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
    <aside className="absolute flex flex-col w-[360px] h-[calc(100vh-68px)] top-[68px] right-0 z-10 bg-white shadow-md mobile-l:w-full mobile-l:h-auto mobile-l:items-center">
      <button
        onClick={() => {
          setIsOpened(false);
          setCurrentItem({});
        }}
        id="product-details-close"
        className="absolute top-3 left-3 z-[8] w-[40px] aspect-square rounded-full bg-white p-3 flex justify-center items-center shadow-lg">
        <img src={IconClose} alt="Close product details" />
      </button>
      <ImageCarousel images={product.images} />
      <div
        id="item-details"
        className="flex flex-col p-5 flex-grow-[1] mobile-l:w-full mobile-l:grow-0 mobile-m:w-screen">
        <div className="flex flex-col h-full justify-between mobile:h-auto mobile-l:gap-2">
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
