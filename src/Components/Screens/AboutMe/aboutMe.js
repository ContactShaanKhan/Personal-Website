// About Me Page

import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import { Typography, Grid } from '@mui/material'
import data from '../../../Data/AboutMe.json';
import './aboutMe.css';

function AboutMe() {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });
    
    const imageCols = (isDesktopOrLaptop)? 3 : 12;
    const bodyCols = (isDesktopOrLaptop)? 7 : 12;

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
            <Grid item xs={imageCols}>
                <div className="AM-imageWrap">
                    <img
                        id="about-me-image"
                        src={data.image}
                        alt="loading..."
                    />
                </div>
            </Grid>
            <Grid item xs={bodyCols}>
                <Typography 
                    sx={{ 
                        whiteSpace: "pre-wrap", 
                        lineHeight: 2 ,
                        fontSize: "20px",
                    }}
                >
                    {body}
                </Typography>
            </Grid>
        </Grid >
    );
}

export default AboutMe;
