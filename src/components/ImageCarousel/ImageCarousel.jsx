import { useState } from 'react';

function ImageCarousel({ images }) {
  const [slideSelection, setSlideSelection] = useState(0);

  return (
    <div id="image-carousel" className="w-[360px] h-[360px]">
      <div id="slides-container" className="w-[360px] h-[360px]">
        {images.map((image, idx) => {
          return (
            <div
              key={idx}
              id="slide"
              className={`w-full h-full ${
                idx === slideSelection ? '--slide-selected' : 'hidden'
              }`}>
              <img
                className="mx-w-full aspect-square object-cover"
                src={image}
                alt="Product image"
              />
            </div>
          );
        })}
      </div>
      <div id="slides-nav" className="w-full flex justify-center gap-2 my-4">
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
