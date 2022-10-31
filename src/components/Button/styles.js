import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 56px;

  border: none;
  border-radius: 10px;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: ${({theme, bgBlack}) => bgBlack ? theme.COLORS.PINK :  theme.COLORS.BG_600};

  background-color: ${({theme, bgBlack}) => bgBlack ? '#0D0C0F' :  theme.COLORS.PINK};
`;