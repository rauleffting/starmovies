import styled from 'styled-components';

import backgroundImg from '../../assets/background.jpg';

import { RiStarLine } from 'react-icons/ri';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: 100vh;

  display: flex;
`;

export const Form = styled.form`
  padding: 0 134px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > header {
    display: flex;
    align-items: center;
    gap: 8px;

    h1 {
    color: ${({ theme }) => theme.COLORS.PINK};

    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 63px;
    }
  }

  > span {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;

    color: #CAC4CF;

    margin-bottom: 48px;
  }
  
  > h3 {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;

    color: #F4EDE8;

    margin-bottom: 48px;
  }
`;

export const SignUp = styled(Link)`
  margin-top: 42px;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;

  color:${({ theme }) => theme.COLORS.PINK};
`;

export const Star = styled(RiStarLine)`
  width: 48px;
  height: 48px;

  color: ${({ theme }) => theme.COLORS.PINK};
`;

export const InputWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-bottom: 24px;
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;