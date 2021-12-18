import { useContext, useState } from 'react'
import { AppBar, Box, Toolbar, Tab, Tabs, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import PropTypes from 'prop-types';

import { GlobalStoreContext } from '../../Store'
import { TabType } from '../../Common/Types';

const node = (
    <Typography textColor="plain" >
        Home
    </Typography>
);


// App bar component
function Appbar() {
    const { store } = useContext(GlobalStoreContext);
    const theme = useTheme();

    const [value, setValue] = useState(TabType.HOME);

    const handleChange = (event, newValue) => {
        setValue(newValue);

        // Set Tab Globally - if there is a change
        if(newValue !== store.currTab)
            store.setTab(newValue);
    };
    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="backgroundDark" >
                <Toolbar>                    
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            textColor="secondary"
                            indicatorColor="secondary"
                            aria-label="app-tabs"
                        >
                            <Tab value={TabType.HOME} label={node} />
                            <Tab value={TabType.ABOUTME} label="About Me" />
                        </Tabs>
                    </Box>
                </Toolbar>
            </AppBar>
      </Box>
    );
}

export default Appbar;
