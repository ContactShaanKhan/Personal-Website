// About Me Page

import { useEffect, useState } from 'react'

import { Typography } from '@mui/material'

import data from '../../Data/AboutMe.json';

function AboutMe() {
    
    const [body, setBody] = useState("");
    
    // Getting the text from the txt file
    useEffect(() => {
        fetch(data.body)
        .then(r => r.text())
        .then(text => {
            setBody(text);
        });
    }, [ /* Component Did Mount */ ]);

    return (
        <Typography>{body}</Typography>
    );
}

export default AboutMe;
