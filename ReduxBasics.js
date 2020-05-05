// yarn init --yes
// npm install redux

// import React from 'react'
const redux = require("redux");
const createStore = redux.createStore;
const combineReducers=redux.combineReducers;
const Buy_Book = "Buy_Book";
const Buy_Pen='Buy_Pen';
const initialStateBooks = {
  numberOfBooks: 10,
};

const initialStatePens = {
  numberOfPens:15,
};

function buyBook() {
  return {
    type: Buy_Book,
    payload: "first redux code",
  };
}

function buyPen() {
    return {
      type: Buy_Pen,
      payload: "Second redux code",
    };
  }

const BooksReducer = (state=initialStateBooks,action) => {
  switch (action.type) {
      case "Buy_Book":return {
        ...state,
        numberOfBooks: state.numberOfBooks+1,
      };
      
    default:
      return state;
  }
};

const PensReducer = (state=initialStatePens,action) => {
  switch (action.type) {
      
case "Buy_Pen":return {
  ...state,
  numberOfPens:state.numberOfPens*2
};
      
    default:
      return state;
  }
};
const reducer=combineReducers({
  Book:BooksReducer,
  Pen:PensReducer
})

const store = createStore(reducer);
console.log("Initial state value", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("update state value", store.getState());
});
store.dispatch(buyBook());
store.dispatch(buyPen());

unsubscribe();

