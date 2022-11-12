import { useState } from 'react';
import { Container, Form, Star, SignUp, Background, InputWrapper } from './styles';

import { FiMail, FiLock } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useAuth } from '../../hooks/auth';

export function SignIn(){
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");
  
  const { signIn } = useAuth();

  function handleSignIn(){
    signIn({ email, password });
  }

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
            icon={FiMail}
            onChange={ event => setEmail(event.target.value) }
          />
          <Input 
            placeholder="Senha"
            type="text"
            icon={FiLock}
            onChange={ event => setPassword(event.target.value) }
          />
        </InputWrapper>
        

        <Button 
          title="Entrar" 
          onClick={handleSignIn}  
        />

        <SignUp to='/register'>Criar conta</SignUp>
      </Form>

      <Background />
    </Container>
  );
}