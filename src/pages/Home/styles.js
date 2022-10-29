import styled from 'styled-components';
import { FiPlus } from 'react-icons/fi';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-areas:
  "header"
  "menu"
  "content";
`;

export const Menu = styled.div`
  grid-area: menu;

  display: flex;
  justify-content: space-between;

  padding: 50px 123px 40px;

  > h1 {
    font-weight: 400;
    font-style: normal;
    font-size: 32px;
    line-height: 42px;

    color: #FFFFFF;
  }
`;

export const NewMovie = styled.div`
  display: flex;
  align-items: center;

  padding: 14px 32px;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.PINK};

  > span {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;

    margin-left: 8px;
  }
`;

export const Plus = styled(FiPlus)`
  width: 16px;
  height: 16px;
`;

export const Content = styled.div`
  grid-area: content;
  padding: 0px 123px 59px;

  overflow-y: auto;

  div + div {
    margin-top: 24px;
  }
`;