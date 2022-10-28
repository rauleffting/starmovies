import { Container, Brand, Star, Search, Profile } from './styles';
import { ButtonText } from '../ButtonText';

export function Header() {
  return(
    <Container>
      <Brand to="#">
        <Star />
        <h1>StarMovies</h1>
      </Brand>

      <Search>
        <input type="text" placeholder="Pesquisar pelo título" />
      </Search>

      <Profile> 
        <div>
          <strong>Raul Effting</strong>
          <ButtonText title="sair"/>
        </div>
        <img src="https://github.com/rauleffting.png" alt="Foto do usuário" />
      </Profile>
    </Container>
  );
}