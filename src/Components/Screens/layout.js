import { Route, Switch } from 'react-router-dom';
import { RouteType } from '../../Common/Types';
import {
    AppBar,
    Banner,
    Home,
    AboutMe,
    FindMe,
    Shadow,
} from '../index';
import './screens.css';

function Layout() {
    return (
        <div id="layout">
            {/* The Sidebar Appbar */}
            <div id='sidebar'>
                <AppBar />
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
}

export default Layout;
