import { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext';
import ProductCard from './ProductCard';

function MainGrid() {
  const { products } = useContext(ProductsContext);

  return (
    <div className="grid grid-cols-fit-60 place-content-center gap-7">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default MainGrid;
