import MainGrid from 'components/ProductsGrid/MainGrid';
import Header from 'components/Header/Header';
import ScreenProductDetails from 'screens/ScreenProductDetails';
import { useProductsContext } from 'hooks/useProductsContext';

function App() {
  const { isProductDetailsOpen } = useProductsContext();

  return (
    <>
      <Header />
      <MainGrid />
      {isProductDetailsOpen && <ScreenProductDetails />}
    </>
  );
}

export default App;
