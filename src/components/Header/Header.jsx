import ShoppingCartNotification from 'components/ShoppingCart/ShoppingCartNotification';
import YardSaleLogo from 'logos/logo_yard_sale.svg';
import BurguerMenuIcon from 'icons/icon_menu.svg';
import Navbar from './Navbar';
import MovileNavbar from './MobileNavbar';
import { useEffect, useState } from 'react';
import { useProductsContext } from '@/hooks/useProductsContext';

function Header() {
  const { isCartOpen } = useProductsContext();
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    display || isCartOpen
      ? document.body.classList.add('mobile-l:overflow-hidden')
      : document.body.classList.remove('mobile-l:overflow-hidden');
  }, [display, isCartOpen]);

  const toggleView = () => {
    setDisplay((current) => !current);
  };

  return (
    <header className="relative flex justify-between items-center w-full p-4 shadow-sm">
      <div className="hidden tablet:block">
        <img
          onClick={toggleView}
          src={BurguerMenuIcon}
          alt="Burguer Menu Icon"
          className="cursor-pointer"
        />
        {display && <MovileNavbar toggleView={toggleView} />}
      </div>
      <div id="logo-links" className="flex justify-center items-center gap-4">
        <div>
          <img src={YardSaleLogo} alt="Yard sale logo" />
        </div>
        <Navbar />
      </div>
      <div id="views" className="flex justify-center items-center gap-4">
        <p className="tablet:hidden">platzi@example.com</p>
        <ShoppingCartNotification />
      </div>
    </header>
  );
}

export default Header;
