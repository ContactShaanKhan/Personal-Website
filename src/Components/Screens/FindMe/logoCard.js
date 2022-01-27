// LogoCard component
import { Grid } from '@mui/material';

import './FindMe.css'

function LogoCard(props) 
{
    const { name, image, link} = props;
    
    const handler = function(event) {
        event.preventDefault();
        window.open(link);
    }

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <div className="logo-card">
                    <img 
                        className="logo-card-image"
                        src={image} 
                        alt={"loading " + name + " logo..."}
                    />
                </div>
            </Grid>
            <Grid item xs={12}>
                <div className="logo-card">
                    <div onClick={handler} className="logo-card-button">
                        {name}
                    </div>
                </div>
            </Grid>
        </Grid>
    );
}

export default LogoCard
