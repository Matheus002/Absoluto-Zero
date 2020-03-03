import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { numerosComPontos } from "../utils/format";

export const Transaction = ({ transaction }) => {
  const { delTransaction } = useContext(GlobalContext);

  const sign = transaction.quantia < 0 ? '-' : '+';
  return (
    <li className={transaction.quantia < 0 ? 'minus' : 'plus'}>
      {transaction.texto} <span>{sign}R${numerosComPontos(Math.abs(transaction.quantia))}</span>
      <button onClick={() => delTransaction(transaction._id)} className="delete-btn">x</button>
    </li>
  );
}
