import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  padding-right: 16px;
  height: 56px;

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BG_700 };

  border: ${({ theme, isNew }) => isNew ? '2px dashed #948F99' : 'none' };
  border-radius: 10px;

  > input {
    padding: 16px;

    background: transparent;

    border: none;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: ${({ isNew }) => isNew ? '#948F99' : '#FFFFFF'};
  }

  > button {
    background: transparent;

    color: ${({ theme }) => theme.COLORS.PINK};

    width: 24px;
    height: 24px;

    border: none
  }
`;