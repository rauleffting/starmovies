import styled from 'styled-components';

export const Container = styled.button`
  background: none;
  color: #948F99;

  border: none;
  font-size: 14px;

  &:hover {
    color: ${({ theme }) => theme.COLORS.PINK}
  }
`;