import { Oval } from 'react-loading-icons';
import { useTheme } from '@mui/material/styles';

export default function LoadingIcon() {
    const theme = useTheme();

    return (
        <Oval
            stroke={theme.palette.gold.main}
            fill={theme.palette.purple.main}
            width={100}
            height={100}
            speed={1}
        />
    );
}