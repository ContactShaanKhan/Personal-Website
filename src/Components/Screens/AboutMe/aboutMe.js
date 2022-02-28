// About Me Page

import { useEffect, useState, useContext } from 'react'
import { useMediaQuery } from 'react-responsive';
import { Typography, Grid, Box } from '@mui/material'
import data from '../../../Data/AboutMe.json';
import { GlobalStoreContext } from '../../../Store'
import './aboutMe.css';
import { display } from '@mui/system';

function AboutMe() {
    const { store } = useContext(GlobalStoreContext);

    const changeFormat = useMediaQuery({ query: store.makeMediaQuery(1224) });
    const mainCols = (changeFormat) ? 10 : 12;

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

    const formattedText = (
        <Typography
            sx={{
                whiteSpace: "pre-wrap",
                lineHeight: 2,
                fontSize: "20px",
            }}
        >
            {body}
        </Typography>
    );

    return (
        <Grid container
            sx={{
                height: "100%",
                width: "100%",
                paddingLeft: "30px"
            }}
            spacing={6}
        >
            <Grid item xs={mainCols}>
                <Box sx={{
                    position: "relative",
                    overflow: "hidden",
                    margin: 0,
                    float: "left",
                    width: (changeFormat) ? "425px" : "100%",
                    paddingRight: "50px",
                    paddingBottom: "20px",
                    display:"flex",
                    justifyContent: "center",

                }}>
                    <Box
                        sx={{
                            width: "425px",
                        }}
                    >
                        <img
                            id="about-me-image"
                            src={data.image}
                            alt="loading..."
                            width="425px"
                        />
                    </Box>
                </Box>
                {(changeFormat) ? formattedText : ""}
            </Grid>
            <Grid item xs={12}>
                {(!changeFormat) ? formattedText : ""}
            </Grid>
        </Grid >
    );
}

export default AboutMe;
