import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const customTheme = {
  fonts: {
      body: 'Macondo',
      heading: 'Fascinate Inline',
      mono: 'Times New Roman, sans-serif', }
  }

const theme = extendTheme(customTheme)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

