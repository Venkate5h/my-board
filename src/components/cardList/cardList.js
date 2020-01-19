import React, { Fragment, useState } from 'react';
import { Card, Grid, Button, withStyles, IconButton, TextField, Typography } from '@material-ui/core';
import { MoreHoriz } from '@material-ui/icons';
import { CardTile, AddCardTile } from '..';

const styles = () => ({
    cardContainer: {
        padding: "1% 3% 2% 3%",
        backgroundColor: "rgb(235, 236, 240)"
    },
    addAnotherButton: {
        width: "100%",
        textTransform: "none",
        color: "#5e6c84"
    },
    listTitle: {
        padding: "6% 5% 4% 4%",
        fontSize: "16px",
        fontWeight: "bold",
        cursor: "pointer",
        color: "#6d798f"
    },
    listTileTextField: {
        fontSize: "16px",
        color: "#6d798f",
        fontWeight: "bold"
    }
})

const CardList = (props) => {
    const { classes, ...other } = props;
    const { listDetails, updateList } = other;
    const [addNewCard, setAddNewCard] = useState(false);
    const [editListTitle, setEditListTitle] = useState(false);
    const [listTitle, setListTitle] = useState(listDetails.listTitle);

    return (
        <Fragment>
            <Card draggable className={classes.cardContainer}>
                <Grid container alignItems="center" spacing={1}>
                    <Grid item xs={12} md={12}>
                        <Grid container alignItems="center" justify="space-between" spacing={1}>
                            <Grid item xs={10}>
                                {
                                    editListTitle ?
                                        <TextField
                                            autoFocus
                                            fullWidth
                                            value={listTitle}
                                            variant="outlined"
                                            margin="dense"
                                            size="small"
                                            onChange={(event) => setListTitle(event.target.value)}
                                            onBlur={() => {
                                                if (listTitle) {
                                                    listDetails.listTitle = listTitle;
                                                    updateList(listDetails);
                                                }
                                                setEditListTitle(false);
                                                setListTitle(listDetails.listTitle);
                                            }}
                                            classes={{
                                                root: classes.listTileTextField
                                            }}
                                        /> :
                                        <Typography
                                            className={classes.listTitle}
                                            onClick={() => setEditListTitle(true)}>
                                            {listDetails.listTitle}
                                        </Typography>
                                }
                            </Grid>
                            <Grid item xs={2} align="right">
                                <IconButton size="small" disabled>
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
                                <AddCardTile
                                    closeAddNewCardView={() => setAddNewCard(false)}
                                    {...other} /> :
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
    classes: {},
    listDetails: [],
    updateList: []
}

export default withStyles(styles)(CardList);