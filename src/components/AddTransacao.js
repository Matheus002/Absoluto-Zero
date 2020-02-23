import React, {useState} from 'react'

export const AddTransacao = () => {
  const [texto, setTexto] = useState('');
  const [mont, setMont] = useState(0);

  return (
    <>
      <h3>Adicionar Nova Transação</h3>
      <form id="form">
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
