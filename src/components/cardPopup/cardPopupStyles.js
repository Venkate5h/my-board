const cardPopupStyles = (theme) => ({
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
    },
    cardTitle: {
        fontSize: "18px",
        fontWeight: "bold",
        cursor: "pointer"
    },
    descriptionLabel: {
        fontSize: "16px",
        fontWeight: "bold",
    },
    cardDescription: {
        cursor: "pointer"
    }
})

export default cardPopupStyles;