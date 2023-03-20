import AddToCartBtn from './AddToCartBtn';

function ProductCard({ product }) {
  return (
    <div className="w-60" id={product.id}>
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
        <AddToCartBtn />
      </div>
    </div>
  );
}

export default ProductCard;
