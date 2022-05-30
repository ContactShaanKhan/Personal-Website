import { Colors } from '../../Common/Colors';
import { styled } from '@mui/material/styles';
import {
    TextField
} from '@mui/material';

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: Colors.caret,
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: Colors.caret,
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: Colors.caret,
        },
        '&:hover fieldset': {
            borderColor: Colors.cyan,
        },
        '&:hover': {
            backgroundColor: 'white',
        },
        '&.Mui-focused fieldset': {
            borderColor: Colors.caret,
        },
    },
});

export default function smallTextField(props) {

    const { fieldName, helperText, onChange, sx, defaultValue, type, isForm } = props;

    return (
        <CssTextField
            label={fieldName}
            helperText={helperText}
            onChange={onChange}
            defaultValue={defaultValue}
            sx={sx}
            type={type!=null?type:"text"}
            multiline={Boolean(isForm)}
            minRows={(isForm)? 8 : 1}
            maxRows={(isForm)? 8 : 1}
        ></CssTextField>
    );
}