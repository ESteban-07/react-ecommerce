import { useProductsContext } from "../hooks/useProductsContext";

function ShoppingCart() {
  const { cartProducts } = useProductsContext();

  return (
    <div>
      <h1>Shopping Cart Products ({cartProducts.length}) 🛒</h1>
      <ul>
        {cartProducts.map((item, idx) => {
          return <li key={idx}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default ShoppingCart;
