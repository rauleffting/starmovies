import styled from 'styled-components';
import { FiPlus } from 'react-icons/fi';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-areas:
  "header"
  "menu"
  "content";
  overflow: hidden;

  .content::-webkit-scrollbar {
    width: 8px;
  }
  .content::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 8px;
  }
`;

export const Menu = styled.div`
  grid-area: menu;

  display: flex;
  justify-content: space-between;
  max-height: 138px;

  padding: 50px 123px 40px;

  > h1 {
    font-weight: 400;
    font-style: normal;
    font-size: 32px;
    line-height: 42px;

    color: #FFFFFF;
  }
`;

export const NewMovie = styled(Link)`
  display: flex;
  align-items: center;

  max-height: 48px;

  padding: 14px 32px;
  border-radius: 8px;

  color: #1C1B1E;
  background-color: ${({ theme }) => theme.COLORS.PINK};

  > span {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;

    margin-left: 8px;
  }

  svg {
    width: 16px;
    height: 16px;

    color: #1C1B1E;
  }
`;

export const Plus = styled(FiPlus)`
  width: 16px;
  height: 16px;
`;

export const Content = styled.div`
  grid-area: content;
  margin: 0px 123px 0;
  padding-bottom: 59px;
  min-height: 550px;

  overflow-y: auto;

  > main {
    margin-right: 8px;
  }
  
   .movie{
    cursor: pointer;
  }

  .movie:hover {
    filter: brightness(0.8);
  }
`;
