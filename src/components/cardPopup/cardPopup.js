import React, { Fragment, useState } from 'react';
import { Modal, Paper, withStyles, Typography, IconButton, Grid, InputLabel, TextField, Button } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import styles from './cardPopupStyles';

const CardPopup = (props) => {
    const { classes, ...other } = props;
    const { cardDetails, listDetails, closeCardPopup, open, updateCard } = other;
    const [cardTitle, setCardTitle] = useState(cardDetails.title);
    const [editCardTitle, setEditCardTitle] = useState(false);
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
                            {
                                editCardTitle ?
                                    <TextField
                                        autoFocus
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
                                                updateCard(cardDetails)
                                            }
                                            setEditCardTitle(false)
                                            setCardTitle(cardDetails.title)
                                        }}
                                    /> :
                                    <Typography
                                        className={classes.cardTitle}
                                        onClick={() => setEditCardTitle(true)}>
                                        {cardDetails.title}
                                    </Typography>
                            }
                            <Typography variant="subtitle1">
                                in list {listDetails.listTitle}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <InputLabel>
                                <Typography className={classes.descriptionLabel}>
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
                                                placeholder="Add a more detailed description..."
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
                                    <Typography
                                        variant="subtitle2"
                                        className={classes.cardDescription}
                                        onClick={() => setEditDescription(true)}>
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