import React, { Fragment, useState } from 'react';
import { Card, Grid, Button, withStyles, IconButton, TextField } from '@material-ui/core';
import { MoreHoriz } from '@material-ui/icons';
import { CardTile, AddCardTile } from '..';

const styles = () => ({
    cardContainer: {
        padding: "1% 2% 2% 2%",
        backgroundColor: "rgb(235, 236, 240)"
    },
    addAnotherButton: {
        width: "100%",
        textTransform: "none",
        color: "#5e6c84"
    },
    listTitle: {
        outline: "",
        border: "none",
        padding: "2%",
        '&:active': {
            backgroundColor: "white"
        },

    }
})

const CardList = (props) => {
    const { classes, ...other } = props;
    const { listDetails } = other;
    const [addNewCard, setAddNewCard] = useState(false);
    const [listTitle, setListTitle] = useState(listDetails.listTitle);

    return (
        <Fragment>
            <Card className={classes.cardContainer} onDropCapture={(event) => event.preventDefault()}>
                <Grid container alignItems="center" spacing={1}>
                    <Grid item xs={12} md={12}>
                        <Grid container alignItems="center" justify="space-between" spacing={1}>
                            <Grid item xs={9}>
                                <TextField
                                    fullWidth
                                    value={listTitle}
                                    variant="outlined"
                                    margin="dense"
                                    size="small"
                                    onChange={(event) => setListTitle(event.target.value)}
                                    onBlur={() => {
                                        if (listTitle) {
                                            listDetails.listTitle = listTitle;
                                        }
                                    }}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <IconButton size="small">
                                    <MoreHoriz />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                    {
                        listDetails && listDetails.cards.map(cardDetails =>
                            <Grid item xs={12} md={12} key={cardDetails.cardId}>
                                <CardTile cardDetails={cardDetails} {...other} />
                            </Grid>
                        )
                    }

                    <Grid item xs={12} md={12}>
                        {
                            addNewCard ?
                                <AddCardTile {...other} closeAddNewCardView={() => setAddNewCard(false)} /> :
                                <Button
                                    className={classes.addAnotherButton}
                                    onClick={() => setAddNewCard(true)}>
                                    + Add another card
                                </Button>
                        }
                    </Grid>
                </Grid>
            </Card>
        </Fragment>
    )
}

CardList.defaultProps = {
    listDetails: []
}

export default withStyles(styles)(CardList);