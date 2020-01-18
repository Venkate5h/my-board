import { UPDATE_BOARD, ADD_NEW_LIST, UPDATE_CARD, UPDATE_LIST, ADD_NEW_CARD } from "../actions/boardActions"

const initialState = {
    board: []
}

export default (state = { ...initialState }, action) => {
    let updatedBoard = [...state.board];
    let newList = [];
    let newCard = {};
    let indexOfList = -1;
    let indexOfCard = -1;
    switch (action.type) {
        case UPDATE_BOARD:
            return {
                board: action.payload
            }
        case ADD_NEW_LIST:
            newList = action.payload;
            newList.listId = updatedBoard.length + 1;
            newList.cards = [];
            updatedBoard.push(newList);
            return {
                board: updatedBoard
            }
        case UPDATE_LIST:
            updatedBoard[updatedBoard.findIndex(list => list.listId === action.listDetails.listId)] = action.listDetails;
            return {
                board: updatedBoard
            }
        case ADD_NEW_CARD:
            newCard = action.cardDetails;
            indexOfList = updatedBoard.findIndex(list => list.listId === action.listId);
            if (indexOfList > -1) {
                newCard.cardId = updatedBoard[indexOfList].cards.length + 1;
                newCard.description = '';
                updatedBoard[indexOfList].cards.push(newCard);
            }
            return {
                board: updatedBoard
            }
        case UPDATE_CARD:
            indexOfList = updatedBoard.findIndex(list => list.listId === action.listId);
            if (indexOfList > -1) {
                indexOfCard = updatedBoard[indexOfList].cards.findIndex(card => card.cardId = action.cardDetails.cardId);
                if (indexOfCard > -1) {
                    updatedBoard[indexOfList].cards[indexOfCard] = action.cardDetails;
                }
            }
            return {
                board: updatedBoard
            }
        default:
            return state
    }
}