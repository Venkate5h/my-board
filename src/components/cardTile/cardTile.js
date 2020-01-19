import React, { Fragment, useState } from 'react';
import { Card, Typography, withStyles, Button, Grid } from '@material-ui/core';
import CardPopup from '../cardPopup/cardPopup';

const styles = () => ({
    cardButton: {
        textTransform: "none",
        width: "100%",
        height: "100%"
    },
    cardTitle: {
        fontSize: "14px",
        color: "#172b4d"
    },
    cardDescription: {
        fontSize: "12px"
    }
})

const CardTile = (props) => {
    const { classes, ...other } = props;
    const { cardDetails } = other;
    const [showCardPopup, setShowCardPopup] = useState(false);

    return (
        <Fragment>
            <Card draggable onClick={() => setShowCardPopup(true)}>
                <Button variant="text" className={classes.cardButton}>
                    <Grid container alignItems="center">
                        <Grid item xs={12} md={12} align="left">
                            <Typography className={classes.cardTitle}>
                                {cardDetails.title}
                            </Typography>
                        </Grid>
                    </Grid>
                </Button>
            </Card>
            {
                showCardPopup &&
                <CardPopup
                    open={showCardPopup}
                    closeCardPopup={() => setShowCardPopup(false)}
                    {...other}
                />
            }
        </Fragment>
    )
}

CardTile.defaultProps = {
    cardDetails: {}
}

export default withStyles(styles)(CardTile);