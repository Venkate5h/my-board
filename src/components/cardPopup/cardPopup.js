import React, { Fragment, useState } from 'react';
import { Modal, Paper, withStyles, Typography, IconButton, Grid, InputLabel, TextField, Button } from '@material-ui/core';
import { Close } from '@material-ui/icons';

const styles = (theme) => ({
    cardPopupHolder: {
        top: "50%",
        left: "50%",
        position: "absolute",
        transform: "translate(-50%, -50%)",
        padding: "2%",
        paddingTop: "3%",
        width: "50%",
        [theme.breakpoints.down("sm")]: {
            width: "90%"
        },
        outline: "none",
        backgroundColor: "#f4f5f7"
    },
    closeIcon: {
        position: "absolute",
        top: 0,
        right: 0,
        margin: "0.5%"
    },
    saveButton: {
        color: "#fff",
        textTransform: "none",
        backgroundColor: "#5aac44",
        '&:hover': {
            backgroundColor: "#5aa000",
        }
    },
    descriptionCloseIcon: {
        cursor: "pointer"
    }
})

const CardPopup = (props) => {
    const { classes, ...other } = props;
    const { cardDetails, listDetails, closeCardPopup, open, updateCard } = other;
    const [cardTitle, setCardTitle] = useState(cardDetails.title);
    const [cardDescription, setCardDescription] = useState(cardDetails.description);
    const [editDescription, setEditDescription] = useState(false);

    return (
        <Fragment>
            <Modal open={open}>
                <Paper className={classes.cardPopupHolder}>
                    <IconButton
                        size="medium"
                        className={classes.closeIcon}
                        onClick={() => closeCardPopup()}>
                        <Close />
                    </IconButton>
                    <Grid container alignItems="center" spacing={1}>
                        <Grid item xs={12} md={12}>
                            <TextField
                                fullWidth
                                variant="outlined"
                                margin="dense"
                                value={cardTitle}
                                onChange={(event) => {
                                    setCardTitle(event.target.value)
                                }}
                                onBlur={() => {
                                    if (cardTitle) {
                                        cardDetails.title = cardTitle
                                        updateCard(cardDetails);
                                    }
                                    setCardTitle(cardDetails.title)
                                }}
                            />
                            <Typography>
                                in list {listDetails.listTitle}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <InputLabel>
                                <Typography onClick={() => setEditDescription(true)}>
                                    Description
                                </Typography>
                            </InputLabel>
                            {
                                editDescription ?
                                    <Grid container alignItems="center" spacing={1}>
                                        <Grid item xs={12} md={12}>
                                            <TextField
                                                autoFocus
                                                fullWidth
                                                variant="outlined"
                                                margin="dense"
                                                multiline
                                                rows={4}
                                                value={cardDescription}
                                                placeholder="Add a more detailed description"
                                                onChange={(event) => setCardDescription(event.target.value)}
                                                onBlur={() => {
                                                    cardDetails.description = cardDescription
                                                    updateCard(cardDetails);
                                                    setEditDescription(false)
                                                }}
                                            />
                                        </Grid>
                                        <Grid item>
                                            <Button
                                                className={classes.saveButton}
                                                onClick={() => {
                                                    cardDetails.description = cardDescription
                                                    updateCard(cardDetails);
                                                    setEditDescription(false)
                                                }}>
                                                Save
                                            </Button>
                                        </Grid>
                                        <Grid item>
                                            <Close
                                                className={classes.descriptionCloseIcon}
                                                onClick={() => setEditDescription(false)} />
                                        </Grid>
                                    </Grid> :
                                    <Typography onClick={() => setEditDescription(true)}>
                                        {cardDetails.description}
                                    </Typography>
                            }
                        </Grid>
                    </Grid>
                </Paper>
            </Modal>
        </Fragment >
    )
}

CardPopup.defaultProps = {
    classes: {},
    cardDetails: { title: '', description: '' },
    listDetails: { listTitle: '' }
}

export default withStyles(styles)(CardPopup);