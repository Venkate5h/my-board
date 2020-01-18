import React, { Fragment, useEffect, useState } from 'react';
import { Typography, Grid, Button, withStyles } from '@material-ui/core';
import { fetchBoard } from '../../services/boardService';
import { CardList, AddCardList } from '..';

const styles = () => ({
    boardTitle: {
        color: "white"
    },
    addNewList: {
        width: "100%",
        backgroundColor: "#76ce8e",
        textTransform: "none",
        color: "white"

    }
})

const Board = (props) => {
    const { classes, ...other } = props;
    const { board, updateBoard } = other;

    const [addNewListView, setAddNewListView] = useState(false);

    useEffect(() => {
        fetchBoard().then(res => {
            if (res.data) {
                updateBoard(res.data);
            }
        })
    }, [updateBoard])

    return (
        <Fragment>
            <Grid container alignItems="center" spacing={4}>
                <Grid item xs={12} md={12} align="left">
                    <Typography variant="h6" className={classes.boardTitle}>
                        My Board
                    </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Grid container alignItems="flex-start" spacing={1}>
                        {
                            board.map(listDetails =>
                                <Grid item xs={6} sm={4} md={4} lg={3} xl={2} key={listDetails.listId}>
                                    <CardList
                                        listDetails={listDetails}
                                        {...other} />
                                </Grid>
                            )
                        }
                        <Grid item xs={6} sm={4} md={4} lg={3} xl={2}>
                            {
                                addNewListView ?
                                    <AddCardList
                                        closeAddNewListView={() => setAddNewListView(false)}
                                        {...other} />
                                    :
                                    <Button
                                        className={classes.addNewList}
                                        onClick={() => setAddNewListView(true)}>
                                        + Add new list
                                    </Button>
                            }
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </Fragment>
    )
}

Board.defaultProps = {
    board: [],
    updateBoard: () => { }
}

export default withStyles(styles)(Board);