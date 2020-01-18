import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { updateBoard, updateCard, updateList, addNewList, addNewCard } from './actions/boardActions';
import { Board } from './components';

const mapStateToProps = state => ({
  board: state.boardReducer.board
})

const mapDispatchToProps = {
  updateBoard: updateBoard,
  updateCard: updateCard,
  updateList: updateList,
  addNewList: addNewList,
  addNewCard: addNewCard
}

const App = (props) => {
  return (
    <div className="App">
      <Board {...props} />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
