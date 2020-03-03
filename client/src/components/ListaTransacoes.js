import React, { useContext, useEffect } from 'react';
import { Transaction } from './Transaction';

import { GlobalContext } from '../context/GlobalState';

export const ListaTransacoes = () => {
    const { transactions, getTransactions } = useContext(GlobalContext);

    useEffect(() => {
      getTransactions();
      //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  console.log(transactions);
  return (
    <>
    <h3>Historico</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction}/>))}
         
      </ul>      
    </>
  )
}
