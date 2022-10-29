import styled from 'styled-components';

export const Container = styled.button`
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

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
`;