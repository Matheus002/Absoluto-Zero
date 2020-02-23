import React from 'react'

export const Transaction = ({ transaction }) => {
  const sign = transaction.quantia < 0 ? '-' : '+';
  return (
    <li className={transaction.quantia < 0 ? 'minus' : 'plus'}>
      {transaction.texto} <span>{sign}R${Math.abs(transaction.quantia)}</span>
      <button className="delete-btn">x</button>
    </li>
  );
}
