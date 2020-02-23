import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//Estado Inicial
const initalState = {
  transactions: []
}

//Criar um contexto
export const GlobalContext = createContext(initalState);

//Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initalState);

//Actions
function delTransaction(id) {
  dispatch({
    type: 'DELETE_TRANSACTION',
    payload: id
  });
}

function addTransaction(transaction) {
  dispatch({
    type: "ADD_TRANSACTION",
    payload: transaction
  });
}

  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    delTransaction,
    addTransaction
  }}>
    {children}
  </GlobalContext.Provider>);
}