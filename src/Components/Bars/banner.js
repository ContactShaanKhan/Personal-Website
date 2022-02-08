// Find Me Screen
import { useContext } from 'react'
import { TabType } from '../../Common/Types';
import { GlobalStoreContext } from '../../Store';

import dataHome from '../../Data/Home.json';
import dataFindMe from '../../Data/FindMe.json';
import dataAboutMe from '../../Data/AboutMe.json';
import dataShadow from '../../Data/Shadow.json'

import './bars.css'

function Banner() {
    // The image is retrieved from the global state
    const { store } = useContext(GlobalStoreContext);

    // Get the appropriate css class for the banner styling

    let bannerImage;
    let bannerClass;

    switch (store.currTab) {
        default:
        case TabType.HOME:
            bannerImage = dataHome.banner;
            bannerClass = "pbt-home";
            break;

        case TabType.ABOUTME:
            bannerImage = dataAboutMe.banner;
            bannerClass = "pbt-about-me";
            break;

        case TabType.FINDME:
            bannerImage = dataFindMe.banner;
            bannerClass = "pbt-find-me";
            break;

        case TabType.SHADOW:
            bannerImage = dataShadow.banner;
            bannerClass = "pbt-shadow"
            break;
    }

    // Find all the styling in bars.css

    return (
        <div id="page-banner" >
            <img
                id="page-banner-image"
                src={bannerImage}
                alt=""
                loading='lazy'
            />
            <div id="page-banner-text" className={bannerClass} >
                {store.currTab}
            </div>
            <div id="page-banner-break" />
        </div>
    );
}

export default Banner;