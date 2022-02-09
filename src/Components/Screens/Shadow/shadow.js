import { ImageList, ImageListItem } from '@mui/material';
import { useMediaQuery } from 'react-responsive'
import itemData from '../../../Data/Shadow.json'

function Shadow() {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });

    // Reduce the number of columns if on the mobile view
    const numCols = (isDesktopOrLaptop) ? 3 : 2;

    return (
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
    );
}

export default Shadow;
