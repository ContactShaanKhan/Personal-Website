import { Grid, Typography, Menu, MenuItem } from '@mui/material';
import { useMediaQuery } from 'react-responsive';
import { useTheme } from '@mui/material/styles';
import SmallTextField from '../../Misc/smallTextField';
import SubmitButton from '../../Misc/submitButton';
import { useState, useContext } from 'react';
import { GlobalStoreContext } from '../../../Store';
import InfoIcon from '@mui/icons-material/Info';

const contactFormLink = "https://github.com/ContactShaanKhan/Contact-Me-Form";

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
        marginLeft: "calc(50% - 300px)",
        bgcolor: 'white',
        border: '5px solid ' + theme.palette.lime.main,
        borderRadius: "10px",
        boxShadow: 25,
        width: 600,
        height: 650,
        p: 4,
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
        store.submitContactForm(formData.name, formData.email, formData.message, (error) => {
            if (error) {
                return;
            }

            setFormData(() => ({
                name: "",
                email: "",
                message: "Thank you for reaching out to me!"
            }));
        });
    }

    const onMoreInfo = function () {
        window.open(contactFormLink);
        setAnchorEl(null);
    }

    const [anchorEl, setAnchorEl] = useState(null);

    const remainingCharacters = store.maxCharacters - formData.message.trim().length;
    const characterMessage = remainingCharacters >= 0 ?
        `${remainingCharacters} character(s) remaining.` :
        `Please remove ${remainingCharacters * -1} character(s).`;

    return (
        <Grid container spacing={2} sx={style}>
            <Grid item xs={12}>
                <div>
                    <InfoIcon
                        aria-controls="menu-contact-form"
                        aria-haspopup="true"
                        sx={{
                            cursor: "pointer"
                        }}
                        onClick={(event) => { setAnchorEl(event.currentTarget); }}
                    />
                    <Menu
                        id="menu-contact-form"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={() => { setAnchorEl(null); }}
                    >
                        <MenuItem onClick={onMoreInfo}>
                            Click to learn how this contact form works.
                        </MenuItem>
                    </Menu>
                </div>
                <div style={{
                    color: theme.palette.backgroundDark.main,
                    textAlign: "center",
                }}>
                    <Typography id="modal-title" variant="h4">
                        Contact Form
                    </Typography>
                </div>
            </Grid>
            <Grid item xs={12}>
                <SmallTextField
                    value={formData.name}
                    disabled={Boolean(store.loading)}
                    fieldName={(store.loading) ? "" : "Full Name"}
                    helperText={"Please enter your full name."}
                    onChange={handleNameChange}
                    sx={{
                        width: "100%"
                    }}
                />
            </Grid>
            <Grid item xs={12}>
                <SmallTextField
                    value={formData.email}
                    disabled={Boolean(store.loading)}
                    fieldName={(store.loading) ? "" : "Email"}
                    helperText={"Please enter your email, you will receive a copy of the message sent."}
                    onChange={handleEmailChange}
                    sx={{
                        width: "100%"
                    }}
                />
            </Grid>
            <Grid item xs={12}>
                <SmallTextField
                    value={formData.message}
                    disabled={Boolean(store.loading)}
                    fieldName={(store.loading) ? "" : "Message"}
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
                    disabled={Boolean(store.loading)}
                    onClick={onSubmit}
                    sx={{
                        width: "100%"
                    }}
                    text={(store.loading) ? "SENDING..." : "SEND"}
                />
            </Grid>
        </Grid>
    );
}

export default ContactForm;