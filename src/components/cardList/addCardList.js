import React, { Fragment, useState } from 'react';
import { Card, withStyles, TextField, Grid, Button } from '@material-ui/core';
import { Close } from '@material-ui/icons';

const styles = () => ({
    addCardList: {
        padding: " 4%",
        backgroundColor: "rgb(235, 236, 240)"
    },
    saveButton: {
        color: "#fff",
        textTransform: "none",
        backgroundColor: "#5aac44",
        '&:hover': {
            backgroundColor: "#5aa000",
        }
    },
    closeIcon: {
        cursor: "pointer"
    }
})

const AddCardList = (props) => {
    const { classes, addNewList, closeAddNewListView } = props;
    const [listTitle, setListTitle] = useState("");

    return (
        <Fragment>
            <Card className={classes.addCardList}>
                <Grid container alignItems="center" spacing={1}>
                    <Grid item xs={12} md={12}>
                        <TextField
                            autoFocus
                            fullWidth
                            variant="outlined"
                            margin="dense"
                            value={listTitle}
                            placeholder="Enter list title..."
                            onChange={(event) => {
                                setListTitle(event.target.value)
                            }}
                        />
                    </Grid>
                    <Grid item>
                        <Button
                            className={classes.saveButton}
                            onClick={() => {
                                if (listTitle) {
                                    addNewList({ listTitle: listTitle })
                                    closeAddNewListView()
                                }
                            }}>
                            Save
                        </Button>
                    </Grid>
                    <Grid item>
                        <Close
                            className={classes.closeIcon}
                            onClick={() => closeAddNewListView()} />
                    </Grid>
                </Grid>
            </Card>
        </Fragment>
    )
}

AddCardList.defaultProps = {
    classes: {},
    addNewList: () => { },
    closeAddNewListView: () => { }
}

export default withStyles(styles)(AddCardList);