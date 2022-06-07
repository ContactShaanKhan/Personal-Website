import { useContext } from 'react'
import { ImageList, ImageListItem, Typography } from '@mui/material';
import { useMediaQuery } from 'react-responsive'
import { GlobalStoreContext } from '../../../Store'
import itemData from '../../../Data/Shadow.json'

function Shadow() {
    const { store } = useContext(GlobalStoreContext);

    const isDesktopOrLaptop = useMediaQuery({ query: store.makeMediaQuery(1224) });


    // Reduce the number of columns if on the mobile view
    const numCols = (isDesktopOrLaptop) ? 4 : 2;

    return (
        <div style={{ width: "100%" }}>
            <ImageList variant="masonry" cols={numCols} gap={8}>
                {itemData.images.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}`}
                            srcSet={`${item.img}`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
            <hr />
            <div style={{
                textAlign: "center",
                marginTop: "50px",
                marginBottom: "50px"
            }}>
                <Typography color={"white"} variant="h4">{`Other Cute Animals 🙂`}</Typography>
            </div>
            <ImageList variant="masonry" cols={numCols} gap={8}>
                {itemData.otherImages.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}`}
                            srcSet={`${item.img}`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    );
}

export default Shadow;
