import { Container, Brand, Star, Search, Profile, SignOut } from './styles';
import { Input } from '../../components/Input';

import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

export function Header() {

  const { signOut } = useAuth();
  const navigation = useNavigate();

  function handleSignOut(){
    navigation("/");
    signOut();
  }

  return(
    <Container>
      <Brand to="/">
        <Star />
        <h1>StarMovies</h1>
      </Brand>

      <Search>
        <Input type="text" placeholder="Pesquisar pelo título" />
      </Search>

      <Profile> 
        <div>
          <strong>Raul Effting</strong>
          <SignOut onClick={handleSignOut}> 
            sair
          </SignOut>
        </div>
        <Link to="/profile">
          <img src="https://github.com/rauleffting.png" alt="Foto do usuário" />
        </Link>
      </Profile>
    </Container>
  );
}