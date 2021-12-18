import './App.css';
import { React } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider} from '@mui/material/styles';
import { GlobalStoreContextProvider } from './Store';
import { Theme } from './Common/Colors';
import { RouteType } from './Common/Types';
import {
  AppBar,
  Home,
  AboutMe,
} from './Components/index.js';

function App() {
  return (
    <BrowserRouter>
          <GlobalStoreContextProvider>              
              <ThemeProvider theme={Theme}>
                <AppBar />
                <Switch>
                    <Route path={RouteType.HOME} exact component={Home} />
                    <Route path={RouteType.ABOUTME} exact component={AboutMe} />
                </Switch>
              </ThemeProvider>
          </GlobalStoreContextProvider>
    </BrowserRouter>
  )
}

export default App;
