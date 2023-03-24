import { useProductsContext } from 'hooks/useProductsContext';
import ProductCard from 'components/ProductCard/ProductCard';

function MainGrid() {
  const { products } = useProductsContext();

  return (
    <div className="grid grid-cols-fit-60 place-content-center gap-7 my-7">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default MainGrid;
