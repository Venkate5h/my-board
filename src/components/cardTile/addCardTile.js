import React, { Fragment, useState } from 'react';
import { withStyles, TextField, Grid, Button, Card } from '@material-ui/core';
import { Close } from '@material-ui/icons';

const styles = () => ({
    addCard: {
        padding: 0,
        margin: 0
    },
    addCardButton: {
        color: "#fff",
        textTransform: "none",
        backgroundColor: "#5aac44",
        '&:hover': {
            backgroundColor: "#5aa000",
        },
    },
    closeIcon: {
        cursor: "pointer"
    },
    underline: {
        "&&&:before": {
            borderBottom: "none"
        },
        "&&:after": {
            borderBottom: "none"
        }
    },
    cardTitleTextField: {
        padding: "1% 4% 1% 4%"
    }
})

const AddCardList = (props) => {
    const { classes, ...other } = props;
    const { listDetails, addNewCard, closeAddNewCardView } = other;
    const [cardTitle, setCardTitle] = useState("");

    return (
        <Fragment>
            <Grid container alignItems="center" spacing={1}>
                <Grid item xs={12} md={12}>
                    <Card className={classes.addCard}>
                        <TextField
                            autoFocus
                            fullWidth
                            margin="dense"
                            multiline
                            rows={3}
                            value={cardTitle}
                            placeholder="Enter a title for this card..."
                            onChange={(event) => {
                                setCardTitle(event.target.value)
                            }}
                            classes={{
                                root: classes.cardTitleTextField
                            }}
                            InputProps={{
                                classes: {
                                    underline: classes.underline
                                }
                            }}
                        />
                    </Card>
                </Grid>
                <Grid item>
                    <Button
                        className={classes.addCardButton}
                        onClick={() => {
                            if (cardTitle) {
                                addNewCard(listDetails.listId, { title: cardTitle })
                                closeAddNewCardView()
                            }
                        }}>
                        Add Card
                        </Button>
                </Grid>
                <Grid item>
                    <Close
                        className={classes.closeIcon}
                        onClick={() => closeAddNewCardView()} />
                </Grid>
            </Grid>
        </Fragment>
    )
}

AddCardList.defaultProps = {
    classes: {},
    addNewCard: () => { },
    closeaddNewCardView: () => { }
}

export default withStyles(styles)(AddCardList);