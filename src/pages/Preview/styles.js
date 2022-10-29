import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-areas:
  "header"
  "menu"
  "content"
`;

export const Menu = styled.div`
  grid-area: menu;
  margin: 40px 123px 0;
`;

export const Content = styled.div`
  grid-area: content;
  margin: 24px 123px 0;

  overflow-y: auto;
`;
