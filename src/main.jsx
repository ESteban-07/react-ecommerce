import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ProductsContextProvider } from './context/ProductsContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ProductsContextProvider>
    <App />
  </ProductsContextProvider>
);
