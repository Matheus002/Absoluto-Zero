import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { GastosProventos } from './components/GastosProventos';
import { ListaTransacoes } from './components/ListaTransacoes';
import { AddTransacao } from './components/AddTransacao';

import { GlobalProvider } from './context/GlobalState'
import './App.css';

function App() {
  return (
    <GlobalProvider>
     <Header />
     <div className="container">
       <Balance />
       <GastosProventos />
       <ListaTransacoes />
       <AddTransacao />
     </div>
    </GlobalProvider>
  );
}

export default App;
