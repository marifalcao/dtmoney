import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from './style';
import { FormEvent, useState } from 'react';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { api } from '../../services/api';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose } : NewTransactionModalProps) {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const data = {
      title, value, category, type
    }

    api.post('/transactions', data)
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <button
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
              fill="#A8A8B3"
            />
          </svg>
        </button>

        <Container onSubmit={handleCreateNewTransaction}>
          <h2>Cadastrar transação</h2>
          <input 
          placeholder="Título" 
          value={title}
          onChange={event => setTitle(event.target.value)}
          ></input>
          <input 
          type="number" 
          placeholder="Valor" 
          value={value}
          onChange={event => setValue(Number(event.target.value))}
          ></input>
          <TransactionTypeContainer>
            <RadioBox
              type="button"
              onClick={() => {
                setType('deposit');
              }}
              isActive={type === 'deposit'}
              activeColor="green"
            >
              <img src={incomeImg} alt="Entrada" />
              <span>Entrada</span>
            </RadioBox>
            <RadioBox
              type="button"
              onClick={() => {
                setType('withdraw');
              }}
              isActive={type === 'withdraw'}
              activeColor="red"
            >
              <img src={outcomeImg} alt="Saída" />
              <span>Saída</span>
            </RadioBox>
          </TransactionTypeContainer>
          <input 
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)}
          ></input>
          <button type="submit">Cadastrar</button>
        </Container>
      </Modal>
    </>
  );
}
