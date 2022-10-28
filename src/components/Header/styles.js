import styled from 'styled-components';
import { RiStarLine } from 'react-icons/ri';

export const Container = styled.header`
  grid-area: header;

  height: 116px;
  width: 100%;

  border-bottom: 1px solid #3E3B47;

  display: flex;
  justify-content: space-between;

  padding: 24px 123px;

  div + div {
    margin-left: 64px;
  }
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;

  > h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;

    color: ${({ theme }) => theme.COLORS.PINK};

    margin-left: 9px;
  }
`;

export const Star = styled(RiStarLine)`
  width: 24px;
  height: 24px;

  color: ${({ theme }) => theme.COLORS.PINK};
`;

export const Search = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  > input {
    background-color: ${({ theme }) => theme.COLORS.BG_700};

    border: none;
    border-radius: 10px;
    
    height: 56px;
    width: 100%;
    padding: 19px 24px;

    &:placeholder {
      color: "#948F99";

      font-size: 14px;
    }

  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > img {
    margin-left: 9px;
    width: 64px;
    height: 64px;

    border-radius: 50%;
  }
`;