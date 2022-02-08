// About Me Page

import { useEffect, useState } from 'react'
import { Typography, Grid } from '@mui/material'
import data from '../../../Data/AboutMe.json';
import './aboutMe.css';

function AboutMe() {

    const [body, setBody] = useState("");

    // Getting the text from the txt file
    useEffect(() => {
        fetch(data.body)
            .then(r => r.text())
            .then(textString => {
                ;
                setBody(textString);
            });
    }, [ /* Component Did Mount */]);

    return (
        <Grid container sx={{ height: "100%", width: "100%" }} spacing={6}>
            <Grid item xs={3}>
                <div className="AM-imageWrap">
                    <img
                        id="about-me-image"
                        src={data.image}
                        alt="loading..."
                    />
                </div>
            </Grid>
            <Grid item xs={9}>
                <Typography sx={{ whiteSpace: "pre-wrap" }}>{body}</Typography>
            </Grid>
        </Grid >
    );
}

export default AboutMe;
