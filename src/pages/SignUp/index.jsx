import { useState } from 'react';
import { Container, Form, Star, ArrowLeft, Background, InputWrapper, SignIn, LinkWrapper } from './styles';

import { FiUser, FiMail, FiLock } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { api } from '../../services/api';
import { Link, useNavigate } from 'react-router-dom';

export function SignUp(){

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  function handleSignUp(){
    if(!name || !email || !password) {
      alert("Preencha todos os campos corretamente!");
    }

    api.post("/users", { name, email, password })
    .then(() => {
      alert("Usuário cadastrado com sucesso!");
      navigate("/");
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message);
      } else {
        alert("Não foi possível cadastrar.")
      }
    })
  }

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
            icon={FiUser}
            onChange={event => setName(event.target.value)}
          />
          <Input 
            placeholder="E-mail"
            type="text"
            icon={FiMail}
            onChange={event => setEmail(event.target.value)}
          />
          <Input 
            placeholder="Senha"
            type="password"
            icon={FiLock}
            onChange={event => setPassword(event.target.value)}
          />
        </InputWrapper>
        

        <Button 
          title="Cadastrar" 
          onClick={handleSignUp}
        />

        <LinkWrapper>
          <ArrowLeft />
          <SignIn to='/'>Voltar para o login</SignIn>
        </LinkWrapper>
      </Form>

      <Background />
    </Container>
  );
}