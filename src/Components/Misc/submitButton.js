import { Colors } from '../../Common/Colors';
import { styled } from '@mui/material/styles';
import {
    Button,
    Typography
} from '@mui/material';

const ColorButton = styled(Button)(({ theme }) => ({
    color: 'white',
    backgroundColor: Colors.caret,
    '&:hover': {
        backgroundColor: Colors.cyan,
    },
}));

export default function SubmitButton(props) {
    const { text, onClick, sx } = props;

    return (
        <ColorButton variant="contained" onClick={onClick} sx={sx}>
            <Typography>
                {text}
            </Typography>
        </ColorButton>
    );
}