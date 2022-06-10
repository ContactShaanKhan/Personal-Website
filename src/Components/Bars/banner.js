// Find Me Screen
import { useContext } from 'react'
import { TabType } from '../../Common/Types';
import { GlobalStoreContext } from '../../Store';

import dataHome from '../../Data/Home.json';
import dataFindMe from '../../Data/FindMe.json';
import dataResume from '../../Data/Resume.json';
import dataShadow from '../../Data/Shadow.json';
import dataInterests from '../../Data/Interests.json';

import './bars.css'
import { Box, Typography } from '@mui/material';

function Banner() {
    // The image is retrieved from the global state
    const { store } = useContext(GlobalStoreContext);

    // Get the appropriate css class for the banner styling

    let bannerImage;
    let bannerClass;
    let bannerText = store.currTab;

    switch (store.currTab) {
        default:
        case TabType.HOME:
            bannerImage = dataHome.banner;
            bannerClass = "pbt-home";
            bannerText = "Hi! I'm Shaan Khan."
            break;

        case TabType.RESUME:
            bannerImage = dataResume.banner;
            bannerClass = "pbt-resume";
            break

        case TabType.FINDME:
            bannerImage = dataFindMe.banner;
            bannerClass = "pbt-find-me";
            break;

        case TabType.SHADOW:
            bannerImage = dataShadow.banner;
            bannerClass = "pbt-shadow"
            break;

        case TabType.INTERESTS:
            bannerImage = dataInterests.banner;
            bannerClass = "pbt-interests"
            break;
    }

    // Find all the styling in bars.css

    return (
        <Typography variant='h2' >
            <div style={{
                width: "100%",
                height: "25vh",
                backgroundImage: `url(${bannerImage})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}>

                <div id="page-banner-text" className={bannerClass} >
                    {bannerText}
                </div>

            </div>
        </Typography>
    );
}

export default Banner;