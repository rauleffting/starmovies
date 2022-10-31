import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  display: flex;
  align-items: center;

  background: none;
  color: ${({ theme }) => theme.COLORS.PINK};

  border: none;
  
  > svg {
    width: 16px;
    height: 16px;
    
    margin-right: 8px;
  }

  font-family: 'Roboto Slab';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
`;