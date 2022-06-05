// Find Me Screen
import { LogoCard } from '../../index'
import { Grid } from '@mui/material';
import { useMediaQuery } from 'react-responsive';
import data from '../../../Data/FindMe.json';
import ContactForm from './contactForm';
import ContactFormOverlay from './contactFormOverlay';
import { GlobalStoreContext } from '../../../Store';
import { useContext } from 'react';

function FindMe() {
    const { store } = useContext(GlobalStoreContext);

    const isDesktopOrLaptop = useMediaQuery({ query: store.makeMediaQuery(1575) });
    const shouldStack = !useMediaQuery({ query: store.makeMediaQuery(1350) });

    let cols = (isDesktopOrLaptop) ? 4 : 6;
    let iconsWidth = (isDesktopOrLaptop) ? 6 : 5;

    if (shouldStack) {
        iconsWidth = 12;
        cols = 3;
    }


    return (
        <Grid container spacing={(shouldStack) ? 8 : 0}>
            <Grid item xs={iconsWidth}>
                <Grid container spacing={3}>
                    {
                        data.body.map((item, index) => (
                            <Grid item xs={cols} key={index}>
                                <LogoCard name={item.name} image={item.image} link={item.link} />
                            </Grid>
                        ))
                    }
                </Grid>
            </Grid>
            <Grid item xs={(12 - iconsWidth > 0) ? 12 - iconsWidth : 12} sx={{
                // marginTop: "40px"
            }}>
                <ContactForm />
                {store.loading ? <ContactFormOverlay /> : ""}
            </Grid>
        </Grid >
    );
}

export default FindMe;