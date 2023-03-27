import { useProductsContext } from 'hooks/useProductsContext';

function ImageCarousel({ images }) {
  const { slideSelection, setSlideSelection } = useProductsContext();

  return (
    <div
      id="image-carousel"
      className="relative w-[360px] h-[360px] mobile-m:w-screen">
      <div id="slides-container" className="w-full h-full overflow-hidden">
        {images.map((image, idx) => {
          return (
            <div
              key={idx}
              id="slide"
              className={`w-full h-full ${
                idx === slideSelection ? '--slide-selected' : 'hidden'
              }`}>
              <img
                className="mx-w-full aspect-square mobile-m:h-full object-cover"
                src={image}
                alt="Product image"
              />
            </div>
          );
        })}
      </div>
      <div
        id="slides-nav"
        className="absolute w-full flex justify-center gap-2 mt-2">
        {images.map((item, idx) => {
          return (
            <span
              key={idx}
              className={`slide-btn ${
                idx === slideSelection ? '--btn-selected' : ''
              }`}
              onClick={() => setSlideSelection(idx)}></span>
          );
        })}
      </div>
    </div>
  );
}

export default ImageCarousel;
