// Find Me Screen
import { useContext } from 'react'
import { TabType } from '../../Common/Types';
import { GlobalStoreContext } from '../../Store';

import ibmKebBanner from '../../Images/Banners/ibmKebBanner.png';
import czechBanner from '../../Images/Banners/czechBanner.jpeg';
import matrixBanner from '../../Images/Banners/matrixBanner.jpeg';

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
            bannerImage = ibmKebBanner;
            bannerClass = "pbt-find-me";
            break;

        default:
            break;
    }
    
    // Find all the styling in bars.css

    return (
        <div id="page-banner" >
            <img 
                id="page-banner-image"
                src={bannerImage} 
                alt="loading..." 
            />
            <div id="page-banner-text" className={bannerClass} >
                {store.currTab}
            </div>
            <div id="page-banner-break" />
        </div>
    );
}

export default Banner;