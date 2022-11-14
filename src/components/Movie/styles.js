import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.LOW_PINK};

  display: flex;
  flex-direction: column;
  gap: 15px;

  height: 223px;
  width: 100%;
  padding: 32px;
  margin-bottom: 15px;

  border-radius: 16px;
  text-align: justify;

  > h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;

    color: #F4EDE8;
  }

  > span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #999591;

    overflow: hidden; /*  esconder o texto que fica para fora do container */
    text-overflow: ellipsis;
    white-space: nowrap;

    /* para a quebra de texto ficar em duas linhas */
    display: -webkit-box !important;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
  }
`;

export const Rating = styled.div`
  > svg {
    margin-right: 6px;

    width: 12px;
    height: 12px;

    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;