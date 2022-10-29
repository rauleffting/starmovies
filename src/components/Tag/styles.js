import styled from 'styled-components';

export const Container = styled.span`
  background-color: ${({ theme }) => theme.COLORS.BG_600};

  padding: 5px 16px;
  margin-right: 8px;
  border-radius: 8px;

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;

  color: #E5E5E5;
`;