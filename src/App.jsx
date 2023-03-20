import { useState, useEffect } from 'react';
import * as API from './API/fetchData';
import ProductCard from './components/ProductCard';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <>
      <div className="grid grid-cols-fit-60 place-content-center gap-7">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default App;
