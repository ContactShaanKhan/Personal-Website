import { useEffect, useState, useContext } from 'react'
import { useMediaQuery } from 'react-responsive';
import { Typography, Grid, Box } from '@mui/material'
import { GlobalStoreContext } from '../../../Store'
import { Document, Page } from 'react-pdf';
import ResumeData from '../../../Data/Resume.json'

import 'react-pdf/dist/umd/Page/AnnotationLayer.css';
import './resume.css'


const options = {
    workerSrc: "/pdf.worker.js",
};

function Resume() {
    const { store } = useContext(GlobalStoreContext);

    let scale = 0.7;
    if (useMediaQuery({ query: store.makeMediaQuery(565) }))
        scale = 0.9;
    if (useMediaQuery({ query: store.makeMediaQuery(700) }))
        scale = 1.1;
    if (useMediaQuery({ query: store.makeMediaQuery(1220) }))
        scale = 1.5;
    if (useMediaQuery({ query: store.makeMediaQuery(1700) }))
        scale = 2;

    return (
        // <div className="Resume__container">
        <Box sx={{
            width: "100%",
            height: "100%",
        }}>
            <Document
                file={ResumeData.ResumeLink}
                options={options}
                onClick={() => { window.open("https://shaankhan.me/Data/Resume/ShaanKhanResume.pdf") }}
            >
                <Page pageNumber={1} scale={scale} />
            </Document>
        </Box>
    );
}

export default Resume;
