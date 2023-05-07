import { useProductsContext } from '@/hooks/useProductsContext';
import IconClose from 'icons/icon_close.png';

export default function MovileNavbar({ toggleView }) {
  const categories = [
    { id: 0, name: 'All' },
    { id: 1, name: 'Clothes' },
    { id: 2, name: 'Electronics' },
    { id: 3, name: 'Furniture' },
    { id: 4, name: 'Shoes' },
    { id: 5, name: 'Others' },
  ];

  const { products, setFilteredProducts } = useProductsContext();

  return (
    <section className="absolute inset-0 z-30 w-screen h-screen bg-white">
      <nav className="flex flex-col w-full h-screen justify-between p-6">
        <h2 className="uppercase font-extrabold">categories</h2>

        <ul className="flex flex-col gap-4 capitalize font-bold">
          {categories.map((category) => {
            return (
              <li
                key={category.id}
                className="cursor-pointer"
                onClick={() => {
                  toggleView();
                  category.name !== 'All'
                    ? setFilteredProducts(() => {
                        return products.filter(
                          (product) => product.category.id === category.id
                        );
                      })
                    : setFilteredProducts(products);
                }}>
                {category.name}
              </li>
            );
          })}
        </ul>

        <hr />

        <div className="flex flex-col gap-4 font-bold">
          <a href="#">My orders</a>
          <a href="#">My account</a>
        </div>

        <div className="flex flex-col gap-1">
          <a href="#" className="text-sm text-[#c7c7c7]">
            platzi@example.com
          </a>
          <a href="#" className="text-sm text-[#acd9b2] font-semibold">
            Sign out
          </a>
        </div>
      </nav>
      <div className="absolute top-6 right-5 w-6 aspect-square flex justify-center items-center">
        <img
          src={IconClose}
          alt="Close Menu"
          className="cursor-pointer"
          onClick={toggleView}
        />
      </div>
    </section>
  );
}
