function ImageCarousel({ images }) {
  return (
    <ul>
      {images.map((image, idx) => {
        return (
          <li key={idx}>
            <img
              className="w-20 aspect-square"
              src={image}
              alt="Product image"
            />
          </li>
        );
      })}
    </ul>
  );
}

export default ImageCarousel;
