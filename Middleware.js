const redux = require("redux");
const createStore = redux.createStore;
const combineReducers=redux.combineReducers;
const applyMiddleware =redux.applyMiddleware;

const initialStateBooks = {
  numberOfBooks: 10,
};

const initialStatePens = {
  numberOfPens:15,
};

function buyBook() {
  return {
    type: "Buy_Book",
    payload: "first redux code",
  };
}

function buyPen() {
    return {
      type: "Buy_Pen",
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
const logger=store=>{
    return next=>{
        return action=>{
            const result=next(action);
            console.log('middleware log',result);
            return result;
        }
    }
}

const store = createStore(reducer,applyMiddleware(logger));
console.log("Initial state value", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("update state value", store.getState());
});
store.dispatch(buyBook());
store.dispatch(buyPen());

unsubscribe();