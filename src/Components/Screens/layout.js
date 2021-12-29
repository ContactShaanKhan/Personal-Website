import { Route, Switch } from 'react-router-dom';
import { Grid } from '@mui/material';
import { RouteType } from '../../Common/Types';
import {
    AppBar,
    Home,
    AboutMe,
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
                <Switch>
                    <Route path={RouteType.HOME} exact component={Home} />
                    <Route path={RouteType.ABOUTME} exact component={AboutMe} />
                </Switch>
            </Grid>
        </Grid>
    );
}

export default Layout;
