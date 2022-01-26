// Find Me Screen
import { useContext } from 'react'
import { Box } from "@mui/material";
import { TabType } from '../../Common/Types';
import { GlobalStoreContext } from '../../Store';

import ibmKebBanner from '../../Common/Images/ibmKebBanner.png';
import czechBanner from '../../Common/Images/czechBanner.jpeg';
import matrixBanner from '../../Common/Images/matrixBanner.jpeg';

import './bars.css'

function Banner() {
    // The image is retrieved from the global state
    const { store } = useContext(GlobalStoreContext);

    // Get the appropriate css class for the banner styling

    // Default: HOME
    let bannerImage = ibmKebBanner;
    let bannerClass = "pbt-home";

    switch (store.currTab) {
        case TabType.ABOUTME:
            bannerImage = czechBanner;
            bannerClass = "pbt-about-me";
            break;
    
        case TabType.FINDME:
            bannerImage = matrixBanner;
            bannerClass = "pbt-find-me";
            break;

        default:
            break;
    }
    
    return (
        <Box  
            sx ={{
                width: "100%",
                height: "25vh",
                position: "relative",
            }}
        >
            {/* Styles the banner in bars.css */}
            <img 
                id="page-banner"
                src={bannerImage} 
                alt="loading..." 
            />
            <div id="page-banner-text" className={bannerClass} >
                {store.currTab}
            </div>
        </Box>
    );
}

export default Banner;