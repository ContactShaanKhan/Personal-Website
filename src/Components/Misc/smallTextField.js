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
        '&.Mui-focused fieldset': {
            borderColor: Colors.caret,
        },
    },
});

export default function smallTextField(props) {

    const { fieldName, helperText, onChange, sx, value, type, isForm, disabled } = props;

    return (
        <CssTextField
            disabled={Boolean(disabled)}
            label={fieldName}
            helperText={helperText}
            onChange={onChange}
            value={value ?? ""}
            sx={sx}
            type={type != null ? type : "text"}
            multiline={Boolean(isForm)}
            minRows={(isForm) ? 8 : 1}
            maxRows={(isForm) ? 8 : 1}
        ></CssTextField>
    );
}