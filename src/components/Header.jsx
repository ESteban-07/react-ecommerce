import { useProductsContext } from '../hooks/useProductsContext';
import ShoppingCartNotification from './ShoppingCartNotification';

function Header() {
  const { cartCounterValue } = useProductsContext();

  return (
    <header>
      <div className="logos"></div>
      <div className="links">
        <nav>
          <ul>
            <li>Clothes</li>
            <li>Electronics</li>
            <li>Furniture</li>
            <li>Toys</li>
            <li>Others</li>
          </ul>
        </nav>
      </div>
      <div className="views">
        <ShoppingCartNotification />
      </div>
    </header>
  );
}

export default Header;
