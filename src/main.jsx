import ReactDOM from 'react-dom/client';
import { ProductsContextProvider } from 'context/ProductsContext';
import './index.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ProductsContextProvider>
    <App />
  </ProductsContextProvider>
);
