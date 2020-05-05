// yarn init --yes
// npm install redux

// import React from 'react'
const redux = require("redux");
const createStore = redux.createStore;
const Buy_Book = "Buy_Book";
const Buy_Pen='Buy_Pen';
const initialState = {
  numberOfBooks: 10,
  numberOfPens:15,
  nameOfAuthor: "aman"
};
// const action={
//     type: BuyBook,
//     info:'first redux code'
// }

// action creator:wrapping the action in a single fuction 
function buyBook() {
  return {
    //   action
    type: Buy_Book,
    payload: "first redux code",
  };
}

function buyPen() {
    return {
      //   action
      type: Buy_Pen,
      payload: "Second redux code",
    };
  }
// reducer ma 2 cheezain hoti hain
// (prevState,action)=>newState

const Reducer = (state=initialState,action) => {
  switch (action.type) {
      case "Buy_Book":return {
        ...state,
        // jin value ko use nai kiya auko clone karega
        numberOfBooks: state.numberOfBooks+1,
        // numberOfPens:state.numberOfPens*2
      };
      case "Buy_Pen":return {
        ...state,
        // jin value ko use nai kiya auko clone karega
        // numberOfBooks: state.numberOfBooks+1,
        numberOfPens:state.numberOfPens*2
      };
    default:
      return state;
  }
};

const store = createStore(Reducer);
console.log("Initial state value", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("update state value", store.getState());
});
store.dispatch(buyBook());
store.dispatch(buyPen());

unsubscribe();
