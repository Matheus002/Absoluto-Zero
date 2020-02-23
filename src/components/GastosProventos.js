import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const GastosProventos = () => {
  const { transactions } = useContext(GlobalContext);

  const quantias = transactions.map(transaction => transaction.quantia);

  const proventos = quantias.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2); 
  const despezas = quantias.filter(item => item < 0).reduce((acc, item) => (acc += item), 0).toFixed(2); 
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Lancamentos</h4>
        <p id="money-plus" className="money plus">
          {proventos}
        </p>
      </div>
      <div>
        <h4>Despezas</h4>
        <p id="money-minus" className="money minus">
          {despezas}
        </p>
      </div>
    </div>
  );
}
