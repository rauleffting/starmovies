import { Container, Menu, Form, InputWrapper, TextArea, Markers, Buttons } from './styles';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Marker } from '../../components/Marker';
import { Button } from '../../components/Button';

export function New() {
  return(
    <Container>
      <Header />

      <Menu>
        <ButtonText title="Voltar" />
      </Menu>

      <main>
        <Form>
          <header>
            <h1>Novo filme</h1>
          </header>

          <InputWrapper>
            <input type="text" placeholder="Título"/>
            <input type="text" placeholder="Sua nota (de 0 a 5)"/>
          </InputWrapper>
          
          <TextArea placeholder="Observações"/>

          <h2>Marcadores</h2>

          <Markers>
            <Marker value="Ação" />
            <Marker isNew placeholder="Novo marcador"/>
          </Markers>

          <Buttons>
            <Button del title="Excluir filme"/>
            <Button title="Salvar alterações"/>
          </Buttons>
        </Form>
      </main>
    </Container>
  );
}