import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background: ${({ theme }) => theme.COLORS.BG_700 };

  border-radius: 10px;

  color: #948F99;

  > svg {
    margin-left: 16px;
  }

  > input {
    width: 100%;
    padding: 18px 16px;

    background: transparent;

    border: none;

    font-family: ${({ Icon }) => Icon ? 'Roboto Slab' : 'Roboto'};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: ${({Icon}) => Icon ? '21px' : '19px'};

    color: #F4EDE8;
  }
`;