import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-areas:
  "header"
  "menu"
  "content";

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
  margin: 40px 123px 0;
`;

export const Content = styled.div`
  grid-area: content;
  margin: 24px 123px 0;
  padding-bottom: 156px;

  overflow-y: auto;

  > main {
    margin-right: 16px;
  }
`;

export const MovieHeading = styled.div`
  display: flex;
  align-items: center;

  > h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 47px;

    color: #F4EDE8;
  }
`;

export const Rating = styled.div`
  margin-left: 19px;

  > svg {
    margin-right: 10px;

    width: 20px;
    height: 20px;

    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Author = styled.div`
  margin: 24px 0 40px;
  display: flex;
  align-items: center;
  gap: 8px;

  > img {
    width: 16px;
    height: 16px;

    border-radius: 50%;
  }

  > span {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #F4EDE8;
  }

  > svg {
    width: 16px;
    height: 16px;

    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Info = styled.p`
  margin-top: 40px;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  text-align: justify;

  color: #F4EDE8;
`;