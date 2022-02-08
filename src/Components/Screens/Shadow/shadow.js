import { ImageList, ImageListItem } from '@mui/material';

import itemData from '../../../Data/Shadow.json'

function Shadow(props) {
    return (
        <ImageList variant="masonry" cols={3} gap={8}>
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
