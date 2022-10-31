import { Container, Form, Star, ArrowLeft, Background, InputWrapper, SignIn, LinkWrapper } from './styles';

import { FiUser, FiMail, FiLock } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignUp(){
  return(
    <Container>
      <Form>
        <header>
          <Star />
          <h1>StarMovies</h1>
        </header>
        
        <span>Aplicação para acompanhar tudo que assistir.</span>

        <h3>Crie sua conta</h3>

        <InputWrapper>
          <Input 
            placeholder="Nome"
            type="text"
            icon={FiUser}/>
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

        <LinkWrapper>
          <ArrowLeft />
          <SignIn to='/'>Voltar para o login</SignIn>
        </LinkWrapper>
      </Form>

      <Background />
    </Container>
  );
}