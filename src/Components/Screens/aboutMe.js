// About Me Page

import { Typography } from '@mui/material'

import data from '../../Data/AboutMe.json';

function AboutMe() {
    const fileReader = new FileReader();

    return (
        <Typography>{data.body}</Typography>
    );
}

export default AboutMe;
