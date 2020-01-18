import React, { Fragment, useState } from 'react';
import { Card, Typography, withStyles } from '@material-ui/core';
import CardPopup from '../cardPopup/cardPopup';

const styles = () => ({
    cardTileHolder: {
        padding: "4%",
        cursor: "pointer",
        '&:hover': {
            backgroundColor: "grey"
        }
    },
    cardTitle: {
        fontSize: "14px",
        fontWeight: "bold",
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
            <Card draggable className={classes.cardTileHolder} onClick={() => setShowCardPopup(true)}>
                <Typography className={classes.cardTitle}>
                    {cardDetails.title}
                </Typography>
                <Typography className={classes.cardDescription}>
                    {cardDetails.description}
                </Typography>
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