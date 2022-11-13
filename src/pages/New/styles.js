import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-areas:
  "header"
  "menu"
  "form";
`;

export const Menu = styled.div`
  grid-area: menu;
  margin: 40px 123px 0;
`;

export const Form = styled.form`
  grid-area: form;
  margin: 24px 123px 0;

  overflow-y: auto;

  > header > h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 47px;

    color: #F4EDE8;

    margin-bottom: 40px;
  }

  > h2 {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;

    color: #999591;

    margin-bottom: 24px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 40px;
  justify-content: space-between;
  
  margin-bottom: 40px;
`;

export const TextArea = styled.textarea`
  padding: 19px 16px;
  margin-bottom: 40px;

  width: 100%;
  height: 274px;

  background: #262529;

  border: none;
  border-radius: 10px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #948F99;
`;

export const Markers = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 24px;

  margin-bottom: 40px;
  padding: 16px;
  width: 100%;

  background: #0D0C0F;
  border-radius: 8px;
`;

export const Buttons = styled.div`
  margin-bottom: 101px;

  display: flex;
  gap: 40px
`;