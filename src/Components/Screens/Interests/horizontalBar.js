import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';

export default function HorizontalBar(props) {
    const theme = useTheme();

    return (
        <div style={{
            width: "100%",
            height: "110px",
            backgroundColor: theme.palette.lime.main,
            color: "white",
            borderRadius: "10px"
        }}>
            <div style={{
                position: "relative",
                top: "50%",
                transform: "translate(0, -50%)",
                marginLeft: "50px"
            }}>
                <Typography variant="h3">
                    {props.children}
                </Typography>
            </div>
        </div>
    );
}