import './App.css';
import { React } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider} from '@mui/material/styles';
import { GlobalStoreContextProvider } from './Store';
import { Theme } from './Common/colors';
import {
  home,
} from './Components/index.js';

function App() {
  return (
    <BrowserRouter>
          <GlobalStoreContextProvider>              
              <ThemeProvider theme={Theme}>
                <Switch>
                    <Route path="/" exact component={home} />
                </Switch>
              </ThemeProvider>
          </GlobalStoreContextProvider>
    </BrowserRouter>
  )
}

export default App;
