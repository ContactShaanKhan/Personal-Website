import { useContext, useState } from 'react'
import { AppBar, Box, Toolbar, Tab, Tabs, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

import { GlobalStoreContext } from '../../Store'
import { TabType } from '../../Common/Types';
import { Colors } from '../../Common/Colors'

const StyledTabs = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
        width: '80%',
        backgroundColor: Colors.blue,
    },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(1),
        color: 'rgba(255, 255, 255, 0.7)',
        '&.Mui-selected': {
            color: Colors.blue,
        },
    }),
);

// App bar component
function Appbar() {
    const { store } = useContext(GlobalStoreContext);

    // Stylized Title Text
    const node = function (title) {
        return (
            <Typography textColor="plain" >
                {title}
            </Typography>
        );
    };

    const [value, setValue] = useState(TabType.HOME);

    const handleChange = (event, newValue) => {
        setValue(newValue);

        // Set Tab Globally - if there is a change
        if (newValue !== store.currTab)
            store.setTab(newValue);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="backgroundDark" >
                <Toolbar>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
                        <StyledTabs
                            value={value}
                            onChange={handleChange}
                            aria-label="styled tabs"
                        >
                            <StyledTab label={node("Home")} value={TabType.HOME} />
                            <StyledTab label={node("About Me")} value={TabType.ABOUTME} />
                        </StyledTabs>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Appbar;
