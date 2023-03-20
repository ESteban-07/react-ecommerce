import AddToCartBtn from './AddToCartBtn';

function ProductCard({ product }) {
  return (
    <div className="product-item" id={product.id}>
      <img
        src={product.images[0]}
        alt={product.description}
        style={{ width: '360px', height: '360px' }}
      />
      <div>
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
