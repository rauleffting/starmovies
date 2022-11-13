import { useState } from 'react';
import { Container, Brand, Star, Search, Profile, SignOut } from './styles';
import { Input } from '../../components/Input';

import { Link, useNavigate } from 'react-router-dom';

import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';
import avatarPlaceHolder from '../../assets/avatar_placeholder.png';

export function Header({children}) {

  const { signOut, user } = useAuth();
  const navigation = useNavigate();

  function handleSignOut(){
    navigation("/");
    signOut();
  }

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;

  return(
    <Container>
      <Brand to="/">
        <Star />
        <h1>StarMovies</h1>
      </Brand>

      <Search>
        {
        children ? children : <Input placeholder="Pesquisar pelo título" />
        }
      </Search>

      <Profile> 
        <div>
          <strong>{user.name}</strong>
          <SignOut onClick={handleSignOut}> 
            sair
          </SignOut>
        </div>
        <Link to="/profile">
          <img src={avatarUrl} alt="Foto do usuário" />
        </Link>
      </Profile>
    </Container>
  );
}