import React, {useState, useContext} from 'react';
import { GlobalContext } from "../context/GlobalState";

export const AddTransacao = () => {
  const [texto, setTexto] = useState('');
  const [mont, setMont] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const addT = e => {
    e.preventDefault();

    const novaTransacao = {
      id: Math.floor(Math.random() * 1000000000),
      texto,
      quantia: +mont
    }

    addTransaction(novaTransacao);
  }

  return (
    <>
      <h3>Adicionar Nova Transação</h3>
      <form onSubmit={addT}>
        <div className="form-control">
          <label htmlFor="text">Descrição</label>
          <input
            type="text"
            value={texto}
            onChange={e => setTexto(e.target.value)}
            placeholder="digite uma descrição..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Quantia <br />
            (negativo - despeza, positivo - lancamento)
          </label>
          <input
            type="number"
            value={mont}
            onChange={e => setMont(e.target.value)}
            placeholder="Digite uma quantia..."
          />
        </div>
        <button className="btn">Adicionar Transação</button>
      </form>
    </>
  );
}
