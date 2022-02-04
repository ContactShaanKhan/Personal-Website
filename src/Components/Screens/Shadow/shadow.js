import { Box, ImageList, ImageListItem } from '@mui/material'; 

import itemData from '../../../Data/Shadow.json'

function Shadow(props) {
    return (
        <Box sx={{ width: "90%", height: "100%", padding:"5%", overflowY: 'hidden' }}>
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
        </Box>
        );
}

export default Shadow;
