import { Route, Switch } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import { GlobalStoreContext } from '../../Store'
import { useMediaQuery } from 'react-responsive';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { RouteType } from '../../Common/Types';
import {
    TabBar,
    Banner,
    Home,
    Resume,
    FindMe,
    Shadow,
    Interests
} from '../index';
import './screens.css';

function Layout() {
    const { store } = useContext(GlobalStoreContext);

    const isDesktopOrLaptop = useMediaQuery({ query: store.desktopMinWidthQuery });

    const [slideState, setSlideState] = useState("");

    useEffect(function () {
        setSlideState((prev) => {
            if (prev === 'slide-in') {
                return 'slide-out'
            }

            return '';
        });
    }, [isDesktopOrLaptop]);

    const handleOpen = function () {
        setSlideState(prev => (prev !== 'slide-in') ? 'slide-in' : prev);
    }

    const handleBodyClick = function () {
        setSlideState((prev) => {
            if (prev === 'slide-in') {
                return 'slide-out'
            }

            return '';
        });
    }

    const CloseButton = (
        <IconButton
            edge="start"
            aria-label="menu"
            sx={{ mr: 2, color: "white" }}
            onClick={handleBodyClick}
        >
            <CloseIcon />
        </IconButton>
    );

    let slideBarMobile = `sidebar-mobile-open ${slideState}`;


    const mobileView = (
        <div id="layout-mobile">
            <div className={slideBarMobile}>
                <div className='close-button' >
                    {CloseButton}
                </div>
                <TabBar BeforeHook={handleBodyClick} />
            </div>
            <div id='appbar'>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={() => { handleOpen() }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" component="div">
                            Shaan Khan
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
            <div id="mobile-banner" onClick={handleBodyClick}>
                <Banner />
                <div id="page-banner-break" />
            </div>
            <div onClick={handleBodyClick}>
                <Switch>
                    <Route path={RouteType.HOME} exact component={Home} />
                    <Route path={RouteType.RESUME} exact component={Resume} />
                    <Route path={RouteType.FINDME} exact component={FindMe} />
                    <Route path={RouteType.SHADOW} exact component={Shadow} />
                    <Route path={RouteType.INTERESTS} exact component={Interests} />
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
                <div id="banner-container">
                    <Banner />
                    <div id="page-banner-break" />
                </div>
                <div id="main-body-container">
                    <Switch>
                        <Route path={RouteType.HOME} exact component={Home} />
                        <Route path={RouteType.RESUME} exact component={Resume} />
                        <Route path={RouteType.FINDME} exact component={FindMe} />
                        <Route path={RouteType.SHADOW} exact component={Shadow} />
                        <Route path={RouteType.INTERESTS} exact component={Interests} />
                    </Switch>
                </div>
            </div>
        </div>
    );

    return (isDesktopOrLaptop) ? desktopView : mobileView;
}

export default Layout;
