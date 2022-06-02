import {
    Button,
    Typography,
    Modal,
    Grid,
} from '@mui/material';

import { GlobalStoreContext } from '../../Store';
import { useContext } from 'react';
import { useTheme } from '@mui/material/styles'

/**
 *  Global Modal - we hook into the global state to see what it shows
 */
function GlobalModal() {
    const { store } = useContext(GlobalStoreContext);
    const theme = useTheme();

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: "rgba(255, 255, 255, 0.9)",
        border: '5px solid ' + theme.palette.lime.main,
        borderRadius: "10px",
        p: 4,
    };

    if (!store.modal)
        return (<div></div>);

    const onClose = function () {
        store.closeModal(false);
    }

    const onAction = function () {
        if (store.modal.hook)
            store.modal.hook();
        store.closeModal(true);
    }

    const isError = Boolean(store.modal.title.toLowerCase().includes("error"));
    const isSuccess = Boolean(store.modal.title.toLowerCase().includes("success"));

    const titleColor = (isError) ? theme.palette.pink.main :
        (isSuccess) ? theme.palette.lime.main :
            theme.palette.backgroundDark.main;

    return (
        <Modal
            open={Boolean(store.modal)}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Grid container spacing={2} sx={style}>
                <Grid item xs={12} sx={{
                    textAlign: "center",
                    color: titleColor
                }}>
                    <Typography id="modal-title" variant="h3" component="h2">
                        {store.modal.title}
                    </Typography>
                </Grid>
                <Grid item xs={12} sx={{
                    textAlign: "center"
                }}>
                    <Typography id="modal-description" sx={{
                        mt: 2,
                        color: theme.palette.background.main
                    }}>
                        {store.modal.body}
                    </Typography>
                </Grid>
                <Grid item xs={12} />
                <Grid item xs={1} />
                <Grid item xs={4}>
                    <Button variant="contained" onClick={onClose} >Close</Button>
                </Grid>
                <Grid item xs={3} />
                <Grid item xs={4}>
                    {
                        (store.modal.action) ?
                            <Button
                                variant="contained"
                                onClick={onAction}
                                sx={{
                                    bgcolor: theme.palette.caret.main,
                                }}
                            >
                                {store.modal.action}</Button> : ""
                    }
                </Grid>
                <Grid item xs={1} />
            </Grid>
        </Modal >
    );
}

export default GlobalModal;