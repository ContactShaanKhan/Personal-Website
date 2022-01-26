import { Route, Switch } from 'react-router-dom';
import { Grid } from '@mui/material';
import { RouteType } from '../../Common/Types';
import {
    AppBar,
    Banner,
    Home,
    AboutMe,
    FindMe,
} from '../index';

function Layout() {
    return (
        <Grid container sx={{ height: "100%", width: "100%" }} spacing={0}>
            {/* The Sidebar Appbar */}
            <Grid item xs={2} >
                <AppBar />
            </Grid>
            {/* The Main Component Being Displayed */}
            <Grid item xs={10} >
                <Banner />
                <Switch>
                    <Route path={RouteType.HOME} exact component={Home} />
                    <Route path={RouteType.ABOUTME} exact component={AboutMe} />
                    <Route path={RouteType.FINDME} exact component={FindMe} />
                </Switch>
            </Grid>
        </Grid>
    );
}

export default Layout;
