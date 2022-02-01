import './App.css';
import { React } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { GlobalStoreContextProvider } from './Store';
import { Theme } from './Common/Colors';
import { Layout } from './Components/index.js';

function App() {
  return (
    <GlobalStoreContextProvider>
      <ThemeProvider theme={Theme}>
        <Layout />
      </ThemeProvider>
    </GlobalStoreContextProvider>
  )
}

export default App;
