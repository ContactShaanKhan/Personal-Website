// Find Me Screen
import { LogoCard } from '../../index'
import { Grid } from '@mui/material';

import data from '../../../Data/FindMe.json';

function FindMe() {
    return (
        <Grid container spacing={3}>
            {
                data.map((item, index) => (
                    <Grid item xs={3} key={index}>
                        <LogoCard name={item.name} image={item.image} link={item.link} />
                    </Grid>
                ))
            }
        </Grid>
    );
}

export default FindMe;