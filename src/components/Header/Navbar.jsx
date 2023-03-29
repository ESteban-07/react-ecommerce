import { useProductsContext } from '@/hooks/useProductsContext';
import { useState } from 'react';

function Navbar() {
  const categories = [
    { id: 0, name: 'All' },
    { id: 1, name: 'Clothes' },
    { id: 2, name: 'Electronics' },
    { id: 3, name: 'Furniture' },
    { id: 4, name: 'Shoes' },
    { id: 5, name: 'Others' },
  ];

  const { products, setFilteredProducts } = useProductsContext();

  const [activeBtn, setActiveBtn] = useState(0);

  return (
    <nav className="tablet:hidden">
      <ul className="flex gap-4">
        {categories.map((category, idx) => {
          return (
            <button
              key={idx}
              className={
                'p-2 border-solid border rounded-lg hover:border-[#acd9b2] hover:text-[#acd9b2] ' +
                (category.id === activeBtn
                  ? 'border-[#acd9b2] text-[#acd9b2]'
                  : 'border-white ')
              }
              onClick={async () => {
                setActiveBtn(idx);
                category.name !== 'All'
                  ? setFilteredProducts(() => {
                      return products.filter(
                        (product) => product.category.id === category.id
                      );
                    })
                  : setFilteredProducts(products);
              }}>
              {category.name}
            </button>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
