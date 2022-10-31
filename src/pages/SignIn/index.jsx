import { Container, Form, Star, SignUp, Background, InputWrapper } from './styles';

import { FiMail, FiLock } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';


export function SignIn(){
  return(
    <Container>
      <Form>
        <header>
          <Star />
          <h1>StarMovies</h1>
        </header>
        
        <span>Aplicação para acompanhar tudo que assistir.</span>

        <h3>Faça seu login</h3>

        <InputWrapper>
          <Input 
            placeholder="E-mail"
            type="text"
            icon={FiMail}/>
          <Input 
            placeholder="Senha"
            type="text"
            icon={FiLock}/>
        </InputWrapper>
        

        <Button title="Entrar" />

        <SignUp to='/register'>Criar conta</SignUp>
      </Form>

      <Background />
    </Container>
  );
}