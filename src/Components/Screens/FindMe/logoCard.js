// LogoCard component
import { Grid, Typography } from '@mui/material';
import { useState } from 'react';

import './FindMe.css'

function LogoCard(props) {
    const { name, image, link } = props;

    const handler = function (event) {
        event.preventDefault();
        window.open(link);
    }

    const [isHovering, setIsHovering] = useState(false);

    const logoCardImageClasses = `logo-card ${(isHovering) ? "logo-card-rotate" : ""}`;

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <div className={logoCardImageClasses}>
                    <img
                        className="logo-card-image"
                        src={image}
                        alt={"loading " + name + " logo..."}
                    />
                </div>
            </Grid>
            <Grid item xs={12}>
                <div className="logo-card">
                    <div onClick={handler} className="logo-card-button"
                        onMouseLeave={() => { setIsHovering(false) }}
                        onMouseEnter={() => { setIsHovering(true) }}
                    >
                        <Typography>
                            {name}
                        </Typography>
                    </div>
                </div>
            </Grid>
        </Grid>
    );
}

export default LogoCard
