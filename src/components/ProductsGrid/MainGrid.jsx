import { useProductsContext } from 'hooks/useProductsContext';
import ProductCard from 'components/ProductCard/ProductCard';

function MainGrid() {
  const {
    screenDetailsHeight,
    matches,
    isProductDetailsOpen,
    filteredProducts,
  } = useProductsContext();

  return (
    <div
      className={`relative grid grid-cols-fit-60 place-content-center gap-7 my-7`}
      style={{
        top:
          isProductDetailsOpen && matches ? `${screenDetailsHeight}px` : '0px',
      }}>
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default MainGrid;
