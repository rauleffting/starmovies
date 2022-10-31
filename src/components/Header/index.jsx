import { Container, Brand, Star, Search, Profile, SignOut } from './styles';
import { Input } from '../../components/Input';

import { Link } from 'react-router-dom';

export function Header() {
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
          <SignOut> 
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