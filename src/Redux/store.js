import { createStore, combineReducers } from "redux";

const initialState = {
  balance: 0,
  fullName: null,
  mobile: null,
};

// const transactionsData = [];

const todoData = {
    todoList:[],
    todoId:1
}

function accountDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case "deposit":
      return { ...state, balance: state.balance + +action.payload };
    case "withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "updateMobile":
      return { ...state, mobile: action.payload };
    case "nameUpdate":
        return {...state, fullName:action.payload};
    case "reset":
        return initialState
    default:
      return state;
  }
}

const transactionReducer = (state=[], action) =>{
    switch(action.type){
        case "ADD":
            return [...state, {amount:action.payload.amount, type:action.payload.type, date:action.payload.date}]
        default :
        return state
    }
}


const todoReducer = (state=todoData, action) =>{
    switch(action.type){
        case "ADD_TODO":
            const newTodo = {id:state.id,title:action.payload.title}
            return {...state, todoList:[...state.todoList, newTodo],todoId:state.todoId+1 }
        case "EDIT_TODO":
            // const newTodo = {id:state.id,title:action.payload.title}
            return {...state, todoList:state.todoList.map(each => each.id === action.payload.id?({...each, title:action.payload.title}):(each))}
        case "DELETE_TODO":
            return {...state, todoList:state.todoList.filter(each => each.id !== action.payload.id)}
        default:
            return state
    }

}

//variable root reducer its your wish whatever name
let rootReducer = combineReducers(
    {
        account:accountDetailsReducer,
        transactions:transactionReducer,
        todos:todoReducer
    }
)

let store = createStore(rootReducer);

export default store

// console.log(store.getState());

// store.dispatch({ type: "deposit", payload: 1000 });
// store.dispatch({ type: "withdraw", payload: 100 });
// store.dispatch({ type: "updateData", payload: 799552726 });
// store.dispatch({type:"nameUpdate", payload:"Bhanuprakash"})
// console.log(store.getState());
