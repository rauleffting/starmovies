import { Container } from './styles';

import { FiPlus, FiX } from 'react-icons/fi';

export function Marker({ isNew, value, onClick, ...rest }) {
  return(
    <Container isNew={isNew}>
      <input 
        type="text" 
        value={value}
        readOnly={!isNew} /* O item já adicionado fica como leitura e não pode ser alterado */
        {...rest}
      />
      <button
        type="button"
        onClick={onClick}
        className={ isNew ? 'button-add' : 'button-delete' }
      >
        { isNew ? <FiPlus /> : <FiX /> }
      </button>
    </Container>
  );
}