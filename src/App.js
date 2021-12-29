import './App.css';
import { React } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { GlobalStoreContextProvider } from './Store';
import { Theme } from './Common/Colors';
import { Layout } from './Components/index.js';

function App() {
  return (
    <BrowserRouter>
      <GlobalStoreContextProvider>
        <ThemeProvider theme={Theme}>
          <Layout />
        </ThemeProvider>
      </GlobalStoreContextProvider>
    </BrowserRouter>
  )
}

export default App;
