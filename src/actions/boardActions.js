export const UPDATE_BOARD = 'UPDATE_BOARD';
export const ADD_NEW_LIST = 'ADD_NEW_LIST';
export const UPDATE_LIST = 'UPDATE_LIST';
export const ADD_NEW_CARD = 'ADD_NEW_CARD';
export const MOVE_CARD = 'MOVE_CARD';
export const UPDATE_CARD = 'UPDATE_CARD';

export const updateBoard = (board) => ({
    type: UPDATE_BOARD,
    payload: board
})

export const addNewList = (newList) => ({
    type: ADD_NEW_LIST,
    payload: newList
})

export const moveList = (position) => ({
    type: MOVE_CARD,
    position
})

export const updateList = (listDetails) => ({
    type: UPDATE_LIST,
    listDetails: listDetails
})

export const addNewCard = (listId, cardDetails) => ({
    type: ADD_NEW_CARD,
    listId: listId,
    cardDetails: cardDetails
})

export const moveCard = (fromList, toList, cardId) => ({
    type: MOVE_CARD,
    fromList,
    toList,
    cardId
})

export const updateCard = (listId, cardDetails) => ({
    type: UPDATE_CARD,
    listId: listId,
    cardDetails: cardDetails
})