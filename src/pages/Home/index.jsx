import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { Container, Menu, NewMovie, Plus, Content } from './styles';

import { Header } from '../../components/Header';
import { Movie } from '../../components/Movie';
import { Input } from '../../components/Input';

export function Home() {
  const [search, setSearch] = useState("");
  const [movieNotes, setMovieNotes] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchMovieNotes(){
      const response = await api.get(`/movie_notes?title=${search}`)
      setMovieNotes(response.data)
    }

    fetchMovieNotes()
  }, [search]);

  function handleDetails(id){
    navigate(`/preview/${id}`);
  }

  return(
    <Container>
      <Header>
        <Input 
        placeholder="Pesquisar pelo título" 
        onChange={event => setSearch(event.target.value)}
        />
      </Header>

      <Menu>
        <h1>Meus filmes</h1>

        <NewMovie to='/new'>
          <Plus />
          <span>Adicionar filme</span>
        </NewMovie>
      </Menu>

      <Content>
        {
          movieNotes.map( movieNote => (
            <Movie 
              key={String(movieNote.id)}
              data={movieNote}
              onClick={() => handleDetails(movieNote.id)}
            />
          ))
        }
      </Content>

    </Container>
  );
}