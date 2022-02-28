import { Route, Switch } from 'react-router-dom';
import { useState, useContext } from 'react';
import { GlobalStoreContext } from '../../Store'
import { useMediaQuery } from 'react-responsive';
import { AppBar, Toolbar, IconButton, Typography, Collapse } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { RouteType } from '../../Common/Types';
import {
    TabBar,
    Banner,
    Home,
    AboutMe,
    FindMe,
    Shadow,
} from '../index';
import './screens.css';

function Layout() {
    const { store } = useContext(GlobalStoreContext);

    const isDesktopOrLaptop = useMediaQuery({ query: store.desktopMinWidthQuery });

    // When checked is true the sidebar is open
    const [checked, setChecked] = useState(false);

    const handleOpen = function (e) {
        setChecked((prev) => !prev);
    }

    const mobileView = (
        <div id="layout-mobile">
            <div id='appbar'>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={handleOpen}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" component="div">
                            Shaan Khan
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
            <div className={(checked) ? 'sidebar-mobile-open' : 'sidebar-mobile-closed'}>
                <Collapse in={checked} orientation="horizontal">
                    <TabBar />
                </Collapse>
            </div>
            <div className={(checked) ? "closed-body-mobile" : "open-body-mobile"}>
                <Switch>
                    <Route path={RouteType.HOME} exact component={Home} />
                    <Route path={RouteType.ABOUTME} exact component={AboutMe} />
                    <Route path={RouteType.FINDME} exact component={FindMe} />
                    <Route path={RouteType.SHADOW} exact component={Shadow} />
                </Switch>
            </div>
        </div >
    );

    // Code for when in desktop view

    const desktopView = (
        <div id="layout">
            {/* The Sidebar Appbar */}
            <div id='sidebar'>
                <TabBar />
            </div>
            {/* The Main Component Being Displayed */}
            <div id='main-body'>
                <Banner />
                <div id="main-body-container">
                <Switch>
                    <Route path={RouteType.HOME} exact component={Home} />
                    <Route path={RouteType.ABOUTME} exact component={AboutMe} />
                    <Route path={RouteType.FINDME} exact component={FindMe} />
                    <Route path={RouteType.SHADOW} exact component={Shadow} />
                </Switch>
                </div>
            </div>
        </div>
    );

    return (isDesktopOrLaptop) ? desktopView : mobileView;
}

export default Layout;
