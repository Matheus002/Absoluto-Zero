import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//Estado Inicial
const initalState = {
  transactions: [
    { id: 1, texto: 'Almoço', quantia: -12},
    { id: 2, texto: 'Proventos', quantia: 650},
    { id: 3, texto: 'Livros, Hqs e Mangás', quantia: -200},
    { id: 4, texto: 'Deposito', quantia: 150}
  ]
}

//Criar um contexto
export const GlobalContext = createContext(initalState);

//Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initalState);

  return (<GlobalContext.Provider value={{
    transactions: state.transactions
  }}>
    {children}
  </GlobalContext.Provider>);
}