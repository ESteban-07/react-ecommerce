import MainGrid from 'components/ProductsGrid/MainGrid';
import Header from 'components/Header/Header';
import ScreenProductDetails from 'screens/ScreenProductDetails';
import { useProductsContext } from 'hooks/useProductsContext';

function App() {
  const { isOpened } = useProductsContext();

  return (
    <>
      <Header />
      <MainGrid />
      {isOpened && <ScreenProductDetails />}
    </>
  );
}

export default App;
