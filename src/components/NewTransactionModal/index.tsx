import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { useTransactions } from '../../hooks/useTransactions';

import incomeIMG from '../../assets/income.svg';
import outcomeIMG from '../../assets/outcome.svg';
import closeIMG from '../../assets/close.svg'

import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const { createTransaction } = useTransactions();

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState('deposit');
  const [category, setCategory] = useState('');

  async function handleCreateNewTransaction(event: FormEvent) {    
    event.preventDefault();
    
    await createTransaction({
      title,
      amount,
      type,
      category
    });

    setTitle('');
    setAmount(0);
    setType('deposit');
    setCategory('');
    
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container onSubmit={handleCreateNewTransaction}>
        <button 
          type="button" 
          onClick={onRequestClose} 
          className="react-modal-close"        
        >
          <img src={closeIMG} alt="Fechar modal" />
        </button>
        <h2>Cadastrar transação</h2>

        <input          
          placeholder="Título"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"            
            onClick={() => { setType('deposit'); }}
            isActive={type === 'deposit'}
            activeColor="green"
          >            
            <img src={incomeIMG} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() =>{ setType('withdraw'); }}
            isActive={type === 'withdraw'}
            activeColor="red"
          >            
            <img src={outcomeIMG} alt="Saída" />
            <span>Saída</span>
          </RadioBox>          
        </TransactionTypeContainer>

        <input          
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}