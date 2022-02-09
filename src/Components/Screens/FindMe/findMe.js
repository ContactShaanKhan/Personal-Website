// Find Me Screen
import { LogoCard } from '../../index'
import { Grid } from '@mui/material';
import { useMediaQuery } from 'react-responsive';
import data from '../../../Data/FindMe.json';

function FindMe() {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });
    
    const cols = (isDesktopOrLaptop)? 3 : 6;

    return (
        <Grid container spacing={3}>
            {
                data.body.map((item, index) => (
                    <Grid item xs={cols} key={index}>
                        <LogoCard name={item.name} image={item.image} link={item.link} />
                    </Grid>
                ))
            }
        </Grid>
    );
}

export default FindMe;