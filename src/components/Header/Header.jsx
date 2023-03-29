import ShoppingCartNotification from 'components/ShoppingCart/ShoppingCartNotification';
import YardSaleLogo from 'logos/logo_yard_sale.svg';
import BurguerMenuIcon from 'icons/icon_menu.svg';
import Navbar from './Navbar';

function Header() {
  return (
    <header className="relative flex justify-between items-center w-full p-4 shadow-sm">
      <div className="hidden tablet:block">
        <img src={BurguerMenuIcon} alt="Burguer Menu Icon" />
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
