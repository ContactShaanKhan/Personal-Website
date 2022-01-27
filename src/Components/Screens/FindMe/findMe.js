// Find Me Screen
import { LogoCard } from '../../index'
import { Grid } from '@mui/material';

import githubLogo from '../../../Images/Logos/github.png'
import linkedinLogo from '../../../Images/Logos/linkedin.png'
import soLogo from '../../../Images/Logos/so.jpeg'
import twitterLogo from '../../../Images/Logos/twitter.png'

function FindMe() {
    return (
        <Grid container spacing={3}>
            <Grid item xs={3}>
                <LogoCard name={"Linked In"} image={linkedinLogo} link={"https://www.linkedin.com/in/shaan-khan-823a771b8/"} />
            </Grid>
            <Grid item xs={3}>
                <LogoCard name={"GitHub"} image={githubLogo} link={"https://github.com/ContactShaanKhan"} />
            </Grid>
            <Grid item xs={3}>
                <LogoCard name={"Twitter"} image={twitterLogo} link={"https://twitter.com/ctshaankhan"} />
            </Grid>
            <Grid item xs={3}>
                <LogoCard name={"Stack Overflow"} image={soLogo} link={"https://stackoverflow.com/users/13132133/shaan-k"} />
            </Grid>
        </Grid>
    );
}

export default FindMe;