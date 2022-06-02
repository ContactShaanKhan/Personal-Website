import { Grid, Typography } from '@mui/material';
import { useMediaQuery } from 'react-responsive';
import { useTheme } from '@mui/material/styles';
import SmallTextField from '../../Misc/smallTextField';
import SubmitButton from '../../Misc/submitButton';
import { useState, useContext } from 'react';
import { GlobalStoreContext } from '../../../Store';

function ContactForm(props) {
    const { store } = useContext(GlobalStoreContext);
    const theme = useTheme();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const style = {
        position: 'relative',
        top: '55%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'white',
        border: '5px solid ' + theme.palette.lime.main,
        borderRadius: "10px",
        boxShadow: 24,
        p: 4
    };

    const handleNameChange = function (event) {
        setFormData(oldFormData => {
            return {
                ...oldFormData,
                name: event.target.value
            };
        });
    }

    const handleEmailChange = function (event) {
        setFormData(oldFormData => {
            return {
                ...oldFormData,
                email: event.target.value
            };
        });
    }

    const handleMessageChange = function (event) {
        setFormData(oldFormData => {
            return {
                ...oldFormData,
                message: event.target.value
            };
        });
    }

    const onSubmit = function () {
        store.submitContactForm(formData.name, formData.email, formData.message);
    }

    const remainingCharacters = 500 - formData.message.trim().length;
    const characterMessage = remainingCharacters >= 0 ?
        `${remainingCharacters} character(s) remaining.` :
        `Please remove ${remainingCharacters * -1} character(s).`

    return (
        <Grid container spacing={2} sx={style}>
            <Grid item xs={12} sx={{
                textAlign: "center",
                color: "black"
            }}>
                <Typography id="modal-title" variant="h4">
                    Contact Form
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <SmallTextField
                    fieldName={"Full Name"}
                    helperText={"Please enter your full name."}
                    onChange={handleNameChange}
                    sx={{
                        width: "100%"
                    }}
                />
            </Grid>
            <Grid item xs={12}>
                <SmallTextField
                    fieldName={"Email"}
                    helperText={"Please enter your email, you will receive a copy of the message sent."}
                    onChange={handleEmailChange}
                    sx={{
                        width: "100%"
                    }}
                />
            </Grid>
            <Grid item xs={12}>
                <SmallTextField
                    fieldName={"Message"}
                    helperText={`Please enter your message. ${characterMessage}`}
                    isForm
                    onChange={handleMessageChange}
                    sx={{
                        width: "100%"
                    }}
                />
            </Grid>
            <Grid item xs={12} sx={{
                textAlign: "center"
            }}>
                <SubmitButton
                    onClick={onSubmit}
                    sx={{
                        width: "100%"
                    }}
                    text={"SEND"}
                />
            </Grid>
        </Grid>
    );
}

export default ContactForm;