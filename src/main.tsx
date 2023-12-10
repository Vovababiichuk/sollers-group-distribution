import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ScrollToTopOnReload } from './components/ScrollToTopOnReload/ScrollToTopOnReload.tsx';
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <ScrollToTopOnReload />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
